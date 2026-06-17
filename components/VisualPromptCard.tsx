import Image from "next/image";
import Link from "next/link";
import type { Prompt } from "@/lib/types";
import CopyButton from "@/components/CopyButton";
import CategoryBadge from "@/components/CategoryBadge";

// Deterministic varied aspect ratio for masonry rhythm, based on slug hash
function getAspect(slug: string): number {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash << 5) - hash + slug.charCodeAt(i);
    hash |= 0;
  }
  const variants = [5 / 4, 1, 4 / 5, 3 / 4, 4 / 3];
  return variants[Math.abs(hash) % variants.length];
}

export default function VisualPromptCard({ prompt }: { prompt: Prompt }) {
  const aspect = getAspect(prompt.slug);
  return (
    <div className="masonry-item group">
      <Link
        href={`/prompt/${prompt.slug}`}
        className="block relative overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--bg-card)]"
      >
        <div className="relative w-full" style={{ aspectRatio: aspect }}>
          {prompt.image && (
            <Image
              src={prompt.image}
              alt={prompt.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          {prompt.trending && (
            <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wider bg-[var(--mango)] text-[#1a1100] px-2 py-1 rounded-full">
              Trending
            </span>
          )}
          <div className="absolute bottom-0 left-0 right-0 p-3 flex items-end justify-between gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div>
              <CategoryBadge category={prompt.category} />
              <p className="text-sm font-medium text-[var(--text-primary)] mt-1.5 leading-snug">
                {prompt.title}
              </p>
            </div>
          </div>
        </div>
      </Link>
      <div className="flex items-center justify-between mt-2 px-0.5">
        <p className="text-sm text-[var(--text-secondary)] truncate pr-2">
          {prompt.title}
        </p>
        <CopyButton text={prompt.prompt} />
      </div>
    </div>
  );
}
