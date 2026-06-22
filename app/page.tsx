import Link from "next/link";

import VisualPromptCard from "@/components/VisualPromptCard";
import TextPromptCard from "@/components/TextPromptCard";
import { getVisualPrompts, getTextPrompts } from "@/lib/prompts";

export default function HomePage() {
  const visualPrompts = getVisualPrompts().slice(0, 8);
  const textPrompts = getTextPrompts().slice(0, 6);

  return (
    <div>
      {/* HERO SECTION */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 pt-10 pb-6 text-center">
        <h1 className="font-logo text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
          Discover AI Prompts That Actually Work
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
          Curated prompts for ChatGPT, Claude, Gemini, Midjourney, Veo and more.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="#free-prompts" className="px-6 py-3 bg-[var(--mango)] text-black font-semibold rounded-full hover:bg-[var(--mango-soft)] transition-colors">
            Browse Free Prompts
          </Link>
          <Link href="#premium" className="px-6 py-3 border border-[var(--border)] text-[var(--text)] font-semibold rounded-full hover:border-[var(--text-muted)] transition-colors">
            Explore Premium
          </Link>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-6 text-center">
        <p className="text-sm font-medium text-[var(--text-secondary)] uppercase tracking-wider mb-4">Why Mango Prompts?</p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-[var(--text)]">
          <span className="flex items-center gap-2"><svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>Curated</span>
          <span className="flex items-center gap-2"><svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>Copy & Use Instantly</span>
          <span className="flex items-center gap-2"><svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>Tested Prompts</span>
          <span className="flex items-center gap-2"><svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>Updated Regularly</span>
        </div>
      </section>

      {/* PREMIUM SECTION */}
      <section id="premium" className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-2xl font-semibold">Premium Packs</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "AI Video Creator Pack", desc: "50 Advanced Veo Prompts" },
            { title: "Luxury Fashion Marketing Pack", desc: "50 Fashion Prompts" },
            { title: "Personal Branding Pack", desc: "50 Creator Prompts" }
          ].map((pack) => (
            <div key={pack.title} className="group relative border border-[var(--border)] rounded-2xl p-6 bg-[var(--bg)] hover:border-[var(--text-muted)] transition-colors">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-semibold px-2 py-1 bg-yellow-500/10 text-yellow-500 rounded-md tracking-wide">PREMIUM</span>
                <span className="font-semibold text-lg">₹99</span>
              </div>
              <h3 className="font-semibold text-lg mb-1">{pack.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-6">{pack.desc}</p>
              <a href="https://rzp.io" target="_blank" rel="noopener noreferrer" className="block w-full text-center px-4 py-2 bg-[var(--text)] text-[var(--bg)] font-medium rounded-xl hover:opacity-90 transition-opacity">
                Unlock Button
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FREE PROMPTS SECTION */}
      <section id="free-prompts" className="mx-auto max-w-7xl px-4 sm:px-6 py-12 border-t border-[var(--border)]">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-2xl font-semibold">Featured Visuals</h2>
          <Link href="/trending" className="text-sm text-[var(--mango-soft)] hover:underline">
            View trending
          </Link>
        </div>
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {visualPrompts.map((p) => (
            <VisualPromptCard key={p.slug} prompt={p} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 border-t border-[var(--border)]">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-2xl font-semibold">Featured Workflows</h2>
          <Link href="/categories" className="text-sm text-[var(--mango-soft)] hover:underline">
            Browse categories
          </Link>
        </div>
        <div className="grid grid-cols-1 min-[540px]:grid-cols-2 md:grid-cols-3 gap-4">
          {textPrompts.map((p) => (
            <TextPromptCard key={p.slug} prompt={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
