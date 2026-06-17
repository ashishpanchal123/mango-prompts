import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import CopyButton from "@/components/CopyButton";
import CategoryBadge from "@/components/CategoryBadge";
import VisualPromptCard from "@/components/VisualPromptCard";
import TextPromptCard from "@/components/TextPromptCard";
import {
  getAllSlugs,
  getPromptBySlug,
  getRelatedPrompts,
} from "@/lib/prompts";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const prompt = getPromptBySlug(slug);
  if (!prompt) {
    return { title: "Prompt Not Found" };
  }
  const description =
    prompt.description ||
    `${prompt.title} — a ${prompt.category} prompt on Mango Prompts. Copy and use it instantly.`;
  return {
    title: prompt.title,
    description,
    openGraph: {
      title: `${prompt.title} | Mango Prompts`,
      description,
      type: "article",
      images: prompt.image ? [{ url: prompt.image, width: 1200, height: 1500 }] : undefined,
    },
    twitter: {
      card: prompt.image ? "summary_large_image" : "summary",
      title: `${prompt.title} | Mango Prompts`,
      description,
      images: prompt.image ? [prompt.image] : undefined,
    },
  };
}

export default async function PromptDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const prompt = getPromptBySlug(slug);

  if (!prompt) {
    notFound();
  }

  const related = getRelatedPrompts(prompt, 4);

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12">
      {prompt.image && (
        <div className="relative w-full aspect-[4/5] sm:aspect-[16/9] rounded-xl overflow-hidden border border-[var(--border)] mb-8">
          <Image
            src={prompt.image}
            alt={prompt.title}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
            priority
          />
        </div>
      )}

      <CategoryBadge category={prompt.category} />
      <h1 className="font-logo text-3xl sm:text-4xl font-semibold mt-4 leading-tight">
        {prompt.title}
      </h1>
      {prompt.description && (
        <p className="text-[var(--text-secondary)] mt-3 text-base leading-relaxed">
          {prompt.description}
        </p>
      )}

      <div className="mt-8 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] p-5 sm:p-6">
        <p className="text-xs uppercase tracking-wide text-[var(--text-muted)] mb-3">
          Full Prompt
        </p>
        <p className="text-[var(--text-primary)] leading-relaxed whitespace-pre-wrap text-sm sm:text-base">
          {prompt.prompt}
        </p>
      </div>

      <div className="mt-6">
        <CopyButton text={prompt.prompt} full />
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-xl font-semibold mb-6">Related Prompts</h2>
          {prompt.type === "visual" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((p) => (
                <VisualPromptCard key={p.slug} prompt={p} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((p) => (
                <TextPromptCard key={p.slug} prompt={p} />
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  );
}
