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

      <div className="flex justify-center mb-16">
        {/* Premium Access Card */}
        <div className="w-full max-w-md group flex flex-col relative border-2 border-[var(--mango)] rounded-2xl p-8 bg-[var(--bg-card)] shadow-[0_0_15px_rgba(255,200,0,0.1)]">
          <div className="flex justify-between items-start mb-6">
            <span className="text-xs font-semibold px-2 py-1 bg-green-500/10 text-green-500 rounded-md tracking-wide">LIVE</span>
            <span className="font-semibold text-2xl text-[var(--mango-soft)]">₹25</span>
          </div>
          <h3 className="font-bold text-2xl mb-3">Premium Access</h3>
          <p className="text-base text-[var(--text-secondary)] mb-8 flex-1">
            Unlock all premium prompts for one-time launch access.
          </p>
          <PremiumAccessButton />
          <p className="mt-4 text-xs text-center text-[var(--text-muted)]">
            Pay once. Copy all premium prompts instantly after successful payment.
          </p>
        </div>
      </div>

      <div className="border-t border-[var(--border)] pt-16">
        <h2 className="text-2xl font-semibold text-center mb-10 text-[var(--text-secondary)]">Upcoming Packs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Coming Soon Pack Cards */}
          {[
            { title: "Veo Prompt Pack", desc: "Curated pack access is being prepared." },
            { title: "Personal Branding Pack", desc: "Curated pack access is being prepared." },
            { title: "Luxury Fashion Prompt Pack", desc: "Curated pack access is being prepared." }
          ].map((pack) => (
            <div key={pack.title} className="flex flex-col relative border border-[var(--border)] rounded-2xl p-6 bg-[var(--bg-card)]/30">
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
      </div>

    </div>
  );
}
