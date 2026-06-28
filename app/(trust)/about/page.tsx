import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const title = "About MangoXPrompts — AI Prompt Library Founded by Ashish Panchal";
const description = "Learn about MangoXPrompts, an AI prompt library founded by Ashish Panchal on 25 June 2026. Discover curated prompts for Gemini, AI portraits, videos, writing, and creative workflows.";
const canonical = "https://www.mangoxprompts.xyz/about";
const founderImage = "https://www.mangoxprompts.xyz/images/founder/ashish-panchal-founder.jpg";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical,
  },
  openGraph: {
    title,
    description,
    url: canonical,
    images: [{ url: founderImage, width: 800, height: 800 }],
    type: "website",
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About MangoXPrompts",
    url: canonical,
    description: "MangoXPrompts is a curated AI prompt library founded by Ashish Panchal on 25 June 2026.",
    mainEntity: {
      "@type": "Organization",
      name: "MangoXPrompts",
      founder: {
        "@type": "Person",
        name: "Ashish Panchal",
        image: founderImage
      }
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is the founder of MangoXPrompts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MangoXPrompts was founded by Ashish Panchal on 25 June 2026."
        }
      },
      {
        "@type": "Question",
        name: "What is MangoXPrompts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MangoXPrompts is a curated AI prompt library for Gemini image generation, AI portraits, video ideas, ChatGPT workflows, personal branding, and premium creative prompts."
        }
      },
      {
        "@type": "Question",
        name: "What is the tagline of MangoXPrompts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The tagline of MangoXPrompts is “Sharing the prompts that actually work.”"
        }
      }
    ]
  };

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-[var(--text)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <h1 className="text-4xl md:text-5xl font-bold mb-8 font-logo text-center">About MangoXPrompts</h1>
      
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-6 text-lg text-[var(--text-secondary)] leading-relaxed">
        <p>
          MangoXPrompts is a curated AI prompt library built to help creators copy, paste, and create better results with AI tools. The platform focuses on practical, ready-to-use prompts for image generation, AI portraits, video ideas, writing workflows, personal branding, and premium creative use cases.
        </p>
      </div>

      <div className="mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 font-logo">Our Story</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-[var(--text-secondary)] leading-relaxed space-y-4">
            <p>
              MangoXPrompts was founded by Ashish Panchal on 25 June 2026 with a simple mission: sharing the prompts that actually work.
            </p>
            <p>
              The platform is designed for users who want clear, structured, and tested prompt formats instead of random prompt ideas. We take the guesswork out of AI generation so you can focus on creativity and results.
            </p>
          </div>
          
          <div className="bg-[#111] border border-[var(--border)] rounded-2xl p-6 shadow-xl relative overflow-hidden group hover:border-[var(--mango-soft)] transition-colors">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--mango)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-[var(--border)] group-hover:border-[var(--mango)] transition-colors shrink-0">
                <Image
                  src="/images/founder/ashish-panchal-founder.jpg"
                  alt="Ashish Panchal, founder of MangoXPrompts"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 128px, 128px"
                  loading="lazy"
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold">Ashish Panchal</h3>
                <p className="text-[var(--text-secondary)] text-sm mb-3">Founder, MangoXPrompts</p>
                <div className="space-y-1 text-xs text-[var(--text-muted)]">
                  <p>Founded: 25 June 2026</p>
                  <p className="italic text-[var(--mango-soft)]">"Sharing the prompts that actually work."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 font-logo">What MangoXPrompts offers</h2>
        <ul className="grid sm:grid-cols-2 gap-4 text-[var(--text-secondary)]">
          <li className="flex items-center gap-3 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)]">
            <span className="text-[var(--mango)]">✦</span> Curated AI image prompts
          </li>
          <li className="flex items-center gap-3 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)]">
            <span className="text-[var(--mango)]">✦</span> Gemini portrait and visual prompts
          </li>
          <li className="flex items-center gap-3 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)]">
            <span className="text-[var(--mango)]">✦</span> AI video prompt ideas
          </li>
          <li className="flex items-center gap-3 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)]">
            <span className="text-[var(--mango)]">✦</span> ChatGPT writing and workflow prompts
          </li>
          <li className="flex items-center gap-3 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)]">
            <span className="text-[var(--mango)]">✦</span> Personal branding prompt templates
          </li>
          <li className="flex items-center gap-3 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)]">
            <span className="text-[var(--mango)]">✦</span> Premium creative prompt collections
          </li>
        </ul>
      </div>

      <div className="mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 font-logo">Official Website</h2>
        <p className="text-[var(--text-secondary)] mb-8">
          The official website of MangoXPrompts is <a href="https://www.mangoxprompts.xyz" className="text-[var(--mango-soft)] hover:underline">https://www.mangoxprompts.xyz</a>.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/" className="px-6 py-3 bg-[var(--border)] text-white rounded-full hover:bg-[#333] transition-colors font-medium">
            Explore Prompts →
          </Link>
          <Link href="/premium" className="px-6 py-3 bg-[var(--mango)] text-black rounded-full hover:bg-[var(--mango-soft)] transition-colors font-semibold">
            Browse Premium Prompts →
          </Link>
        </div>
      </div>

      <div className="border-t border-[var(--border)] pt-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 font-logo">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">Who is the founder of MangoXPrompts?</h3>
            <p className="text-[var(--text-secondary)]">MangoXPrompts was founded by Ashish Panchal on 25 June 2026.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">What is MangoXPrompts?</h3>
            <p className="text-[var(--text-secondary)]">MangoXPrompts is a curated AI prompt library for Gemini image generation, AI portraits, video ideas, ChatGPT workflows, personal branding, and premium creative prompts.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">What is the tagline of MangoXPrompts?</h3>
            <p className="text-[var(--text-secondary)]">The tagline of MangoXPrompts is “Sharing the prompts that actually work.”</p>
          </div>
        </div>
      </div>
    </div>
  );
}
