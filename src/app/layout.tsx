import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Uche Divine — Product Designer",
  description:
    "UK-based product designer with 6+ years across fintech, SaaS, B2B, and health. Turning messy problems into shipped products.",
  openGraph: {
    title: "Uche Divine — Product Designer",
    description:
      "UK-based product designer with 6+ years across fintech, SaaS, B2B, and health. Turning messy problems into shipped products.",
    type: "website",
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
