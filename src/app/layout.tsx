import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://imtiaz.swe.bd";
const title = "Imtiaz Hossen — Full Stack Developer";
const description =
  "Full Stack Developer from Dhaka, Bangladesh, building scalable web apps with Next.js, TypeScript, Node.js, PostgreSQL and AI integrations. Software Engineering student at Daffodil International University.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Imtiaz Hossen",
  },
  description,
  keywords: [
    "Imtiaz Hossen",
    "Full Stack Developer",
    "Next.js",
    "TypeScript",
    "MERN Stack",
    "PostgreSQL",
    "Prisma",
    "Bangladesh",
    "Portfolio",
  ],
  authors: [{ name: "Imtiaz Hossen", url: siteUrl }],
  creator: "Imtiaz Hossen",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Imtiaz Hossen",
    title,
    description,
    locale: "en_US",
    images: [
      {
        url: "/imtiaz.jpg",
        alt: "Imtiaz Hossen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/imtiaz.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Imtiaz Hossen",
  url: siteUrl,
  jobTitle: "Full Stack Developer",
  image: `${siteUrl}/imtiaz.jpg`,
  alumniOf: "Daffodil International University",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  sameAs: [
    "https://github.com/imtiaz-zihad",
    "https://www.linkedin.com/in/imtiaz-hossen",
    "https://x.com/MdImtiazHo74218",
    "https://leetcode.com/u/imtiaz-hossen",
    "https://codeforces.com/profile/imtiazzihad",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}