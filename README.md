# Istiak Rahman: iPhone-style portfolio

A personal portfolio where the whole website is an iPhone: lock screen, home-screen widgets, Focus settings, skill folders, project reels in a phone, notification banners and a message thread, all in Liquid Glass on a deep black, navy and teal base.

Built with React 19, Vite, `motion`, `lenis` and locally bundled Iconify icons. Plain CSS, no Tailwind.

## Where to edit content

Everything personal lives in `src/data.js`: name and intro, links, skills, projects and social accounts. Images are in `public/brand/` (`istiak-rahman-portrait.webp`, `istiak-rahman-avatar.webp`, `logo.webp`). Social preview image: `public/og-image.jpg`.

Only add skills and projects that are real. Skills are split into "Working with" and "Learning" to match the GitHub profile; there are no percentage meters on purpose.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run lint
npm run build      # outputs to dist/
npm run preview    # serve the production build
```

## Deploy

`dist/` is a static site (`npm run build`, output directory `dist`). No environment variables are needed.

- **Netlify** (recommended): `netlify.toml` is included. It is also the only host where the footer's view and like counter works, because that counter is a Netlify Function (`netlify/functions/stats.mjs`) using Netlify Blobs at `/api/stats`.
- **GitHub Pages / Vercel / Cloudflare Pages**: the site works, but `/api/stats` does not exist there, so the footer hides the counter instead of showing fake numbers. `.github/workflows/deploy.yml` deploys to GitHub Pages on push to `master`.
- **Custom domain `istiakrahman.pro.bd`**: add the domain in your host's dashboard first, then create the DNS records it asks for. Do not change DNS for the domain until the new site is verified on the host's preview URL, so the current website keeps working in the meantime. On GitHub Pages also add a `public/CNAME` file containing the domain.

The canonical URL, Open Graph tags, `robots.txt` and `sitemap.xml` all assume the site is served at `https://istiakrahman.pro.bd/`.

## Local stats database

`npm run dev` and `npm run preview` serve the same `/api/stats` API from `server/vite-stats.js`, stored in `data/stats.json` (git-ignored).

## Map

The About page map shows Bangladesh at country level only (no city or street marker). To rebuild it: `npm i --no-save world-atlas topojson-client && node scripts/build-map.mjs`.

## Icons

Icons are bundled in `src/icons/`. To add one, put its name in `scripts/fetch-icons.mjs` and run `node scripts/fetch-icons.mjs` (needs internet).
