"use client";

import { useEffect, useState } from "react";

export default function SuccessToast() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const justCompleted = sessionStorage.getItem("premiumUnlockJustCompleted");
    if (justCompleted === "true") {
      setShow(true);
      sessionStorage.removeItem("premiumUnlockJustCompleted");
      
      // Auto-hide after 5 seconds
      setTimeout(() => setShow(false), 5000);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-5">
      <div className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg font-medium flex items-center gap-2 text-sm sm:text-base">
        <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
        Premium unlocked — all premium prompts are now available to copy.
      </div>
    </div>
  );
}
