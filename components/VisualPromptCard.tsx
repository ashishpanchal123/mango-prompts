import Image from "next/image";
import Link from "next/link";
import type { Prompt } from "@/lib/types";
import CopyButton from "@/components/CopyButton";
import PremiumButton from "@/components/PremiumButton";
import PremiumBadge from "@/components/PremiumBadge";

export default function VisualPromptCard({ prompt }: { prompt: Prompt }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-card)]">
      <Link href={`/prompt/${prompt.slug}`} className="block relative">
        <div className="relative w-full aspect-[4/5]">
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
            <div className="flex items-center gap-2 overflow-hidden">
              <PremiumBadge prompt={prompt} className="flex-shrink-0" />
              <span className="text-[11px] font-semibold uppercase tracking-wide text-white bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full truncate">
                {prompt.title}
              </span>
            </div>
          </div>

          {prompt.description && (
            <p className="absolute bottom-3 left-3 right-3 text-sm text-white leading-snug line-clamp-3">
              {prompt.description}
            </p>
          )}
        </div>
      </Link>

      <div className="flex items-center justify-between gap-2 px-3 py-2.5 bg-[var(--bg-card)]">
        {prompt.isPremium && prompt.paymentLink ? (
          <PremiumButton prompt={prompt} compact />
        ) : (
          <CopyButton text={prompt.prompt} compact />
        )}
        <span className="text-xs text-[var(--text-muted)] truncate">
          Mango Curated
        </span>
      </div>
    </div>
  );
}
