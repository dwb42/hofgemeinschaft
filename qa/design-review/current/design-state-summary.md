# Design State Summary

Stand: 2026-07-01

## 1. Technologie

- Monorepo mit npm workspaces.
- Frontend: React, TypeScript, Vite, React Router.
- Backend/Engine-Server: Node.js, Express, TypeScript.
- Screenshot-Tooling: Playwright via `@playwright/test`.

## 2. CSS- und Styling-Struktur

- Die Website nutzt eine zentrale globale CSS-Datei: `apps/web/src/styles/global.css`.
- Es gibt keine schwere UI-Library.
- Komponenten erhalten semantische Klassennamen wie `.site-header`, `.hero`, `.entry-card`, `.contact-block`, `.site-footer`.

## 3. Zentrale Farben

- Zentrale Farbwerte und Layout-Variablen stehen in `apps/web/src/styles/global.css` im `:root`-Block.
- Wichtige CSS Custom Properties: `--bg`, `--bg-soft`, `--paper`, `--ink`, `--muted`, `--green`, `--green-2`, `--brick`, `--sand`, `--line`, `--shadow`, `--max`, `--radius`.

## 4. Fontgrößen und Typografie

- Die globale Font-Familie steht im `:root`-Block in `apps/web/src/styles/global.css`.
- Headlines, Hero-Texte, Fließtexte, Buttons und Navigation werden ebenfalls in `global.css` definiert.
- Die größten typografischen Regeln liegen bei `.hero h1`, `.hero:not(.hero--home) h1`, `.hero-text`, `h2`, `p`, `.wordmark` und `.footer-brand`.

## 5. Breakpoints

- Breakpoints sind in `apps/web/src/styles/global.css` definiert.
- Aktuelle Media Queries:
  - `@media (max-width: 900px)`
  - `@media (max-width: 700px)`
  - `@media (max-width: 390px)`

## 6. Implementierungsorte

- Header: `apps/web/src/components/Header.tsx`
- Hero: `apps/web/src/sections/Hero.tsx`
- Cards/Einstiegskarten: `apps/web/src/routes/Home.tsx` mit Styles in `global.css` unter `.entry-grid` und `.entry-card`
- Text- und Bildsektionen: `apps/web/src/sections/TextSection.tsx`
- Checklisten: `apps/web/src/sections/ChecklistSection.tsx`
- Kontaktblöcke: `apps/web/src/sections/ContactBlock.tsx`
- Footer: `apps/web/src/components/Footer.tsx`
- Seitenrouten: `apps/web/src/routes/`
- Zentrale Inhalte und SEO: `apps/web/src/content/pages.ts`
- Kontakt- und Navigationskonfiguration: `apps/web/src/config/siteConfig.ts`

## 7. Aktuell eingebundene Bildassets

Die Websitebilder werden in `apps/web/src/config/images.ts` importiert und kommen aus `apps/web/src/assets/images/`:

- `hero-desktop.jpg`
- `hero-mobile.jpg`
- `mitgruenden-hero.jpg`
- `hof-gesucht-hero.jpg`
- `gemeinschaft-tafel.jpg`
- `arbeiten-werkstatt.jpg`
- `kinder-hofleben.jpg`
- `hof-region.jpg`
- `kontakt-detail.jpg`

Logo-Review-Assets liegen in `apps/web/src/assets/brand/`:

- `logo-option-b.png`
- `logo-option-c.png`

## 8. Echte Bilder oder Platzhalter

- Aktuell sind generierte Websitebilder eingebunden, keine einfachen Platzhalter.
- Der Header nutzt derzeit bewusst eine typografische Wortmarke statt eines Logo-Bildes.

## 9. Lokal starten

```bash
npm install
npm run build
npm start
```

Lokale URL:

```text
http://localhost:4173
```

Alternativ fuer Entwicklung:

```bash
npm run dev
```

## 10. Screenshot-Script erneut ausfuehren

Das Screenshot-Script erwartet eine laufende Website. Standard-URL ist `http://localhost:4173`.

```bash
npm run screenshots:design-review
```

Falls eine andere lokale URL genutzt werden soll:

```bash
DESIGN_REVIEW_BASE_URL=http://localhost:5174 npm run screenshots:design-review
```

Die Screenshots werden nach `qa/design-review/current/` geschrieben.

## 11. Aktuelles Screenshot-Paket

Das aktuelle Paket enthaelt 65 PNG-Dateien:

- 4 Seiten
- 7 Viewports
- je Seite und Viewport ein Above-the-fold-Screenshot und ein Fullpage-Screenshot
- 3 Mobile-Screenshots der Startseite mit offenem Menu
- 3 Desktop-Screenshots der Startseite im transparenten Hero-Header-Zustand
- 3 Desktop-Screenshots der Startseite mit gescrolltem hellem Header
