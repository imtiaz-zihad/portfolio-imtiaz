import { Resend } from "resend";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Where messages are delivered and which sender address is used.
// Note: "onboarding@resend.dev" can only deliver to the email address that
// owns the Resend account. To send anywhere else, verify your own domain in
// Resend and set CONTACT_FROM_EMAIL (e.g. "Portfolio <contact@imtiaz.swe.bd>").
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "imtiaz20067@gmail.com";
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";

// Simple in-memory rate limit (per server instance).
// Good enough to stop casual spam; use Upstash/Redis for a strict limit.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 3;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);

  // Keep the map from growing forever.
  if (hits.size > 1000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }
  return false;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_MAILER_KEY;
    if (!apiKey) {
      console.error("RESEND_MAILER_KEY is not set");
      return NextResponse.json({ error: "Email service unavailable" }, { status: 500 });
    }
    // Created inside the handler so builds don't fail when the key is missing.
    const resend = new Resend(apiKey);

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many messages. Please try again later." },
        { status: 429 },
      );
    }

    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const { name, email, subject, message, website } = body as Record<
      string,
      unknown
    >;

    // Honeypot: real users never fill this hidden field. Pretend success.
    if (typeof website === "string" && website.trim() !== "") {
      return NextResponse.json({ success: true });
    }

    const cleanName = typeof name === "string" ? name.trim() : "";
    const cleanEmail = typeof email === "string" ? email.trim() : "";
    const cleanMessage = typeof message === "string" ? message.trim() : "";
    const cleanSubject =
      typeof subject === "string" ? subject.replace(/[\r\n]+/g, " ").trim() : "";

    if (!cleanName || cleanName.length > 100) {
      return NextResponse.json({ error: "Please enter a valid name." }, { status: 400 });
    }
    if (!EMAIL_RE.test(cleanEmail) || cleanEmail.length > 254) {
      return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
    }
    if (cleanMessage.length < 10 || cleanMessage.length > 3000) {
      return NextResponse.json(
        { error: "Message must be between 10 and 3000 characters." },
        { status: 400 },
      );
    }
    if (cleanSubject.length > 150) {
      return NextResponse.json({ error: "Subject is too long." }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: cleanEmail,
      subject: `[Portfolio] ${cleanSubject || `New message from ${cleanName}`}`,
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${escapeHtml(cleanName)}</p>
        <p><b>Email:</b> ${escapeHtml(cleanEmail)}</p>
        <p><b>Message:</b></p>
        <p style="white-space:pre-wrap">${escapeHtml(cleanMessage)}</p>
      `,
    });

    // Resend returns { data, error } instead of throwing on API errors.
    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Email failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}