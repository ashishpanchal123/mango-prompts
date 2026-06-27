import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import CopyButton from "@/components/CopyButton";
import CategoryBadge from "@/components/CategoryBadge";
import PremiumPromptGuard from "@/components/PremiumPromptGuard";
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
  const title = `${prompt.title} — MangoXPrompts`;
  const description = `Copy a curated AI prompt for ${prompt.title}. Designed for better AI image, video, writing, and creative results.`;
  const url = `https://www.mangoxprompts.xyz/prompt/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url,
      images: prompt.image ? [{ url: prompt.image, width: 1200, height: 1500 }] : undefined,
    },
    twitter: {
      card: prompt.image ? "summary_large_image" : "summary",
      title,
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
  const url = `https://www.mangoxprompts.xyz/prompt/${slug}`;
  const jsonLd: any = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: prompt.title,
    description: prompt.description || `A curated AI prompt for ${prompt.title}.`,
    author: {
      "@type": "Organization",
      name: "MangoXPrompts"
    },
    publisher: {
      "@type": "Organization",
      name: "MangoXPrompts"
    },
    url: url
  };

  if (prompt.image) {
    jsonLd.image = {
      "@type": "ImageObject",
      contentUrl: prompt.image,
      name: prompt.title,
      description: prompt.description || `A curated AI prompt for ${prompt.title}.`,
      creator: { "@type": "Organization", name: "MangoXPrompts" },
      license: "https://www.mangoxprompts.xyz/terms"
    };
  }

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 lg:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={`grid grid-cols-1 ${prompt.image ? 'lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-16' : 'max-w-3xl mx-auto'}`}>
        
        {prompt.image && (
          <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden border border-[var(--border)] shadow-sm">
            <Image
              src={prompt.image}
              alt={`${prompt.title} - AI prompt example by MangoXPrompts`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="flex flex-col justify-start pt-2 lg:pt-6">
          <div>
            <CategoryBadge category={prompt.category} source={prompt.source} />
          </div>
          <h1 className="font-logo text-3xl sm:text-4xl lg:text-5xl font-semibold mt-5 leading-tight">
            {prompt.title}
          </h1>
          {prompt.description && (
            <p className="text-[var(--text-secondary)] mt-4 text-base lg:text-lg leading-relaxed">
              {prompt.description}
            </p>
          )}

          <div className="mt-8">
            <PremiumPromptGuard prompt={prompt} />
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-xl font-semibold mb-6">Related Prompts</h2>
          {prompt.type === "visual" ? (
            <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 gap-5">
              {related.map((p) => (
                <VisualPromptCard key={p.slug} prompt={p} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 min-[540px]:grid-cols-2 gap-4">
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
