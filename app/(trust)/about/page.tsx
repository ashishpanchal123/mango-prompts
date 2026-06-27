import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — MangoXPrompts",
  description: "Learn more about MangoXPrompts, the premium AI prompt library.",
  alternates: {
    canonical: "https://www.mangoxprompts.xyz/about",
  }
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 text-[var(--text)]">
      <h1 className="text-3xl font-bold mb-6 font-logo">About Us</h1>
      <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
        <p>MangoXPrompts is a premium curated library for AI prompts, covering everything from highly realistic Gemini and Midjourney image generation to effective ChatGPT and Claude workflows.</p>
        <p>Our mission is to help creators, founders, and designers save time and achieve better results with AI.</p>
      </div>
    </div>
  );
}
