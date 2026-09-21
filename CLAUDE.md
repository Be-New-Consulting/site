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

- **Three routes**: `/` (Home), `/parcours` (Parcours) and `/mentions-legales` (MentionsLegales), wired in [src/App.tsx](src/App.tsx) via `react-router-dom`'s `BrowserRouter`. `Home` sections also serve as in-page anchors (`/#realisations`, `/#contact`, etc.) linked from `Nav`/`Footer`/CTAs.
- **Static prerendering without SPA fallback**: the site is hosted on YunoHost with no server-side routing fallback. After `vite build`, [scripts/prerender.js](scripts/prerender.js) copies `dist/index.html` to `dist/<route>/index.html` (with page-specific `<title>`/meta/canonical swapped in) so a direct hit on the route works. **Any new top-level route must be added to the `pages` array in `scripts/prerender.js`**, or direct navigation/refresh to it will 404 on the real server.
- **`prerender.js` is the single source for routes and domain**: it also generates `dist/sitemap.xml` and `dist/robots.txt` from the same `pages` array and `base` constant (there are deliberately no static copies in `public/`, which had already drifted out of sync). Changing the site's domain is therefore a one-line edit to `base`. Canonical, `og:url` and sitemap entries all use a trailing slash, matching what the server actually serves — `/parcours` 301s to `/parcours/`.
- **Content/markup separation**: all editorial copy lives in [src/data/content.ts](src/data/content.ts) (Home), `src/data/parcours.ts` (Parcours) and `src/data/legal.ts` (MentionsLegales) as typed const objects; components (`src/pages/*.tsx`) only map over this data and render markup. Edit copy in `data/`, not inline in JSX.
- **Legal page renders only filled fields**: in `src/data/legal.ts`, a row whose `value` is `""` is filtered out rather than shown empty — so an incomplete legal mention is never published. `Capital social` and `RCS` are currently empty and still need filling. An assertion in `src/__tests__/App.test.tsx` guards this behaviour.
- **Self-hosted fonts**: Inter (variable, `latin` + `latin-ext`) lives in `public/fonts/`, declared in [src/styles/fonts.css](src/styles/fonts.css) which `global.css` imports first. The site makes **zero third-party requests** — do not reintroduce the Google Fonts `<link>`, it would send visitor IPs to Google and contradict the privacy claim made on `/mentions-legales`.
- **Footer links**: `src/components/Footer.tsx` renders an href starting with `/` as a react-router `<Link>` and anything else as an external `<a target="_blank">`. Add internal links to `footer.links` with a leading slash and they behave correctly.
- **Hash-scroll behavior**: [src/hooks/useHashScroll.ts](src/hooks/useHashScroll.ts) handles both `window.scrollTo(0,0)` on plain route changes and smooth-scrolling to `#id` on hash links, retrying via `requestAnimationFrame` + a timeout fallback since the target element may not be mounted yet right after a route change (relevant when a hash link points from `/parcours` to a `/#section` on Home).
- **Styling**: CSS custom properties defined once in [src/styles/variables.css](src/styles/variables.css) (dark theme only — colors, spacing, typography scale), consumed by per-component/page CSS files (`Nav.css`, `Home.css`, etc.) and shared layout primitives in `src/styles/components.css` (`.section`, `.page-container`, `.grid-3`, `.card`, `.badge`, `.btn`, ...). Prefer the existing tokens/utility classes over new ad hoc values.
- **Nav accessibility**: mobile nav links must stay non-focusable when the burger menu is closed (`tabIndex={open ? 0 : -1}` in [src/components/Nav.tsx](src/components/Nav.tsx)) — this is asserted by the e2e test `mobile menu links not focusable when closed` in [e2e/navigation.spec.ts](e2e/navigation.spec.ts). Don't remove that attribute without also updating the test.
- **OG image**: `scripts/generate-og-image.js` renders `public/og-image.png` from an inline SVG via `sharp`; it's a manual/one-off script (not wired into `npm run build`), re-run it if hero copy or brand colors change.

## Testing

- Unit tests (Vitest + React Testing Library, jsdom) live in `src/__tests__/`, query by rendered French text/roles, and generally assert content presence rather than styling.
- E2E tests (Playwright) live in `e2e/`, run against `http://localhost:4173` (`npm run preview`), and cover both `desktop` and `mobile` (`Pixel 5`) projects — several tests branch on `.nav-toggle` visibility to handle the mobile burger menu.

## CI/CD

[.github/workflows/deploy_to_ynh.yml](.github/workflows/deploy_to_ynh.yml): on push to `main`, a `quality` job runs lint → unit tests → build → Playwright e2e (chromium), then a `deploy` job SFTPs `dist/` to the YunoHost server via `lftp mirror -R --delete`. There is no separate staging environment — pushing to `main` deploys to production once quality gates pass.

The `--delete` matters: without it, files dropped from a build stayed served forever (old hashed bundles were still returning 200 weeks later). It also means **everything under the remote `/www/` is owned by the build** — never drop a file there by hand expecting it to survive.

**Ongoing project — this repo is becoming the institutional site.** `benew-consulting.com` currently runs WordPress on the same YunoHost server; the plan is to build the full site here, then remove WordPress and move this app to the root domain with `yunohost app change-url` (the SFTP target is `/var/www/my_webapp/www/`, independent of the domain, so the CI needs no change). Until that cutover, `competences.benew-consulting.com` doubles as the review environment — which is why no separate staging was set up.
