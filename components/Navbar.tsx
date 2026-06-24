"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchBar from "@/components/SearchBar";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const linkClass = (href: string) => {
    return `transition-colors whitespace-nowrap ${
      isActive(href)
        ? "text-[var(--mango-soft)] font-medium"
        : "text-[var(--text-secondary)] hover:text-[var(--mango-soft)]"
    }`;
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex items-center gap-6">
        <Link href="/" className="flex-shrink-0 flex items-center">
          <img src="/images/logo.png" alt="Mango Prompts" className="h-10 sm:h-14 w-auto drop-shadow-sm" />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/trending" className={linkClass("/trending")}>
            Trending
          </Link>
          <Link href="/premium" className={linkClass("/premium")}>
            Premium
          </Link>
        </nav>
        <div className="ml-auto flex-1 max-w-[130px] min-[400px]:max-w-[160px] sm:max-w-[240px] md:max-w-xs lg:max-w-sm">
          <SearchBar />
        </div>
      </div>
      <nav className="md:hidden flex items-center gap-5 text-sm px-4 sm:px-6 pb-3 overflow-x-auto scrollbar-thin">
        <Link href="/" className={linkClass("/")}>
          Home
        </Link>
        <Link href="/trending" className={linkClass("/trending")}>
          Trending
        </Link>
        <Link href="/premium" className={linkClass("/premium")}>
          Premium
        </Link>
      </nav>
    </header>
  );
}
