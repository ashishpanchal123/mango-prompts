import type { Metadata } from "next";
import Link from "next/link";
import { ALL_CATEGORIES, VISUAL_CATEGORIES } from "@/lib/types";
import { getPromptsByCategory } from "@/lib/prompts";

export const metadata: Metadata = {
  title: "Categories",
  description:
    "Browse AI prompts by category: ChatGPT, Claude, Midjourney, Flux, Veo, Marketing, Resume, UX Design, Coding, and Business.",
};

export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
      <h1 className="font-logo text-3xl sm:text-4xl font-semibold">Categories</h1>
      <p className="text-[var(--text-secondary)] mt-2 mb-8 max-w-xl">
        Pick a category to find the exact prompt you need.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ALL_CATEGORIES.map((cat) => {
          const count = getPromptsByCategory(cat).length;
          const isVisual = VISUAL_CATEGORIES.includes(cat);
          return (
            <Link
              key={cat}
              href={`/categories/${encodeURIComponent(cat.toLowerCase().replace(/\s+/g, "-"))}`}
              className="rounded-lg border border-[var(--border)] bg-[var(--bg-card)] p-6 hover:border-[var(--mango)]/50 transition-colors"
            >
              <h2 className="text-lg font-semibold">{cat}</h2>
              <p className="text-sm text-[var(--text-muted)] mt-1">
                {count} prompts · {isVisual ? "Visual" : "Text"}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
