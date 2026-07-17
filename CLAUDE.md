# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page personal portfolio site for a Data Engineer, built with Astro and deployed to GitHub Pages at `mth.eus`. Bilingual pt-BR (default) / en. Replaced the previous Jekyll CV site.

## Commands

```bash
npm install      # install dependencies
npm run dev      # dev server at http://localhost:4321
npm run build    # static build into dist/ (what CI runs)
npm run preview  # serve the built dist/
```

There are no tests or linters.

## Architecture

All résumé content lives in **`src/data/cv.ts`** — edit that, not the components. Translatable fields are `{ pt, en }` objects read through the `pick(text, locale)` helper; neutral data (email, URLs, dates) is plain. UI chrome strings (section headings, buttons) live in **`src/i18n/ui.ts`**, read via `useTranslations(locale)`.

Locale flows top-down as a prop — there is no context/store. Both pages are thin shells over the same composition:
- `src/pages/index.astro` (pt-BR, `/`) and `src/pages/en/index.astro` (en, `/en/`) each render `Base` + `PageContent` with a hardcoded `locale`.
- `src/components/PageContent.astro` composes every section; add a new section here.
- `src/layouts/Base.astro` owns `<head>`, SEO/OG/hreflang, the no-flash theme script, and the reveal-on-scroll observer.

Astro's `i18n` config (`astro.config.mjs`) sets `prefixDefaultLocale: false`, so pt-BR is served at `/` without a prefix.

### Certifications / openbadges

`BadgeCard.astro` renders one of two ways per `Certification` in `cv.ts`:
1. `embedHtml` set → renders the platform's official embed (Accredible for Databricks/Oracle, Credly for Microsoft) via `set:html`.
2. Otherwise → `image` (from `public/badges/`) linked to `verifyUrl`; if `image` is also absent, an award icon placeholder.

The Databricks badge image is not committed — its credential page is a SPA and the Accredible API needs a token, so it must be downloaded manually and wired up in `cv.ts`.

### Styling

Tailwind CSS 4, configured **in CSS** (`src/styles/global.css`) via `@theme` — there is no `tailwind.config.mjs`. Dark mode is class-based through `@custom-variant dark`, toggled on `<html>` and persisted in `localStorage`. Semantic colors are CSS vars consumed as `rgb(var(--bg))`, redefined under `html.dark`; component classes (`.surface`, `.section`, `.text-muted`) are in the `@layer components` block.

`Icon.astro` holds inline SVG paths in a lookup map — add new icons there rather than importing an icon library.

## Deployment

Push to `main` triggers `.github/workflows/pages.yml` (Node 20, `npm ci`, `npm run build`), which uploads `dist/` to GitHub Pages. The custom domain depends on **`public/CNAME`** (copied to `dist/CNAME` at build) — do not delete it.

## Gotcha: verifying responsive layout

Headless Chrome screenshots clamp the window to a ~500px minimum width and then crop to the requested size, which looks like horizontal overflow but isn't. Verify narrow layouts at 500px or wider, or measure `document.body.scrollWidth` against `clientWidth` instead of trusting the image.
