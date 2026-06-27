import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — MangoXPrompts",
  description: "Get in touch with MangoXPrompts.",
  alternates: {
    canonical: "https://www.mangoxprompts.xyz/contact",
  }
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 text-[var(--text)]">
      <h1 className="text-3xl font-bold mb-6 font-logo">Contact Us</h1>
      <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
        <p>If you have any questions, partnership inquiries, or need support with your premium access, please reach out.</p>
        <p>Email: support@mangoxprompts.xyz</p>
      </div>
    </div>
  );
}
