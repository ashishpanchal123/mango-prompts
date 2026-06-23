"use client";

import { useEffect, useState } from "react";
import type { Prompt } from "@/lib/types";
import CopyButton from "@/components/CopyButton";

export default function PremiumPromptGuard({ prompt }: { prompt: Prompt }) {
  const [isMounted, setIsMounted] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

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

  if (!isMounted) {
    // Show a skeleton or loading state to prevent hydration mismatch
    return <div className="mt-8 h-32 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] animate-pulse" />;
  }

  const handleOpenDrawer = () => {
    window.dispatchEvent(
      new CustomEvent("open-premium-drawer", { detail: { prompt } })
    );
  };

  const showLocked = prompt.isPremium && !isUnlocked;

  if (showLocked) {
    return (
      <div className="mt-8 rounded-lg border border-[var(--mango)]/30 bg-[var(--mango)]/5 p-6 sm:p-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--mango)] to-transparent opacity-50" />
        <h3 className="text-xl font-semibold mb-3 flex items-center justify-center gap-2">
          <svg className="w-5 h-5 text-[var(--mango)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
          Premium Content
        </h3>
        <p className="text-[var(--text-secondary)] mb-6 max-w-md mx-auto">
          This prompt is part of Mango Prompts premium collection. Unlock it for ₹25 to view and copy the full prompt.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={handleOpenDrawer}
            className="px-6 py-3 bg-[var(--text)] text-[var(--bg)] font-semibold rounded-full hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            Unlock for ₹25
          </button>
        </div>
      </div>
    );
  }

  // Free or Unlocked state
  return (
    <>
      <div className={`mt-8 rounded-lg border p-5 sm:p-6 transition-all duration-700 ${prompt.isPremium ? 'border-[var(--mango)] bg-[var(--mango)]/5 shadow-[0_0_15px_rgba(255,200,0,0.1)]' : 'border-[var(--border)] bg-[var(--bg-card)]'}`}>
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs uppercase tracking-wide text-[var(--text-muted)]">
            Full Prompt
          </p>
          {prompt.isPremium && isUnlocked && (
            <span className="text-xs font-bold text-green-500 flex items-center gap-1 animate-[pulse_2s_ease-in-out_1]">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
              Unlocked — you can copy this prompt now.
            </span>
          )}
        </div>
        <p className="text-[var(--text-primary)] leading-relaxed whitespace-pre-wrap text-sm sm:text-base">
          {prompt.prompt}
        </p>
      </div>

      <div className="mt-6">
        <CopyButton text={prompt.prompt} full />
      </div>
    </>
  );
}
