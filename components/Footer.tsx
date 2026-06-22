export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <div>
          <p className="font-logo text-lg">Mango Prompts</p>
          <p className="text-sm text-[var(--text-muted)] mt-1">
            Fresh AI Prompts.
          </p>
        </div>
        <div className="flex items-center gap-6 text-sm text-[var(--text-secondary)]">
          <a href="/" className="hover:text-[var(--mango-soft)] transition-colors">Home</a>
          <a href="/categories" className="hover:text-[var(--mango-soft)] transition-colors">Categories</a>
          <a href="/premium" className="hover:text-[var(--mango-soft)] transition-colors">Premium</a>
        </div>
      </div>
    </footer>
  );
}
