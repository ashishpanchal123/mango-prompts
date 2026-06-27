import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — MangoXPrompts",
  description: "Terms of Service for MangoXPrompts.",
  alternates: {
    canonical: "https://www.mangoxprompts.xyz/terms",
  }
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 text-[var(--text)]">
      <h1 className="text-3xl font-bold mb-6 font-logo">Terms of Service</h1>
      <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
        <p>Welcome to MangoXPrompts. By accessing our website, you agree to these Terms of Service.</p>
        <h2 className="text-xl font-semibold mt-6 text-[var(--text)]">Usage</h2>
        <p>Our prompts are provided for your personal and commercial creative use. However, you may not resell or redistribute the prompts themselves as a standalone product.</p>
        <h2 className="text-xl font-semibold mt-6 text-[var(--text)]">Premium Access</h2>
        <p>Premium access grants you the right to view restricted prompts. Account sharing is strictly prohibited.</p>
      </div>
    </div>
  );
}
