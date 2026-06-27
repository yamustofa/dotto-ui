# DottoUI

DottoUI is a cozy pixel-art design system documentation app built with Astro
Starlight, React, Tailwind v4, and shadcn-style registry components.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run registry:build
```

## Stack

- Astro + Starlight
- React + TypeScript
- Tailwind v4
- shadcn-style components
- Pixelarticons free MIT icon set

## Structure

- `src/components/ui` contains the reusable UI primitives.
- `src/components/dotto` contains public DottoUI-specific primitives.
- `src/components/docs` contains documentation-only helpers.
- `src/content/docs` contains the Starlight documentation pages.
- `src/styles/_dotto-core.css` contains the shared DottoUI token and utility layer.
- `registry.json` is the shadcn registry source.
- `public/r` contains generated shadcn registry JSON files.
- `public/assets` contains the pixel artwork used by the docs.
