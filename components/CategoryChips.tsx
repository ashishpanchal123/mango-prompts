import Link from "next/link";
import { ALL_CATEGORIES } from "@/lib/types";

export default function CategoryChips() {
  return (
    <div className="flex flex-wrap justify-center gap-2.5 mt-8">
      {ALL_CATEGORIES.map((cat) => (
        <Link
          key={cat}
          href={`/categories/${encodeURIComponent(cat.toLowerCase().replace(/\s+/g, "-"))}`}
          className="text-sm px-4 py-2 rounded-full border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--mango)] hover:text-[var(--mango-soft)] transition-colors"
        >
          {cat}
        </Link>
      ))}
    </div>
  );
}
