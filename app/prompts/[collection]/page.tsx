import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import VisualPromptCard from "@/components/VisualPromptCard";
import TextPromptCard from "@/components/TextPromptCard";
import { getVisualPrompts, getTextPrompts } from "@/lib/prompts";

const collectionsData: Record<string, { title: string; description: string; filterKey: string }> = {
  "gemini-image-prompts": {
    title: "Gemini Image Prompts",
    description: "Explore curated Gemini image prompts for portraits, fashion visuals, cinematic edits, and creative image generation.",
    filterKey: "gemini"
  },
  "ai-portrait-prompts": {
    title: "AI Portrait Prompts",
    description: "Discover stunning AI portrait prompts to generate hyper-realistic, cinematic, and professional portraits.",
    filterKey: "portrait"
  },
  "veo-video-prompts": {
    title: "Veo Video Prompts",
    description: "Copy top-tier Veo video prompts for cinematic motion, dynamic scenes, and creative video generation.",
    filterKey: "veo"
  },
  "chatgpt-prompts": {
    title: "ChatGPT Prompts",
    description: "Elevate your writing, marketing, and productivity with these premium ChatGPT workflows and prompts.",
    filterKey: "chatgpt"
  },
  "personal-branding-prompts": {
    title: "Personal Branding Prompts",
    description: "Build a powerful personal brand with curated prompts for LinkedIn, Twitter, and content strategy.",
    filterKey: "branding"
  },
  "luxury-fashion-prompts": {
    title: "Luxury Fashion Prompts",
    description: "Generate high-end luxury fashion photography and editorial styles with these AI prompts.",
    filterKey: "fashion"
  },
};

export async function generateStaticParams() {
  return Object.keys(collectionsData).map((collection) => ({
    collection,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ collection: string }> }): Promise<Metadata> {
  const { collection } = await params;
  const data = collectionsData[collection];
  if (!data) return { title: "Collection Not Found" };

  const url = `https://www.mangoxprompts.xyz/prompts/${collection}`;
  return {
    title: `${data.title} — MangoXPrompts`,
    description: data.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${data.title} — MangoXPrompts`,
      description: data.description,
      url,
      type: "website",
    },
  };
}

export default async function CollectionPage({ params }: { params: Promise<{ collection: string }> }) {
  const { collection } = await params;
  const data = collectionsData[collection];

  if (!data) {
    notFound();
  }

  const visualPrompts = getVisualPrompts().filter(p => p.category.toLowerCase().includes(data.filterKey) || p.title.toLowerCase().includes(data.filterKey) || (data.filterKey === 'gemini' && p.source === 'GEMINI IMAGE'));
  const textPrompts = getTextPrompts().filter(p => p.category.toLowerCase().includes(data.filterKey) || p.title.toLowerCase().includes(data.filterKey));

  const finalVisuals = visualPrompts.length > 0 ? visualPrompts : getVisualPrompts().slice(0, 8);
  const finalTexts = textPrompts.length > 0 ? textPrompts : getTextPrompts().slice(0, 6);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 lg:py-16">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="font-logo text-4xl sm:text-5xl font-semibold leading-tight">{data.title}</h1>
        <p className="mt-4 text-lg text-[var(--text-secondary)] leading-relaxed">{data.description}</p>
      </div>

      <div className="mb-16">
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {finalVisuals.map((p) => (
            <VisualPromptCard key={p.slug} prompt={p} />
          ))}
        </div>
        {finalTexts.length > 0 && (
          <div className="grid grid-cols-1 min-[540px]:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {finalTexts.map((p) => (
              <TextPromptCard key={p.slug} prompt={p} />
            ))}
          </div>
        )}
      </div>

      <div className="text-center mt-12 border-t border-[var(--border)] pt-12">
        <h2 className="text-2xl font-semibold mb-4">Want full access to all prompts?</h2>
        <p className="text-[var(--text-secondary)] mb-6">Unlock our complete library of premium AI prompts.</p>
        <Link href="/premium" className="px-8 py-4 bg-[var(--mango)] text-black font-semibold rounded-full hover:bg-[var(--mango-soft)] transition-colors text-lg inline-block">
          Get Premium Access
        </Link>
      </div>
    </div>
  );
}
