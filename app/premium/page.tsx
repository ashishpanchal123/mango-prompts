import { Metadata } from "next";
import PremiumAccessButton from "@/components/PremiumAccessButton";

export const metadata: Metadata = {
  title: "Premium Prompts",
  description: "Get access to all premium prompts at ₹25 only.",
};

export default function PremiumPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 lg:py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="font-logo text-4xl sm:text-5xl font-semibold mb-6">Premium Prompts</h1>
        <p className="text-lg text-[var(--text-secondary)]">
          Get access to all premium prompts at ₹25 only.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Premium Access Card */}
        <div className="group flex flex-col relative border-2 border-[var(--mango)] rounded-2xl p-6 bg-[var(--bg-card)] shadow-[0_0_15px_rgba(255,200,0,0.1)]">
          <div className="flex justify-between items-start mb-4">
            <span className="text-xs font-semibold px-2 py-1 bg-green-500/10 text-green-500 rounded-md tracking-wide">LIVE</span>
            <span className="font-semibold text-xl text-[var(--mango-soft)]">₹25</span>
          </div>
          <h3 className="font-semibold text-lg mb-2">Premium Access</h3>
          <p className="text-sm text-[var(--text-secondary)] mb-8 flex-1">
            Get access to all premium prompts at ₹25 only.
          </p>
          <PremiumAccessButton />
        </div>

        {/* Coming Soon Pack Cards */}
        {[
          { title: "Veo Prompt Pack", desc: "Curated pack access is being prepared." },
          { title: "Personal Branding Pack", desc: "Curated pack access is being prepared." },
          { title: "Luxury Fashion Prompt Pack", desc: "Curated pack access is being prepared." }
        ].map((pack) => (
          <div key={pack.title} className="flex flex-col relative border border-[var(--border)] rounded-2xl p-6 bg-[var(--bg-card)]/50">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-semibold px-2 py-1 bg-[var(--border)] text-[var(--text-muted)] rounded-md tracking-wide">PACK</span>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-[var(--text-secondary)]">{pack.title}</h3>
            <p className="text-sm text-[var(--text-muted)] mb-8 flex-1">{pack.desc}</p>
            <div className="block w-full text-center px-4 py-3 bg-[var(--border)] text-[var(--text-muted)] font-medium rounded-xl cursor-not-allowed">
              Coming Soon
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center max-w-2xl mx-auto">
        {/* TODO: Re-enable pack purchase buttons only after pack access/download/unlock flow is implemented. */}
        <p className="text-sm text-[var(--text-muted)]">
          Premium prompts unlock instantly after successful payment.<br />
          Prompt packs will be enabled after pack access/download flow is ready.
        </p>
      </div>
    </div>
  );
}
