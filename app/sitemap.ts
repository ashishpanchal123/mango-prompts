import type { MetadataRoute } from "next";
import { getAllSlugs, getAllCategories } from "@/lib/prompts";

const SITE_URL = "https://www.mangoxprompts.xyz";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/gallery`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/categories`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/trending`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/premium`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
  ];

  const seoCollections = [
    "gemini-image-prompts",
    "ai-portrait-prompts",
    "veo-video-prompts",
    "chatgpt-prompts",
    "personal-branding-prompts",
    "luxury-fashion-prompts",
  ];

  const collectionRoutes: MetadataRoute.Sitemap = seoCollections.map((slug) => ({
    url: `${SITE_URL}/prompts/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = getAllCategories().map((cat) => ({
    url: `${SITE_URL}/categories/${encodeURIComponent(cat.toLowerCase().replace(/\s+/g, "-"))}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const promptRoutes: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url: `${SITE_URL}/prompt/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...collectionRoutes, ...categoryRoutes, ...promptRoutes];
}
