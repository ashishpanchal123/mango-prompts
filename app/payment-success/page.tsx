"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PaymentSuccessPage() {
  const router = useRouter();
  const [status, setStatus] = useState("Verifying payment...");
  const [error, setError] = useState(false);

  useEffect(() => {
    const processUnlock = async () => {
      try {
        const pendingId = localStorage.getItem("pendingPremiumPromptId");
        if (!pendingId) {
          setError(true);
          setStatus("No pending premium prompt found.");
          return;
        }

        // Add to unlocked array
        const unlockedStr = localStorage.getItem("unlockedPremiumPrompts");
        let unlocked: string[] = [];
        if (unlockedStr) {
          unlocked = JSON.parse(unlockedStr);
        }
        
        if (!unlocked.includes(pendingId)) {
          unlocked.push(pendingId);
          localStorage.setItem("unlockedPremiumPrompts", JSON.stringify(unlocked));
        }

        // Clear pending
        localStorage.removeItem("pendingPremiumPromptId");

        setStatus("Payment successful! Your premium prompt is unlocked. Redirecting...");
        
        // Redirect back to prompt after a short delay
        setTimeout(() => {
          router.push(`/prompt/${pendingId}`);
        }, 2000);
      } catch (err) {
        console.error(err);
        setError(true);
        setStatus("An error occurred while unlocking your prompt.");
      }
    };

    processUnlock();
  }, [router]);

  return (
    <div className="mx-auto max-w-xl px-4 sm:px-6 py-20 text-center min-h-[50vh] flex flex-col items-center justify-center">
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${error ? 'bg-red-500/10 text-red-500' : 'bg-green-500/10 text-green-500'}`}>
        {error ? (
           <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
        ) : (
           <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
        )}
      </div>
      <h1 className="text-2xl font-semibold mb-2">{error ? "Oops!" : "Success!"}</h1>
      <p className="text-[var(--text-secondary)]">{status}</p>
      
      {error && (
        <button 
          onClick={() => router.push("/")}
          className="mt-8 px-6 py-2 bg-[var(--mango)] text-[#1a1100] font-semibold rounded-full hover:bg-[var(--mango-soft)] transition-colors"
        >
          Go Home
        </button>
      )}
    </div>
  );
}
