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
          large ? "pl-6 pr-12 py-4 text-base" : "pl-4 pr-10 py-2 text-sm"
        }`}
      />
      {query && (
        <button
          type="button"
          onClick={() => {
            setQuery("");
            setOpen(false);
          }}
          className={`absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors ${
            large ? "right-4" : "right-3"
          }`}
          aria-label="Clear search"
        >
          <svg
            className={large ? "w-5 h-5" : "w-4 h-4"}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
      {open && query.trim() && (
        <div className="absolute z-50 mt-2 right-0 w-[calc(100vw-2rem)] max-w-[350px] sm:w-full sm:max-w-none max-h-96 overflow-y-auto scrollbar-thin rounded-md border border-[var(--border)] bg-[var(--bg-elevated)] shadow-2xl">
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
