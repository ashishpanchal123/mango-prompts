export default function CategoryBadge({ category, source }: { category: string, source?: string }) {
  return (
    <span className="inline-block text-xs font-medium uppercase tracking-wide text-[var(--mango-soft)] border border-[var(--mango)]/40 bg-[var(--mango-dim)] px-2.5 py-1 rounded-full">
      {source || category}
    </span>
  );
}
