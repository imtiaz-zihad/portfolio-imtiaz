"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "EMAIL", value: "mdimtiazzihad@gmail.com", href: "mailto:mdimtiazzihad@gmail.com" },
  { icon: Phone, label: "PHONE", value: "+880 1958403338", href: "tel:+8801958403338" },
  { icon: MessageCircle, label: "WHATSAPP", value: "Chat on WhatsApp", href: "https://wa.me/8801958403338" },
];

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<"success" | "error">("success");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setToastType("success");
      setToastMessage("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setToastType("error");
      setToastMessage("Failed to send message.");
    }
    setTimeout(() => setToastMessage(null), 5000);
    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,230,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,230,0.04)_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-3xl relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-foreground mb-2">
            Let&apos;s build<br />
            something <span className="gradient-text">real</span>
            <span className="inline-block w-2 h-5 bg-primary ml-1 align-middle animate-pulse" />
          </h2>
          <p className="font-mono text-sm text-muted-foreground mt-2">
          </p>
        </motion.div>

        {/* Contact chips */}
        <motion.div
          className="flex flex-wrap gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {contactInfo.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2.5 rounded-full border border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-primary/50 transition-all duration-200"
            >
              <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Icon size={14} className="text-primary" />
              </span>
              <span>
                <span className="block font-mono text-[10px] text-primary tracking-widest">{label}</span>
                <span className="block text-sm text-foreground font-semibold">{value}</span>
              </span>
            </a>
          ))}
        </motion.div>

        {/* Terminal form panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="glass-card rounded-2xl border border-border/40 overflow-hidden"
        >
          {/* Terminal top bar */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-border/30 bg-muted/20">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
            <span className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="font-mono text-[11px] text-muted-foreground ml-auto">
              send_message.sh
            </span>
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">

              {/* Name */}
              <div className="space-y-1.5">
                <label className="font-mono text-[10px] text-primary tracking-widest">YOUR_NAME</label>
                <input
                  name="name"
                  placeholder="Imtiaz"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-muted/30 border border-primary/20 focus:border-primary/60 focus:ring-2 focus:ring-primary/20 rounded-lg px-4 py-2.5 text-sm font-mono text-foreground placeholder:text-muted-foreground/40 outline-none transition-all duration-200"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="font-mono text-[10px] text-primary tracking-widest">YOUR_EMAIL</label>
                <input
                  name="email"
                  type="email"
                  placeholder="you@domain.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-muted/30 border border-primary/20 focus:border-primary/60 focus:ring-2 focus:ring-primary/20 rounded-lg px-4 py-2.5 text-sm font-mono text-foreground placeholder:text-muted-foreground/40 outline-none transition-all duration-200"
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-1.5 mb-6">
              <label className="font-mono text-[10px] text-primary tracking-widest">MESSAGE</label>
              <textarea
                name="message"
                placeholder="Hey, let's collab on..."
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-muted/30 border border-primary/20 focus:border-primary/60 focus:ring-2 focus:ring-primary/20 rounded-lg px-4 py-2.5 text-sm font-mono text-foreground placeholder:text-muted-foreground/40 outline-none resize-none transition-all duration-200"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 font-mono text-sm text-primary border border-primary/40 hover:border-primary hover:bg-primary/10 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg py-3 transition-all duration-200 glow-border"
            >
              {loading ? (
                <><span className="animate-pulse">TRANSMITTING...</span></>
              ) : (
                <><Send size={15} /> TRANSMIT_MESSAGE</>
              )}
            </button>
          </form>
        </motion.div>
      </div>

      {/* Toast */}
      {toastMessage && (
        <div
          className={`fixed bottom-6 right-6 z-50 px-5 py-3 rounded-lg font-mono text-sm text-white shadow-xl border ${
            toastType === "success"
              ? "bg-green-500/20 border-green-500/40 text-green-400"
              : "bg-red-500/20 border-red-500/40 text-red-400"
          }`}
        >
          {toastType === "success" ? "✓ " : "✗ "}{toastMessage}
        </div>
      )}
    </section>
  );
};

export default Contact;