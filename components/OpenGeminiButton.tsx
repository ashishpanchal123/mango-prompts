"use client";

import { useState, useEffect } from "react";
import { openGemini, isMobileOrWebView } from "@/lib/device";
import CopyButton from "./CopyButton";

export default function OpenGeminiButton({ 
  className,
  promptText
}: { 
  className?: string;
  promptText?: string;
}) {
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileOrWebView());
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    if (promptText && isMobile) {
      e.preventDefault();
      setShowModal(true);
    }
    // If not mobile or no promptText, let the native <a> tag handle the navigation
  };

  const geminiUrl = "https://gemini.google.com/app";
  const shouldIntercept = promptText && isMobile;

  return (
    <>
      <a 
        href={shouldIntercept ? undefined : geminiUrl}
        target={shouldIntercept ? undefined : "_blank"}
        rel="noopener noreferrer"
        onClick={handleClick}
        className={className}
        style={{ cursor: "pointer" }}
      >
        Open Gemini
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
      </a>

      {/* Bottom Sheet Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl w-full max-w-sm overflow-hidden animate-in slide-in-from-bottom-8 sm:zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-[var(--text-primary)]">Open Gemini</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-6">
                Copy the prompt first, then open Gemini, upload your photo, and paste the prompt.
              </p>
              <div className="flex flex-col gap-3">
                <CopyButton text={promptText!} full isVisual />
                <a
                  href={geminiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 text-base font-medium rounded-md border border-[var(--border)] bg-[var(--bg-elevated)] hover:bg-[var(--bg)] transition-colors text-[var(--text-primary)]"
                >
                  Open Gemini
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </a>
                <button
                  onClick={() => setShowModal(false)}
                  className="w-full py-2 text-sm font-medium rounded-md text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors mt-2"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
