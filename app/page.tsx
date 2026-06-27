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
    </div>
  );
}
