"use client";

import { useState, useMemo } from "react";
import VisualPromptCard from "@/components/VisualPromptCard";
import type { Prompt } from "@/lib/types";

const FILTERS = ["All", "Midjourney", "Flux", "Veo"] as const;

export default function GalleryGrid({ prompts }: { prompts: Prompt[] }) {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return prompts;
    return prompts.filter((p) => p.category === filter);
  }, [filter, prompts]);

  return (
    <div>
      <div className="flex flex-wrap gap-2.5 mb-8">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`text-sm px-4 py-2 rounded-full border transition-colors ${
              filter === f
                ? "bg-[var(--mango)] text-[#1a1100] border-[var(--mango)]"
                : "border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--mango)] hover:text-[var(--mango-soft)]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="masonry">
        {filtered.map((p) => (
          <VisualPromptCard key={p.slug} prompt={p} />
        ))}
      </div>
    </div>
  );
}
