import promptsData from "@/data/prompts.json";
import type { Prompt, PromptCategory } from "@/lib/types";

const prompts = promptsData as Prompt[];

export function getAllPrompts(): Prompt[] {
  return prompts;
}

export function getPromptBySlug(slug: string): Prompt | undefined {
  return prompts.find((p) => p.slug === slug);
}

export function getPromptsByCategory(category: PromptCategory): Prompt[] {
  return prompts.filter((p) => p.category === category);
}

export function getVisualPrompts(): Prompt[] {
  return prompts.filter((p) => p.type === "visual");
}

export function getTextPrompts(): Prompt[] {
  return prompts.filter((p) => p.type === "text");
}

export function getTrendingPrompts(): Prompt[] {
  return prompts.filter((p) => p.trending);
}

export function getRelatedPrompts(prompt: Prompt, limit = 4): Prompt[] {
  return prompts
    .filter((p) => p.category === prompt.category && p.slug !== prompt.slug)
    .slice(0, limit);
}

export function searchPrompts(query: string): Prompt[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return prompts.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.prompt.toLowerCase().includes(q)
  );
}

export function getAllSlugs(): string[] {
  return prompts.map((p) => p.slug);
}

export function getAllCategories(): PromptCategory[] {
  const set = new Set(prompts.map((p) => p.category));
  return Array.from(set) as PromptCategory[];
}
