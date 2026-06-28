import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const title = "Ashish Panchal — Founder of MangoXPrompts";
const description = "Ashish Panchal is the founder of MangoXPrompts, a curated AI prompt library launched on 25 June 2026 for AI image, video, writing, and creative prompts.";
const canonical = "https://www.mangoxprompts.xyz/founder";
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
    type: "profile",
  },
};

export default function FounderPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ashish Panchal",
    url: canonical,
    image: founderImage,
    jobTitle: "Founder",
    worksFor: {
      "@type": "Organization",
      name: "MangoXPrompts",
      url: "https://www.mangoxprompts.xyz"
    },
    description: "Ashish Panchal is the founder of MangoXPrompts, a curated AI prompt library launched on 25 June 2026.",
    sameAs: []
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
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 text-[var(--text)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-center mb-20">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-logo leading-tight">Ashish Panchal — Founder of MangoXPrompts</h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
            Ashish Panchal is the founder of MangoXPrompts, a curated AI prompt library launched on 25 June 2026. MangoXPrompts is built around the idea of sharing prompts that actually work for AI image generation, video ideas, ChatGPT workflows, personal branding, and creative content generation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/" className="px-6 py-3 bg-[var(--mango)] text-black rounded-full hover:bg-[var(--mango-soft)] transition-colors font-semibold">
              Visit MangoXPrompts →
            </Link>
            <Link href="/prompts/ai-portrait-prompts" className="px-6 py-3 bg-[var(--border)] text-white rounded-full hover:bg-[#333] transition-colors font-medium">
              Explore AI Portrait Prompts →
            </Link>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative w-full aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden border border-[var(--border)] shadow-2xl group">
            <Image
              src="/images/founder/ashish-panchal-founder.jpg"
              alt="Ashish Panchal, founder of MangoXPrompts"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-2xl font-bold text-white mb-1">Ashish Panchal</p>
              <p className="text-[var(--mango-soft)] font-medium">Founder, MangoXPrompts</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-16 mb-20">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 font-logo">About Ashish Panchal</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Ashish Panchal created MangoXPrompts to make AI prompting easier, more practical, and more useful for creators and professionals. The platform focuses on ready-to-copy prompt formats that help users generate better AI outputs with less trial and error.
          </p>
        </div>

        <div className="bg-[#111] border border-[var(--border)] rounded-2xl p-8">
          <h2 className="text-xl font-semibold mb-6 font-logo text-[var(--mango-soft)]">Founder facts</h2>
          <ul className="space-y-4 text-[var(--text-secondary)]">
            <li className="flex justify-between border-b border-[var(--border)] pb-2"><strong className="text-white">Name:</strong> Ashish Panchal</li>
            <li className="flex justify-between border-b border-[var(--border)] pb-2"><strong className="text-white">Role:</strong> Founder</li>
            <li className="flex justify-between border-b border-[var(--border)] pb-2"><strong className="text-white">Company:</strong> MangoXPrompts</li>
            <li className="flex justify-between border-b border-[var(--border)] pb-2"><strong className="text-white">Founded:</strong> 25 June 2026</li>
            <li className="flex justify-between border-b border-[var(--border)] pb-2"><strong className="text-white">Website:</strong> <a href="https://www.mangoxprompts.xyz" className="text-[var(--mango-soft)] hover:underline">mangoxprompts.xyz</a></li>
            <li className="flex justify-between pt-2"><strong className="text-white">Tagline:</strong> <span className="italic">Sharing the prompts that actually work.</span></li>
          </ul>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 font-logo">MangoXPrompts mission</h2>
        <div className="p-8 border-l-4 border-[var(--mango)] bg-[var(--bg-card)] rounded-r-2xl">
          <p className="text-xl text-[var(--text)] italic leading-relaxed">
            "The mission of MangoXPrompts is to help users find curated, structured, and practical prompts for AI tools instead of wasting time testing unclear prompt ideas."
          </p>
        </div>
      </div>

      <div className="border-t border-[var(--border)] pt-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 font-logo">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-2 text-white">Who is the founder of MangoXPrompts?</h3>
            <p className="text-[var(--text-secondary)]">MangoXPrompts was founded by Ashish Panchal on 25 June 2026.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 text-white">What is MangoXPrompts?</h3>
            <p className="text-[var(--text-secondary)]">MangoXPrompts is a curated AI prompt library for Gemini image generation, AI portraits, video ideas, ChatGPT workflows, personal branding, and premium creative prompts.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 text-white">What is the tagline of MangoXPrompts?</h3>
            <p className="text-[var(--text-secondary)]">The tagline of MangoXPrompts is “Sharing the prompts that actually work.”</p>
          </div>
        </div>
      </div>
    </div>
  );
}
