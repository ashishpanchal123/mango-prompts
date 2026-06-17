import type { Metadata } from "next";
import VisualPromptCard from "@/components/VisualPromptCard";
import TextPromptCard from "@/components/TextPromptCard";
import { getTrendingPrompts } from "@/lib/prompts";

export const metadata: Metadata = {
  title: "Trending",
  description:
    "The most popular AI prompts on Mango Prompts right now, across ChatGPT, Claude, Midjourney, Flux, Veo and more.",
};

export default function TrendingPage() {
  const trending = getTrendingPrompts();
  const visual = trending.filter((p) => p.type === "visual");
  const text = trending.filter((p) => p.type === "text");

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
      <h1 className="font-logo text-3xl sm:text-4xl font-semibold">Trending</h1>
      <p className="text-[var(--text-secondary)] mt-2 mb-10">
        The prompts everyone is copying right now.
      </p>

      {visual.length > 0 && (
        <section className="mb-12">
          <h2 className="text-lg font-semibold mb-5">Trending Visuals</h2>
          <div className="masonry">
            {visual.map((p) => (
              <VisualPromptCard key={p.slug} prompt={p} />
            ))}
          </div>
        </section>
      )}

      {text.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold mb-5">Trending Text Prompts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {text.map((p) => (
              <TextPromptCard key={p.slug} prompt={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
