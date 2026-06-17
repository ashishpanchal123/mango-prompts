import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import { getVisualPrompts } from "@/lib/prompts";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse AI-generated image and video prompts for Midjourney, Flux, and Veo. Copy the exact prompt behind every visual.",
};

export default function GalleryPage() {
  const prompts = getVisualPrompts();
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
      <h1 className="font-logo text-3xl sm:text-4xl font-semibold">Gallery</h1>
      <p className="text-[var(--text-secondary)] mt-2 mb-8 max-w-xl">
        Visual prompts for Midjourney, Flux, and Veo. Copy the exact prompt behind every image.
      </p>
      <GalleryGrid prompts={prompts} />
    </div>
  );
}
