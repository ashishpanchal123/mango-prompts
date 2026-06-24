"use client";

export default function PremiumAccessButton() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-premium-drawer"));
  };

  return (
    <>
      <button 
        onClick={handleClick}
        className="block w-full text-center px-4 py-3 bg-[var(--mango)] text-[#1a1100] font-semibold rounded-xl hover:bg-[var(--mango-soft)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
      >
        Subscribe Now
      </button>
      <p className="text-xs text-center text-[var(--text-muted)] mt-4">
        One-time launch access. Unlock all premium prompts instantly after payment.
      </p>
    </>
  );
}
