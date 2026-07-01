# Hof-Lebensgemeinschaft Hamburg

V1 website for **Hof-Lebensgemeinschaft Hamburg**.

## Structure

```text
apps/
  web/      React + TypeScript + Vite frontend
  server/   Node.js + Express + TypeScript production server
qa/
  screenshots/
```

The server exposes `GET /health` and serves the built frontend from `apps/web/dist` in production. `apps/server/src/db/README.md` is reserved for a later SQLite integration. V1 has no contact forms and no data persistence.

## Commands

```bash
npm install
npm run dev
npm run build
npm start
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
