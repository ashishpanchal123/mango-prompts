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
    default: "Mango Prompts | AI Prompt Library",
    template: "%s | Mango Prompts",
  },
  description:
    "Discover curated AI prompts for ChatGPT, Claude, Gemini, Midjourney and Veo.",
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
    title: "Mango Prompts | AI Prompt Library",
    description:
      "Discover curated AI prompts for ChatGPT, Claude, Gemini, Midjourney and Veo.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mango Prompts | AI Prompt Library",
    description:
      "Discover curated AI prompts for ChatGPT, Claude, Gemini, Midjourney and Veo.",
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
