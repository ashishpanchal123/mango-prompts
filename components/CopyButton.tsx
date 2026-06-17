"use client";

import { useState } from "react";

export default function CopyButton({
  text,
  className = "",
  full = false,
}: {
  text: string;
  className?: string;
  full?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API unavailable, silently ignore
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Prompt copied" : "Copy prompt"}
      className={`${
        full ? "w-full py-3.5 text-base" : "px-4 py-2 text-sm"
      } rounded-md font-medium transition-colors duration-200 border ${
        copied
          ? "bg-[var(--mango)] text-[#1a1100] border-[var(--mango)]"
          : "bg-transparent text-[var(--mango-soft)] border-[var(--mango)] hover:bg-[var(--mango)] hover:text-[#1a1100]"
      } ${className}`}
    >
      {copied ? "Copied!" : "Copy Prompt"}
    </button>
  );
}
