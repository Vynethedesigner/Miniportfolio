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
    "UK-based Product Designer with 7+ years crafting digital experiences across SAAS, B2B, B2C, and fintech.",
  openGraph: {
    title: "Uche Divine — Product Designer",
    description:
      "UK-based Product Designer with 7+ years crafting digital experiences across SAAS, B2B, B2C, and fintech.",
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
