# takenaka.work

Minimal, monospace personal site & contact hub for **Yuki Takenaka**.
Built with [Astro](https://astro.build) as a zero-CMS static site designed for **Cloudflare Workers / Cloudflare Pages**.

## Architecture

- **Framework**: Astro (Static output → `dist/`)
- **CMS / Backend**: None (single-file config in `src/config/site.ts`)
- **Hosting**: Cloudflare Workers Static Assets (`wrangler.jsonc`) or Cloudflare Pages

## Quick Customization

Edit [`src/config/site.ts`](src/config/site.ts) to update your:

- Name, role, bio, coordinates, status
- Social & contact channels (`channels` — X, GitHub, or add Email / Zenn / etc. anytime)

## Local Development

```bash
npm install
npm run dev
```

Build production static files (`dist/`):

```bash
npm run build
npm run preview
```

## Deploy to Cloudflare

### Option A: Cloudflare Workers (Recommended — Git Integration)

1. Push this repository to GitHub (`takenaka/portfolio`).
2. In Cloudflare Dashboard → **Workers & Pages** → **Create** → **Workers** → **Connect Git**.
3. Select `takenaka/portfolio` and configure:
   - **Build command**: `npm run build`
   - **Deploy command**: `npx wrangler deploy`
4. Under **Settings → Domains & Routes**, attach custom domain `takenaka.work`.

### Option B: Cloudflare Pages (Git Integration)

1. In Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Select `takenaka/portfolio` and configure:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
3. Under **Custom domains**, add `takenaka.work`.

### Option C: Direct CLI Deploy

```bash
npx wrangler login
npm run deploy
```
