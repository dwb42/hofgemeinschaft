# Hof-Lebensgemeinschaft Hamburg

V1 website for **Hof-Lebensgemeinschaft Hamburg**.

## Structure

```text
apps/
  web/      React + TypeScript + Vite frontend
  server/   Node.js + Express + TypeScript production server
qa/
  screenshots/
  design-review/
```

The server exposes `GET /health` and serves the built frontend from `apps/web/dist` in production. `apps/server/src/db/README.md` is reserved for a later SQLite integration. V1 has no contact forms and no data persistence.

Additional project documentation:

- `CURRENT_STATE.md` documents the current product and implementation state.
- `ARCHITECTURE.md` documents the long-term technical structure and conventions.
- `hof-lebensgemeinschaft-complete-concept-and-goal.md` is the original product and content specification.

## Commands

```bash
npm install
npm run dev
npm run build
npm start
npm run typecheck
npm run screenshots:design-review
```

Local production URL after `npm run build && npm start`:

```text
http://localhost:4173
```

## Contact Data

Edit phone, WhatsApp and email in:

```text
apps/web/src/config/siteConfig.ts
```

Current placeholders:

- Telefon: `[TELEFONNUMMER]`
- WhatsApp: `[WHATSAPP-LINK]`
- E-Mail: `[E-MAIL-ADRESSE]`

V1 intentionally has no contact form. Contact links are rendered as `tel:`, WhatsApp URL and `mailto:`.

## Content, Routes and SEO

The public routes are:

- `/`
- `/mitgruenden`
- `/hof-gesucht`
- `/kontakt`

Central page content and route SEO metadata live in:

```text
apps/web/src/content/pages.ts
```

Navigation, footer links, contact placeholders and the site claim live in:

```text
apps/web/src/config/siteConfig.ts
```

The four route components live in `apps/web/src/routes/`.

## Styling and UX Structure

Styling is centralized in:

```text
apps/web/src/styles/global.css
```

The CSS uses custom properties in `:root` for the color system, layout width, radius and shadow tokens. The current responsive breakpoints are implemented with media queries at `900px`, `700px` and `390px`.

Major UI building blocks:

- Header: `apps/web/src/components/Header.tsx`
- Hero: `apps/web/src/sections/Hero.tsx`
- Entry cards: `apps/web/src/routes/Home.tsx` with `.entry-card` styles
- Content sections: `apps/web/src/sections/TextSection.tsx`
- Checklists: `apps/web/src/sections/ChecklistSection.tsx`
- Contact blocks: `apps/web/src/sections/ContactBlock.tsx`
- Footer: `apps/web/src/components/Footer.tsx`

## Image Assets

Generated assets are stored in:

```text
apps/web/src/assets/images/
apps/web/src/assets/brand/
```

Included website images:

- `hero-desktop.jpg`
- `hero-mobile.jpg`
- `mitgruenden-hero.jpg`
- `hof-gesucht-hero.jpg`
- `gemeinschaft-tafel.jpg`
- `arbeiten-werkstatt.jpg`
- `kinder-hofleben.jpg`
- `hof-region.jpg`
- `kontakt-detail.jpg`

Included logo review assets:

- `logo-option-b.png`
- `logo-option-c.png`

The header intentionally uses the typographic wordmark from the concept. SVG logo variants were not produced; the PNG logo options are stored for later review.

## QA

Verified breakpoints:

- `375 x 812`
- `390 x 844`
- `768 x 1024`
- `1024 x 768`
- `1440 x 900`

Screenshots are in:

```text
qa/screenshots/
```

QA covered production build, Express static serving, `/health`, all four routes, route SEO title/meta descriptions, contact links, absence of forms, image loading, mobile hero source, scroll header state, mobile drawer, horizontal overflow, browser console errors and screenshots.

## Design Review Screenshots

The current design review package is generated with Playwright and stored in:

```text
qa/design-review/current/
```

It contains above-the-fold and fullpage screenshots for all four routes at:

- `390 x 844`
- `768 x 1024`
- `1440 x 900`
- `375 x 812`
- `430 x 932`
- `1280 x 800`
- `1728 x 1117`

It also includes mobile menu-open captures for the home page and desktop captures for the transparent hero header and scrolled solid header.

Regenerate the package against the production server:

```bash
npm run build
npm start
npm run screenshots:design-review
```

For a different running URL:

```bash
DESIGN_REVIEW_BASE_URL=http://localhost:5174 npm run screenshots:design-review
```
