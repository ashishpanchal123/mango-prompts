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
    "MangoXPrompts is a curated AI prompt library founded by Ashish Panchal. Discover ready-to-copy prompts for Gemini image generation, AI portraits, videos, ChatGPT workflows, personal branding, and premium creative prompts.",
  keywords: [
    "MangoXPrompts",
    "Mango X Prompts",
    "Ashish Panchal",
    "founder of MangoXPrompts",
    "AI prompt library",
    "Gemini prompts",
    "AI portrait prompts",
    "ChatGPT prompts",
    "video prompts",
    "image prompts",
    "premium prompts",
  ],
  authors: [{ name: "Ashish Panchal" }],
  creator: "Ashish Panchal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "MangoXPrompts",
    title: "MangoXPrompts — AI Image, Video & Writing Prompt Library",
    description:
      "Curated AI prompts for image generation, video ideas, writing, branding, and creative workflows.",
    images: [
      {
        url: "/images/founder/ashish-panchal-founder.jpg",
        width: 1200,
        height: 630,
        alt: "MangoXPrompts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MangoXPrompts — AI Image, Video & Writing Prompt Library",
    description: "Curated AI prompts for Gemini, ChatGPT, video ideas, image generation, and creative workflows.",
    images: ["/images/founder/ashish-panchal-founder.jpg"],
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
