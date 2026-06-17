export type PromptCategory =
  | "ChatGPT"
  | "Claude"
  | "Midjourney"
  | "Flux"
  | "Veo"
  | "Marketing"
  | "Resume"
  | "UX Design"
  | "Coding"
  | "Business";

export type PromptType = "visual" | "text";

export interface Prompt {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: PromptCategory;
  type: PromptType;
  prompt: string;
  image: string | null;
  trending: boolean;
}

export const VISUAL_CATEGORIES: PromptCategory[] = ["Midjourney", "Flux", "Veo"];

export const TEXT_CATEGORIES: PromptCategory[] = [
  "ChatGPT",
  "Claude",
  "Marketing",
  "Resume",
  "UX Design",
  "Coding",
  "Business",
];

export const ALL_CATEGORIES: PromptCategory[] = [
  "ChatGPT",
  "Claude",
  "Midjourney",
  "Flux",
  "Veo",
  "Marketing",
  "Resume",
  "UX Design",
  "Coding",
  "Business",
];
