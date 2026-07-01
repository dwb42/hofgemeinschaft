# Current State

Stand: 2026-07-01

## Product Scope

The repository contains V1 of the website for **Hof-Lebensgemeinschaft Hamburg**. The public positioning is:

> Wir suchen Menschen und einen Hof für eine neue Hof-Lebensgemeinschaft im Hamburger Umland.

The website addresses two audiences:

- people who may want to co-found the Hof-Lebensgemeinschaft
- Hof owners or people who know a suitable Hof

The project tone is warm, direct, grounded, northern German and professional. It should not read as a startup landing page, commune page, real estate sales page or esoteric retreat site.

## Routes

The current public routes are:

- `/` - home page
- `/mitgruenden` - co-founding page
- `/hof-gesucht` - Hof search page
- `/kontakt` - contact page

There are placeholder footer links for Impressum and Datenschutz, but no dedicated pages for them yet.

## Contact Model

V1 has no forms and no data persistence. Contact is intentionally handled only through:

- phone
- WhatsApp
- email

The contact placeholders are centralized in `apps/web/src/config/siteConfig.ts`:

- `[TELEFONNUMMER]`
- `[WHATSAPP-LINK]`
- `[E-MAIL-ADRESSE]`

The UI renders these as `tel:`, WhatsApp URL and `mailto:` links.

## Data Model

There is currently no active data model and no database logic.

`apps/server/src/db/README.md` reserves a future location for SQLite integration. Until that is implemented, the site is static and the server stores no data.

## Frontend State

The frontend is React + TypeScript + Vite with React Router.

Long-term editing locations:

- page content and SEO: `apps/web/src/content/pages.ts`
- navigation, footer links and contact config: `apps/web/src/config/siteConfig.ts`
- image imports: `apps/web/src/config/images.ts`
- global styling: `apps/web/src/styles/global.css`
- route components: `apps/web/src/routes/`

The header uses a typographic wordmark. Generated logo PNGs exist for review but are not wired into the header.

## Backend State

The backend is Node.js + Express + TypeScript.

Current server behavior:

- `GET /health` returns service health JSON
- production server serves `apps/web/dist`
- catch-all serves `index.html` for React Router
- no API routes for forms or persistence exist

## Image Assets

The current website uses generated bitmap image assets stored in `apps/web/src/assets/images/`:

- `hero-desktop.jpg`
- `hero-mobile.jpg`
- `mitgruenden-hero.jpg`
- `hof-gesucht-hero.jpg`
- `gemeinschaft-tafel.jpg`
- `arbeiten-werkstatt.jpg`
- `kinder-hofleben.jpg`
- `hof-region.jpg`
- `kontakt-detail.jpg`

Logo review assets are stored in `apps/web/src/assets/brand/`:

- `logo-option-b.png`
- `logo-option-c.png`

There are no simple placeholder images in the current website.

## QA and Review Artifacts

Implementation QA screenshots live in `qa/screenshots/`.

The current design review screenshot package lives in `qa/design-review/current/`. It includes above-the-fold and fullpage screenshots for all current routes and required review breakpoints, plus mobile menu-open and desktop header-state screenshots.

Regenerate design review screenshots with:

```bash
npm run screenshots:design-review
```

The script defaults to `http://localhost:4173`. Override with `DESIGN_REVIEW_BASE_URL` if needed.
