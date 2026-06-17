import Link from "next/link";
import type { Prompt } from "@/lib/types";
import CopyButton from "@/components/CopyButton";
import CategoryBadge from "@/components/CategoryBadge";

export default function TextPromptCard({ prompt }: { prompt: Prompt }) {
  return (
    <div className="group relative flex flex-col gap-3 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] p-5 hover:border-[var(--mango)]/50 transition-colors duration-200">
      {prompt.trending && (
        <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wider text-[var(--mango-soft)]">
          Trending
        </span>
      )}
      <CategoryBadge category={prompt.category} />
      <Link href={`/prompt/${prompt.slug}`} className="block">
        <h3 className="text-lg font-semibold text-[var(--text-primary)] leading-snug group-hover:text-[var(--mango-soft)] transition-colors">
          {prompt.title}
        </h3>
        <p className="text-sm text-[var(--text-secondary)] mt-1.5 leading-relaxed">
          {prompt.description}
        </p>
      </Link>
      <div className="mt-1">
        <CopyButton text={prompt.prompt} />
      </div>
    </div>
  );
}
