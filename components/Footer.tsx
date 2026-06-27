import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div>
          <p className="font-logo text-xl">MangoXPrompts</p>
          <p className="text-sm text-[var(--text-muted)] mt-1">
            Curated AI Prompt Library.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-[var(--text-secondary)]">
          <Link href="/" className="hover:text-[var(--mango-soft)] transition-colors">Home</Link>
          <Link href="/premium" className="hover:text-[var(--mango-soft)] transition-colors">Premium</Link>
          <Link href="/about" className="hover:text-[var(--mango-soft)] transition-colors">About</Link>
          <Link href="/contact" className="hover:text-[var(--mango-soft)] transition-colors">Contact</Link>
          <Link href="/privacy-policy" className="hover:text-[var(--mango-soft)] transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-[var(--mango-soft)] transition-colors">Terms</Link>
          <Link href="/refund-policy" className="hover:text-[var(--mango-soft)] transition-colors">Refund Policy</Link>
        </div>
      </div>
    </footer>
  );
}
