import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfairDisplay = localFont({
  src: "../public/fonts/PlayfairDisplay.ttf",
  variable: "--font-playfair-display",
  display: "swap",
});

const beVietnamPro = localFont({
  src: [
    { path: "../public/fonts/BeVietnamPro-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/BeVietnamPro-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

const SITE_URL = "https://mangoprompts.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mango Prompts - Fresh AI Prompts for ChatGPT, Claude, Midjourney & More",
    template: "%s | Mango Prompts",
  },
  description:
    "Discover, copy, and use the best AI prompts for ChatGPT, Claude, Midjourney, Flux, Veo, marketing, resumes, UX design, coding, and business. Fresh AI prompts. Copy. Paste. Create.",
  keywords: [
    "AI prompts",
    "ChatGPT prompts",
    "Claude prompts",
    "Midjourney prompts",
    "Flux prompts",
    "Veo prompts",
    "prompt library",
    "AI prompt gallery",
  ],
  authors: [{ name: "Ashish Panchal" }],
  creator: "Ashish Panchal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Mango Prompts",
    title: "Mango Prompts - Fresh AI Prompts for ChatGPT, Claude, Midjourney & More",
    description:
      "Discover, copy, and use the best AI prompts for ChatGPT, Claude, Midjourney, Flux, Veo, marketing, resumes, UX design, coding, and business.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mango Prompts - Fresh AI Prompts for ChatGPT, Claude, Midjourney & More",
    description:
      "Discover, copy, and use the best AI prompts for ChatGPT, Claude, Midjourney, Flux, Veo, marketing, resumes, UX design, coding, and business.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${beVietnamPro.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
