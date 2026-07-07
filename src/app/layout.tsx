import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

// Resolve relative OG/Twitter image URLs against the real site origin.
// On Vercel, VERCEL_PROJECT_PRODUCTION_URL is the stable production domain;
// set NEXT_PUBLIC_SITE_URL to override with a custom domain. Falls back to
// localhost in dev.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Uche Divine — Product Designer",
  description:
    "UK-based product designer with 6+ years across fintech, SaaS, B2B, and health. Turning messy problems into shipped products.",
  openGraph: {
    title: "Uche Divine — Product Designer",
    description:
      "UK-based product designer with 6+ years across fintech, SaaS, B2B, and health. Turning messy problems into shipped products.",
    type: "website",
    images: [{ url: "/images/headshot-og.jpg", alt: "Uche Divine" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uche Divine — Product Designer",
    description:
      "UK-based product designer with 6+ years across fintech, SaaS, B2B, and health. Turning messy problems into shipped products.",
    images: [{ url: "/images/headshot-og.jpg", alt: "Uche Divine" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-dark text-white">
        {children}
      </body>
    </html>
  );
}
