# Mango Prompts 🥭

Fresh AI Prompts. Copy. Paste. Create.

A simple, static AI prompt discovery website built with Next.js 15 (App Router), TypeScript, and Tailwind CSS. No login, no database, no paid services — all 20 launch prompts are stored in a static JSON file.

## Tech Stack
- Next.js (App Router, static generation)
- TypeScript
- Tailwind CSS
- Local fonts (Playfair Display for logo, Be Vietnam Pro for body text)
- Static JSON data (`data/prompts.json`)

## Getting Started Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production Build

```bash
npm run build
npm run start
```

## Project Structure

```
mango-prompts/
├── app/
│   ├── page.tsx                  Homepage
│   ├── layout.tsx                Root layout, fonts, SEO metadata
│   ├── globals.css               Theme tokens, base styles
│   ├── sitemap.ts                Dynamic sitemap.xml
│   ├── robots.ts                 Dynamic robots.txt
│   ├── gallery/page.tsx          Visual prompt gallery
│   ├── categories/page.tsx       Category index
│   ├── categories/[category]/    Per-category listing
│   ├── prompt/[slug]/page.tsx    Prompt detail page
│   └── trending/page.tsx         Trending prompts
├── components/                   UI components (cards, navbar, search, etc.)
├── lib/
│   ├── types.ts                  TypeScript types
│   └── prompts.ts                Data access helpers
├── data/
│   └── prompts.json               20 launch prompts
└── public/fonts/                  Self-hosted font files
```

## Deployment (Vercel)

1. Push this repo to GitHub
2. Go to vercel.com → New Project → Import the GitHub repo
3. Framework preset: Next.js (auto-detected)
4. Click Deploy

No environment variables required.
