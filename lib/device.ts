export function isMobileOrWebView(): boolean {
  if (typeof window === "undefined") return false;
  
  const ua = navigator.userAgent || "";
  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(ua);
  const isWebView =
    /wv|Instagram|FBAN|FBAV|Line|LinkedInApp|Twitter|Snapchat|WhatsApp/i.test(ua) ||
    (isMobile && !/Safari/i.test(ua));
    
  return isMobile || isWebView;
}

export function openGemini() {
  const geminiUrl = "https://gemini.google.com/app";

  if (isMobileOrWebView()) {
    window.location.href = geminiUrl;
  } else {
    window.open(geminiUrl, "_blank", "noopener,noreferrer");
  }
}
