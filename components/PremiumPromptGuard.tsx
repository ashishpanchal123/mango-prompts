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
        const premiumAccessUnlocked = localStorage.getItem("premiumAccessUnlocked");
        if (premiumAccessUnlocked === "true") {
          setIsUnlocked(true);
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
    window.dispatchEvent(new CustomEvent("open-premium-drawer"));
  };

  const showLocked = prompt.isPremium && !isUnlocked;

  if (showLocked) {
    return (
      <div className="mt-8 rounded-lg border border-[var(--mango)]/30 bg-[var(--mango)]/5 p-6 sm:p-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--mango)] to-transparent opacity-50" />
        <h3 className="text-xl font-semibold mb-6 flex items-center justify-center gap-2">
          <svg className="w-5 h-5 text-[var(--mango)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
          Premium Content
        </h3>
        <div className="flex flex-col items-center justify-center gap-3">
          <button 
            onClick={handleOpenDrawer}
            className="px-8 py-3 bg-[var(--mango)] text-[#1a1100] font-semibold rounded-full hover:bg-[var(--mango-soft)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
          >
            Subscribe Now
          </button>
          <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
            {prompt.type === "visual" 
              ? "Subscribe to unlock this image prompt. After unlock, copy it and use it in Gemini with your uploaded photo."
              : "Subscribe for ₹25 to unlock all premium prompts and copy this prompt."}
          </p>
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
              Unlocked
            </span>
          )}
        </div>
        <p className="text-[var(--text-primary)] leading-relaxed whitespace-pre-wrap text-sm sm:text-base">
          {prompt.prompt}
        </p>
      </div>

      {prompt.type === "visual" ? (
        <div className="mt-8 mb-4 rounded-lg border border-[var(--border)] bg-[var(--bg)] p-5 sm:p-6">
          <h4 className="font-semibold text-sm mb-4">How to use this image prompt</h4>
          <ol className="text-sm text-[var(--text-secondary)] space-y-2.5 list-decimal list-inside mb-6 font-medium">
            <li>Open Gemini</li>
            <li>Upload your face/photo</li>
            <li>Paste this prompt</li>
            <li>Generate your image</li>
          </ol>
          <div className="flex flex-col sm:flex-row gap-3">
            <CopyButton text={prompt.prompt} full isVisual />
            <a 
              href="https://gemini.google.com/app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 text-base font-medium rounded-md border border-[var(--border)] bg-[var(--bg-card)] hover:bg-[var(--bg)] hover:border-[var(--text-muted)] transition-colors text-[var(--text)]"
            >
              Open Gemini
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
          </div>
        </div>
      ) : (
        <div className="mt-6">
          <CopyButton text={prompt.prompt} full />
        </div>
      )}
    </>
  );
}
