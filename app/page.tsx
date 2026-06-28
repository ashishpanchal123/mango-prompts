import Link from "next/link";

import VisualPromptCard from "@/components/VisualPromptCard";
import TextPromptCard from "@/components/TextPromptCard";
import { getVisualPrompts, getTextPrompts } from "@/lib/prompts";
import SuccessToast from "@/components/SuccessToast";
import OpenGeminiButton from "@/components/OpenGeminiButton";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) {
  const { filter } = await searchParams;
  const isPremiumFilter = filter === "premium";

  let visualPrompts = getVisualPrompts();
  let textPrompts = getTextPrompts();

  if (isPremiumFilter) {
    visualPrompts = visualPrompts.filter((p) => p.isPremium);
    textPrompts = textPrompts.filter((p) => p.isPremium);
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "MangoXPrompts",
            alternateName: "Mango X Prompts",
            url: "https://www.mangoxprompts.xyz",
            description: "Curated AI prompt library for image, video, writing, and creative workflows.",
            publisher: {
              "@type": "Organization",
              name: "MangoXPrompts"
            },
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.mangoxprompts.xyz/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "MangoXPrompts",
            alternateName: "Mango X Prompts",
            url: "https://www.mangoxprompts.xyz",
            logo: "https://www.mangoxprompts.xyz/images/logo.png",
            foundingDate: "2026-06-25",
            slogan: "Sharing the prompts that actually work.",
            description: "MangoXPrompts is a curated AI prompt library for Gemini image generation, AI portraits, video ideas, ChatGPT workflows, personal branding, luxury fashion visuals, and premium creative prompt collections.",
            founder: {
              "@type": "Person",
              name: "Ashish Panchal",
              url: "https://www.mangoxprompts.xyz/founder",
              image: "https://www.mangoxprompts.xyz/images/founder/ashish-panchal-founder.jpg"
            },
            sameAs: []
          }),
        }}
      />
      <SuccessToast />
      {/* HERO SECTION */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 pt-10 pb-6 text-center">
        <h1 className="font-logo text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
          Discover AI Prompts That Actually Work
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
          Curated prompts for AI writing, image creation, video ideas, workflows and more.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/#free-prompts" className="px-6 py-3 bg-[var(--mango)] text-black font-semibold rounded-full hover:bg-[var(--mango-soft)] transition-colors">
            Browse Free Prompts
          </Link>
          <Link href="/?filter=premium#free-prompts" className="px-6 py-3 border border-[var(--border)] text-[var(--text)] font-semibold rounded-full hover:border-[var(--text-muted)] transition-colors">
            Browse Premium Prompts
          </Link>
        </div>
      </section>

      {/* HOW TO USE SECTION */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-8 text-center">
        <img 
          src="/images/how-to-use.png" 
          alt="How to use image prompts" 
          className="w-full h-auto mx-auto mb-6 drop-shadow-xl rounded-2xl" 
        />
        <OpenGeminiButton 
          className="inline-flex items-center gap-2 px-5 py-2 border border-[var(--border)] bg-[var(--bg-card)] hover:bg-[var(--bg)] text-xs font-medium rounded-full hover:border-[var(--text-muted)] transition-colors text-[var(--text-secondary)] cursor-pointer"
        />
      </section>


      {/* FREE PROMPTS SECTION */}
      <section id="free-prompts" className="mx-auto max-w-7xl px-4 sm:px-6 py-12 border-t border-[var(--border)]">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-2xl font-semibold">
            {isPremiumFilter ? "Premium Visuals" : "Featured Visuals"}
          </h2>
        </div>
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {visualPrompts.map((p) => (
            <VisualPromptCard key={p.slug} prompt={p} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 border-t border-[var(--border)]">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-2xl font-semibold">
            {isPremiumFilter ? "Premium Workflows" : "Featured Workflows"}
          </h2>
        </div>
        <div className="grid grid-cols-1 min-[540px]:grid-cols-2 md:grid-cols-3 gap-4">
          {textPrompts.map((p) => (
            <TextPromptCard key={p.slug} prompt={p} />
          ))}
        </div>
      </section>

      {/* SEO SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 border-t border-[var(--border)]">
        <h2 className="text-xl font-semibold mb-4">What is MangoXPrompts?</h2>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
          MangoXPrompts is a curated AI prompt library founded by Ashish Panchal on 25 June 2026. Built around the idea “Sharing the prompts that actually work,” MangoXPrompts helps creators, marketers, founders, designers, and AI users discover ready-to-copy prompts for Gemini image generation, AI portraits, video ideas, ChatGPT workflows, personal branding, luxury fashion visuals, and premium creative prompt collections.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="/about" className="text-xs px-3 py-1.5 rounded-full border border-[var(--border)] text-[var(--text-secondary)] hover:text-white transition-colors">About</a>
          <a href="/founder" className="text-xs px-3 py-1.5 rounded-full border border-[var(--border)] text-[var(--text-secondary)] hover:text-white transition-colors">Founder</a>
          <a href="/trending" className="text-xs px-3 py-1.5 rounded-full border border-[var(--border)] text-[var(--text-secondary)] hover:text-white transition-colors">Trending</a>
          <a href="/premium" className="text-xs px-3 py-1.5 rounded-full border border-[var(--border)] text-[var(--text-secondary)] hover:text-white transition-colors">Premium</a>
          <a href="/prompts/gemini-image-prompts" className="text-xs px-3 py-1.5 rounded-full border border-[var(--border)] text-[var(--text-secondary)] hover:text-white transition-colors">Gemini Image Prompts</a>
          <a href="/prompts/ai-portrait-prompts" className="text-xs px-3 py-1.5 rounded-full border border-[var(--border)] text-[var(--text-secondary)] hover:text-white transition-colors">AI Portrait Prompts</a>
          <a href="/prompts/chatgpt-prompts" className="text-xs px-3 py-1.5 rounded-full border border-[var(--border)] text-[var(--text-secondary)] hover:text-white transition-colors">ChatGPT Prompts</a>
          <a href="/prompts/veo-video-prompts" className="text-xs px-3 py-1.5 rounded-full border border-[var(--border)] text-[var(--text-secondary)] hover:text-white transition-colors">Veo Video Prompts</a>
        </div>
      </section>
    </div>
  );
}
