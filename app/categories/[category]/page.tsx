import type { Metadata } from "next";
import { notFound } from "next/navigation";
import VisualPromptCard from "@/components/VisualPromptCard";
import TextPromptCard from "@/components/TextPromptCard";
import { ALL_CATEGORIES, VISUAL_CATEGORIES } from "@/lib/types";
import type { PromptCategory } from "@/lib/types";
import { getPromptsByCategory } from "@/lib/prompts";

function slugToCategory(slug: string): PromptCategory | undefined {
  return ALL_CATEGORIES.find(
    (c) => c.toLowerCase().replace(/\s+/g, "-") === slug.toLowerCase()
  );
}

export async function generateStaticParams() {
  return ALL_CATEGORIES.map((cat) => ({
    category: cat.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = slugToCategory(categorySlug);
  if (!category) return { title: "Category Not Found" };
  return {
    title: `${category} Prompts`,
    description: `Browse all ${category} AI prompts on Mango Prompts. Copy and use them instantly.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = slugToCategory(categorySlug);

  if (!category) {
    notFound();
  }

  const prompts = getPromptsByCategory(category);
  const isVisual = VISUAL_CATEGORIES.includes(category);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
      <h1 className="font-logo text-3xl sm:text-4xl font-semibold">{category}</h1>
      <p className="text-[var(--text-secondary)] mt-2 mb-8">
        {prompts.length} prompts in this category.
      </p>
      {isVisual ? (
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {prompts.map((p) => (
            <VisualPromptCard key={p.slug} prompt={p} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 min-[540px]:grid-cols-2 md:grid-cols-3 gap-4">
          {prompts.map((p) => (
            <TextPromptCard key={p.slug} prompt={p} />
          ))}
        </div>
      )}
    </div>
  );
}
