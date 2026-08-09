# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Public "dossier de compétences" (competence portfolio) for Fabien Costes / Be New Consulting, deployed at https://competences.benew-consulting.com. Positioning: QA / software quality + development and applied AI. Content is entirely in French.

## Commands

```bash
npm run dev          # Vite dev server
npm run build         # tsc -b && vite build && node scripts/prerender.js
npm run preview       # preview production build (required before e2e)
npm run lint          # eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0
npm run test          # vitest run (single run)
npm run test:watch    # vitest watch mode
npm run test:e2e      # playwright test (needs a build + preview server running on :4173)
```

Run a single unit test file: `npx vitest run src/__tests__/Home.test.tsx`
Run a single e2e test: `npx playwright test e2e/navigation.spec.ts -g "burger menu"`

There is no `typecheck` script — type checking happens as part of `npm run build` via `tsc -b`.

## Architecture

- **Two routes only**: `/` (Home) and `/parcours` (Parcours), wired in [src/App.tsx](src/App.tsx) via `react-router-dom`'s `BrowserRouter`. `Home` sections also serve as in-page anchors (`/#realisations`, `/#contact`, etc.) linked from `Nav`/`Footer`/CTAs.
- **Static prerendering without SPA fallback**: the site is hosted on YunoHost with no server-side routing fallback. After `vite build`, [scripts/prerender.js](scripts/prerender.js) copies `dist/index.html` to `dist/parcours/index.html` (with page-specific `<title>`/meta/canonical swapped in) so a direct hit on `/parcours` works. **Any new top-level route must be added to the `pages` array in `scripts/prerender.js`**, or direct navigation/refresh to it will 404 on the real server.
- **Content/markup separation**: all editorial copy lives in [src/data/content.ts](src/data/content.ts) (Home) and `src/data/parcours.ts` (Parcours) as typed const objects; components (`src/pages/*.tsx`) only map over this data and render markup. Edit copy in `data/`, not inline in JSX.
- **Hash-scroll behavior**: [src/hooks/useHashScroll.ts](src/hooks/useHashScroll.ts) handles both `window.scrollTo(0,0)` on plain route changes and smooth-scrolling to `#id` on hash links, retrying via `requestAnimationFrame` + a timeout fallback since the target element may not be mounted yet right after a route change (relevant when a hash link points from `/parcours` to a `/#section` on Home).
- **Styling**: CSS custom properties defined once in [src/styles/variables.css](src/styles/variables.css) (dark theme only — colors, spacing, typography scale), consumed by per-component/page CSS files (`Nav.css`, `Home.css`, etc.) and shared layout primitives in `src/styles/components.css` (`.section`, `.page-container`, `.grid-3`, `.card`, `.badge`, `.btn`, ...). Prefer the existing tokens/utility classes over new ad hoc values.
- **Nav accessibility**: mobile nav links must stay non-focusable when the burger menu is closed (`tabIndex={open ? 0 : -1}` in [src/components/Nav.tsx](src/components/Nav.tsx)) — this is asserted by the e2e test `mobile menu links not focusable when closed` in [e2e/navigation.spec.ts](e2e/navigation.spec.ts). Don't remove that attribute without also updating the test.
- **OG image**: `scripts/generate-og-image.js` renders `public/og-image.png` from an inline SVG via `sharp`; it's a manual/one-off script (not wired into `npm run build`), re-run it if hero copy or brand colors change.

## Testing

- Unit tests (Vitest + React Testing Library, jsdom) live in `src/__tests__/`, query by rendered French text/roles, and generally assert content presence rather than styling.
- E2E tests (Playwright) live in `e2e/`, run against `http://localhost:4173` (`npm run preview`), and cover both `desktop` and `mobile` (`Pixel 5`) projects — several tests branch on `.nav-toggle` visibility to handle the mobile burger menu.

## CI/CD

[.github/workflows/deploy_to_ynh.yml](.github/workflows/deploy_to_ynh.yml): on push to `main`, a `quality` job runs lint → unit tests → build → Playwright e2e (chromium), then a `deploy` job SFTPs `dist/` to the YunoHost server via `lftp mirror`. There is no separate staging environment — pushing to `main` deploys to production once quality gates pass.
