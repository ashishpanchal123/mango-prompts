"use client";

import { useEffect, useState } from "react";
import type { Prompt } from "@/lib/types";

export default function PremiumBadge({ prompt, className = "" }: { prompt: Prompt, className?: string }) {
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

  if (!prompt.isPremium) return null;
  if (!isMounted) return null;

  if (isUnlocked) {
    return (
      <span className={`text-[10px] font-bold uppercase tracking-wider text-green-700 bg-green-100 border border-green-200 px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1 ${className}`}>
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
        Unlocked
      </span>
    );
  }

  return (
    <span className={`text-[10px] font-bold text-[#1a1100] bg-[var(--mango)] px-2 py-0.5 rounded-full shadow-sm ${className}`}>
      PREMIUM
    </span>
  );
}
