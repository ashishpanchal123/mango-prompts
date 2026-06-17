import Link from "next/link";
import SearchBar from "@/components/SearchBar";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex items-center gap-6">
        <Link href="/" className="font-logo text-2xl font-semibold tracking-tight flex-shrink-0">
          Mango Prompts
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-[var(--text-secondary)]">
          <Link href="/" className="hover:text-[var(--mango-soft)] transition-colors">
            Home
          </Link>
          <Link href="/categories" className="hover:text-[var(--mango-soft)] transition-colors">
            Categories
          </Link>
          <Link href="/gallery" className="hover:text-[var(--mango-soft)] transition-colors">
            Gallery
          </Link>
          <Link href="/trending" className="hover:text-[var(--mango-soft)] transition-colors">
            Trending
          </Link>
        </nav>
        <div className="ml-auto w-full max-w-xs">
          <SearchBar />
        </div>
      </div>
      <nav className="md:hidden flex items-center gap-5 text-sm text-[var(--text-secondary)] px-4 sm:px-6 pb-3 overflow-x-auto scrollbar-thin">
        <Link href="/" className="hover:text-[var(--mango-soft)] transition-colors whitespace-nowrap">
          Home
        </Link>
        <Link href="/categories" className="hover:text-[var(--mango-soft)] transition-colors whitespace-nowrap">
          Categories
        </Link>
        <Link href="/gallery" className="hover:text-[var(--mango-soft)] transition-colors whitespace-nowrap">
          Gallery
        </Link>
        <Link href="/trending" className="hover:text-[var(--mango-soft)] transition-colors whitespace-nowrap">
          Trending
        </Link>
      </nav>
    </header>
  );
}
