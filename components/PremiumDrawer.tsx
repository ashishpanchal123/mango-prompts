"use client";

import { useEffect, useState } from "react";
import type { Prompt } from "@/lib/types";

export default function PremiumDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState<Prompt | null>(null);

  useEffect(() => {
    const handleOpen = (e: CustomEvent<{ prompt: Prompt }>) => {
      setPrompt(e.detail.prompt);
      setIsOpen(true);
    };

    window.addEventListener("open-premium-drawer" as any, handleOpen);
    return () => window.removeEventListener("open-premium-drawer" as any, handleOpen);
  }, []);

  if (!isOpen || !prompt) return null;

  const handlePay = () => {
    if (!prompt.paymentLink) return;
    localStorage.setItem("pendingPremiumPromptId", prompt.slug);
    localStorage.setItem("pendingPremiumPromptTitle", prompt.title);
    window.location.href = prompt.paymentLink;
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-[400px] bg-[var(--bg)] border-l border-[var(--border)] shadow-2xl flex flex-col transform transition-transform duration-300">
        <div className="p-6 border-b border-[var(--border)] flex justify-between items-center bg-[var(--bg-card)]">
          <h2 className="text-xl font-semibold">Unlock Premium Prompt</h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors p-2"
          >
            ✕
          </button>
        </div>
        
        <div className="p-6 flex-1 overflow-y-auto flex flex-col gap-6">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-5 relative overflow-hidden">
             <div className="absolute top-0 right-0 px-3 py-1 bg-[var(--mango)] text-[#1a1100] text-[10px] font-bold tracking-wider rounded-bl-xl">
               PREMIUM
             </div>
             <h3 className="font-semibold text-lg text-[var(--text)] leading-snug pr-10">{prompt.title}</h3>
             {prompt.description && (
               <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
                 {prompt.description}
               </p>
             )}
          </div>
          
          <div className="text-center mt-4">
             <div className="text-3xl font-bold mb-2">₹25</div>
             <p className="text-[var(--text-secondary)] text-sm">Pay once and unlock this premium prompt instantly.</p>
          </div>
          
          <div className="mt-auto pt-6 flex flex-col gap-3">
             <button 
               onClick={handlePay}
               className="w-full py-3.5 bg-[var(--text)] text-[var(--bg)] font-semibold rounded-xl hover:opacity-90 transition-opacity"
             >
               Pay ₹25 & Unlock
             </button>
             <button 
               onClick={() => setIsOpen(false)}
               className="w-full py-3 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors"
             >
               Maybe later
             </button>
             <div className="flex items-center justify-center gap-1.5 mt-2">
               <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
               <span className="text-xs text-[var(--text-muted)]">Secure payment powered by Razorpay.</span>
             </div>
          </div>
        </div>
      </div>
    </>
  );
}
