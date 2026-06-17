export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 flex flex-col items-center gap-2 text-center">
        <p className="font-logo text-lg">Mango Prompts</p>
        <p className="text-sm text-[var(--text-muted)]">Built by Ashish Panchal</p>
        <p className="text-sm text-[var(--text-muted)]">Mango Prompts © 2026</p>
        <p className="text-sm text-[var(--text-muted)]">
          Fresh AI Prompts. Copy. Paste. Create.
        </p>
      </div>
    </footer>
  );
}
