import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import CategoryChips from "@/components/CategoryChips";
import VisualPromptCard from "@/components/VisualPromptCard";
import TextPromptCard from "@/components/TextPromptCard";
import { getVisualPrompts, getTextPrompts } from "@/lib/prompts";

export default function HomePage() {
  const visualPrompts = getVisualPrompts().slice(0, 6);
  const textPrompts = getTextPrompts().slice(0, 6);

  return (
    <div>
      <section className="mx-auto max-w-4xl px-4 sm:px-6 pt-16 pb-10 text-center">
        <h1 className="font-logo text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
          Discover the Best AI Prompts
        </h1>
        <p className="mt-5 text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
          Browse, copy and use powerful prompts for ChatGPT, Claude, Midjourney, Flux, Veo and more.
        </p>
        <div className="mt-8 max-w-xl mx-auto">
          <SearchBar large placeholder="Search for a prompt, category, or keyword..." />
        </div>
        <CategoryChips />
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-xl font-semibold">Featured Gallery</h2>
          <Link href="/gallery" className="text-sm text-[var(--mango-soft)] hover:underline">
            View all
          </Link>
        </div>
        <div className="masonry">
          {visualPrompts.map((p) => (
            <VisualPromptCard key={p.slug} prompt={p} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-xl font-semibold">Featured Prompts</h2>
          <Link href="/categories" className="text-sm text-[var(--mango-soft)] hover:underline">
            Browse categories
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {textPrompts.map((p) => (
            <TextPromptCard key={p.slug} prompt={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
