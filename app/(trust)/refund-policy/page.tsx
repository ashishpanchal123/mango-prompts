import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy — MangoXPrompts",
  description: "Refund Policy for MangoXPrompts.",
  alternates: {
    canonical: "https://www.mangoxprompts.xyz/refund-policy",
  }
};

export default function RefundPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 text-[var(--text)]">
      <h1 className="text-3xl font-bold mb-6 font-logo">Refund Policy</h1>
      <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
        <p>Due to the digital nature of our product and immediate access to the premium prompt library, we generally do not offer refunds.</p>
        <p>If you experience technical issues or accidental duplicate charges, please contact our support team at support@mangoxprompts.xyz within 7 days of purchase, and we will review your request.</p>
      </div>
    </div>
  );
}
