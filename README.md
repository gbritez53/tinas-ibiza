# TINAS — Integral Maintenance (web)

One-page site for TINAS, integral maintenance for luxury villas and apartments in Ibiza.

**Stack:** Astro 7 · React 19 (only the before/after slider) · Tailwind CSS 4 · TypeScript 6 · pnpm

```sh
pnpm install
pnpm dev          # dev server (runs detached; stop with `pnpm astro dev stop`)
pnpm astro check  # type-check .astro / .ts / .tsx
```

> TypeScript is pinned to v6 because `astro check` does not support TypeScript 7 yet.

## Structure (screaming architecture)

```
src/
├── features/            # one folder per page section — named after what it does
│   ├── home/            # HomePage: composes every section (used by / and /es/)
│   ├── hero/ manifesto/ care/ services/ before-after/
│   ├── instagram/ about/ contact/ footer/
├── shared/
│   ├── config/site.ts   # contact data, socials, nav anchors — single source of truth
│   ├── i18n/            # dictionaries (en, es) + getTranslations()
│   └── ui/              # Icon, LanguageSwitcher
├── layouts/BaseLayout.astro   # fonts, meta, hreflang, JSON-LD
├── styles/global.css          # brand tokens (@theme)
└── pages/               # / (English) and /es/ (Spanish)
```

## Content

- **Copy:** `src/shared/i18n/dictionaries/{en,es}.ts`. `es` is typed against `en`, so a missing key fails `astro check`.
- **Services:** ids and photos in `src/features/services/services.ts`; titles in the dictionaries.
- **Instagram carousel:** `src/features/instagram/posts.ts` (display only: no links, never pauses).
- **Brand reference:** `knowledge/` (colors, fonts, services, copy, original images).

## Pending from the client

- [ ] Real before/after pool photos taken from the same spot (current ones are AI-generated placeholders).
- [ ] Photo for the garden maintenance service (currently a solid tile).
- [ ] Logo in vector format (SVG); current logos are cut from Instagram posts.
- [ ] Domain → set `site` in `astro.config.mjs` and switch hreflang to absolute URLs.
