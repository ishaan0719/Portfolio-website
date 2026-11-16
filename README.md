# Ishaan Srivastava: portfolio

Single-page portfolio built with Next.js (App Router), TypeScript and Tailwind CSS v4, exported as a static site.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # static export to ./out
npm run lint       # ESLint
npm run format     # Prettier
```

To preview the production build: `npx serve out`.

## Update content

All copy lives in **`src/content.ts`**: headline, experience, projects, leadership, skills and links.

- Wrap a number in `**double asterisks**` inside a bullet to show it in the accent colour.
- Project links: set `github`, `demo` or `writeup` on a project. Leave them out or set them to `null` to hide them.
- Change `site.url` once you have a custom domain. It feeds the canonical URL, sitemap, robots.txt and Open Graph tags.

## Resume

Put your PDF at **`public/resume.pdf`** (same filename) and rebuild. The "Download Resume" button links to `/resume.pdf`.

## Design tokens

Colours are defined once in `src/app/globals.css` (light and dark) and exposed as Tailwind classes (`bg-bg`, `text-ink`, `text-accent`, ...). `src/theme.ts` mirrors the light palette for the generated Open Graph image and favicon. Fonts (Fraunces, Inter) are self-hosted from `src/fonts`.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to vercel.com/new, import the repo, keep the detected **Next.js** preset and default settings, then deploy.
3. Every push to `main` redeploys automatically.

## Custom domain

1. In Vercel: Project → Settings → Domains → add your domain (for example `ishaansrivastava.com`).
2. At your registrar, add the DNS records Vercel shows: usually an `A` record for the apex pointing to Vercel's IP, and a `CNAME` for `www` pointing to `cname.vercel-dns.com`.
3. Once it verifies, update `site.url` in `src/content.ts` and push.
