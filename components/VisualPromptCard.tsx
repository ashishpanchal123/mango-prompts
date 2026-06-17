import Image from "next/image";
import Link from "next/link";
import type { Prompt } from "@/lib/types";
import CopyButton from "@/components/CopyButton";

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
    <div className="masonry-item">
      <div className="relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-card)]">
        <Link href={`/prompt/${prompt.slug}`} className="block relative">
          <div className="relative w-full" style={{ aspectRatio: aspect }}>
            {prompt.image && (
              <Image
                src={prompt.image}
                alt={prompt.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            )}
            {/* Top gradient for badge legibility */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/70 to-transparent" />
            {/* Bottom gradient for description legibility */}
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

            <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-white bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full truncate max-w-[70%]">
                {prompt.title}
              </span>
              {prompt.likes && (
                <span className="text-xs font-medium text-white bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full flex-shrink-0">
                  {prompt.likes} likes
                </span>
              )}
            </div>

            {prompt.description && (
              <p className="absolute bottom-3 left-3 right-3 text-sm text-white leading-snug line-clamp-3">
                {prompt.description}
              </p>
            )}
          </div>
        </Link>

        <div className="flex items-center justify-between gap-2 px-3 py-2.5 bg-[var(--bg-card)]">
          <CopyButton text={prompt.prompt} compact />
          {prompt.creator && (
            <span className="text-xs text-[var(--text-muted)] truncate">
              by {prompt.creator}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
