import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — MangoXPrompts",
  description: "Privacy Policy for MangoXPrompts.",
  alternates: {
    canonical: "https://www.mangoxprompts.xyz/privacy-policy",
  }
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 text-[var(--text)]">
      <h1 className="text-3xl font-bold mb-6 font-logo">Privacy Policy</h1>
      <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
        <p>Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your information.</p>
        <h2 className="text-xl font-semibold mt-6 text-[var(--text)]">Information Collection</h2>
        <p>We may collect basic information such as your email address when you purchase premium access through our payment provider (Razorpay).</p>
        <h2 className="text-xl font-semibold mt-6 text-[var(--text)]">Data Usage</h2>
        <p>We use your information solely to provide access to our services, process payments, and communicate important updates.</p>
      </div>
    </div>
  );
}
