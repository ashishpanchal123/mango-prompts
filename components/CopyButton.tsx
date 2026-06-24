"use client";

import { useState } from "react";

export default function CopyButton({
  text,
  className = "",
  full = false,
  compact = false,
}: {
  text: string;
  className?: string;
  full?: boolean;
  compact?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        throw new Error("Clipboard API not available");
      }
    } catch {
      try {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand("copy");
        document.body.removeChild(textArea);
        if (successful) {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }
      } catch (err) {
        console.error("Fallback: unable to copy", err);
      }
    }
  }

  const sizeClasses = full
    ? "w-full py-3.5 text-base"
    : compact
    ? "px-3.5 py-1.5 text-sm"
    : "px-4 py-2 text-sm";

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Prompt copied" : "Copy prompt"}
      className={`${sizeClasses} rounded-md font-medium transition-colors duration-200 border ${
        copied
          ? "bg-[var(--mango)] text-[#1a1100] border-[var(--mango)]"
          : "bg-transparent text-[var(--mango-soft)] border-[var(--mango)] hover:bg-[var(--mango)] hover:text-[#1a1100]"
      } ${className}`}
    >
      {copied ? "Copied!" : "Copy Prompt"}
    </button>
  );
}
