"use client";

import { useEffect, useState } from "react";
import type { Prompt } from "@/lib/types";
import CopyButton from "./CopyButton";

export default function PremiumButton({
  prompt,
  className = "",
  compact = false,
}: {
  prompt: Prompt;
  className?: string;
  compact?: boolean;
}) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (prompt.isPremium) {
      try {
        const unlockedStr = localStorage.getItem("unlockedPremiumPrompts");
        if (unlockedStr) {
          const unlocked = JSON.parse(unlockedStr);
          if (Array.isArray(unlocked) && unlocked.includes(prompt.slug)) {
            setIsUnlocked(true);
          }
        }
      } catch (err) {
        console.error("Failed to read localStorage", err);
      }
    }
  }, [prompt]);

  if (!isMounted) return null;

  if (isUnlocked) {
    return <CopyButton text={prompt.prompt} compact={compact} />;
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.dispatchEvent(
      new CustomEvent("open-premium-drawer", { detail: { prompt } })
    );
  };

  const baseClasses = "rounded-md font-medium transition-colors duration-200 border bg-transparent text-[var(--mango)] border-[var(--mango)] hover:bg-[var(--mango)] hover:text-[#1a1100] text-center";
  const sizeClasses = compact ? "px-3.5 py-1.5 text-sm" : "px-4 py-2 text-sm";

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${sizeClasses} ${className}`}
    >
      Premium ₹25
    </button>
  );
}
