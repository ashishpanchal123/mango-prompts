import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PremiumDrawer from "@/components/PremiumDrawer";

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

const SITE_URL = "https://www.mangoxprompts.xyz";

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MangoXPrompts — AI Image, Video & Writing Prompt Library",
    template: "%s | MangoXPrompts",
  },
  description:
    "Discover curated AI prompts for Gemini image generation, portrait prompts, video ideas, ChatGPT workflows, personal branding, and creative content generation.",
  keywords: [
    "AI prompts",
    "Gemini prompts",
    "image prompts",
    "portrait prompts",
    "video prompts",
    "ChatGPT prompts",
    "prompt library",
    "AI image generation",
    "premium prompts",
    "MangoXPrompts",
  ],
  authors: [{ name: "MangoXPrompts" }],
  creator: "MangoXPrompts",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "MangoXPrompts",
    title: "MangoXPrompts — AI Prompt Library",
    description:
      "Curated AI prompts for image generation, video ideas, writing, branding, and creative workflows.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MangoXPrompts — AI Prompt Library",
    description:
      "Curated AI prompts for image generation, video ideas, writing, branding, and creative workflows.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
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
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <PremiumDrawer />
      </body>
    </html>
  );
}
