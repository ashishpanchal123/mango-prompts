"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { getAllPrompts } from "@/lib/prompts";

export default function SearchBar({
  large = false,
  placeholder = "Search prompts...",
}: {
  large?: boolean;
  placeholder?: string;
}) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const allPrompts = useMemo(() => getAllPrompts(), []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return allPrompts
      .filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.prompt.toLowerCase().includes(q)
      )
      .slice(0, 8);
  }, [query, allPrompts]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        placeholder={placeholder}
        className={`w-full rounded-md border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--mango)] outline-none transition-colors ${
          large ? "px-6 py-4 text-base" : "px-4 py-2 text-sm"
        }`}
      />
      {open && query.trim() && (
        <div className="absolute z-50 mt-2 w-full max-h-96 overflow-y-auto scrollbar-thin rounded-md border border-[var(--border)] bg-[var(--bg-elevated)] shadow-2xl">
          {results.length === 0 ? (
            <p className="px-4 py-4 text-sm text-[var(--text-muted)]">
              No prompts found for &ldquo;{query}&rdquo;
            </p>
          ) : (
            <ul>
              {results.map((p) => (
                <li key={p.slug} className="border-b border-[var(--border)] last:border-b-0">
                  <Link
                    href={`/prompt/${p.slug}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-[var(--mango-dim)] transition-colors"
                  >
                    <span className="text-sm text-[var(--text-primary)] truncate">
                      {p.title}
                    </span>
                    <span className="text-xs text-[var(--mango-soft)] flex-shrink-0">
                      {p.category}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
