# Cleanso — Laundry Business Software

Premium marketing website for **Cleanso**, a white-label laundry operations platform:

- **Customer App** — ₹20,000 / year
- **Delivery App** — ₹10,000 / year
- **CMS + POS** — ₹5,000 / year
- **Full Platform Bundle** — ₹30,000 / year

## Live site

**https://kksarang.github.io/laundry/**

## Fix if the site is blank / not loading

GitHub must serve the built `gh-pages` branch (not source on `main`).

1. Open [Repo Settings → Pages](https://github.com/kksarang/laundry/settings/pages)
2. Under **Build and deployment → Source**, choose **Deploy from a branch**
3. Branch: **`gh-pages`** / folder: **`/` (root)**
4. Save, wait 1–2 minutes, then hard-refresh the live URL

Pushing to `main` rebuilds and updates `gh-pages` automatically via Actions.

## Stack

- React 19 + Vite + TypeScript
- Tailwind CSS v4
- Framer Motion
- React Router

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```
