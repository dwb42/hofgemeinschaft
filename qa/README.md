# QA Summary

Date: 2026-07-01

## Implementation QA

Production build:

```text
npm run build
```

Result: passed.

Production server:

```text
npm start
```

Result: running on `http://localhost:4173`.

Health route:

```text
GET /health
```

Result:

```json
{"ok":true,"service":"hof-lebensgemeinschaft-hamburg"}
```

Automated browser QA checked all routes at all required breakpoints:

- `/`
- `/mitgruenden`
- `/hof-gesucht`
- `/kontakt`

Breakpoints:

- `375 x 812`
- `390 x 844`
- `768 x 1024`
- `1024 x 768`
- `1440 x 900`

Result: 20 route/breakpoint combinations checked, 20 screenshots written, 0 failures.

Screenshots:

```text
qa/screenshots/
```

Checks included:

- no browser console errors
- all routes return successfully
- no forms present
- `tel:`, WhatsApp and `mailto:` contact links present
- images load
- mobile start hero uses `hero-mobile`
- no horizontal overflow
- header is transparent at top and solid after scroll
- mobile menu opens and closes

## Design Review Screenshots

The current design review package is stored in:

```text
qa/design-review/current/
```

It was generated with:

```bash
npm run screenshots:design-review
```

The screenshot script is:

```text
qa/design-review/create-screenshots.mjs
```

The script captures:

- `/`
- `/mitgruenden`
- `/hof-gesucht`
- `/kontakt`

At these viewport sizes:

- `390 x 844`
- `768 x 1024`
- `1440 x 900`
- `375 x 812`
- `430 x 932`
- `1280 x 800`
- `1728 x 1117`

Per route and viewport, the package includes:

- above-the-fold screenshot
- fullpage screenshot

Additional home page captures:

- mobile menu open at `375 x 812`, `390 x 844` and `430 x 932`
- desktop transparent hero header at `1280 x 800`, `1440 x 900` and `1728 x 1117`
- desktop scrolled solid header at `1280 x 800`, `1440 x 900` and `1728 x 1117`

The package currently contains 65 PNG screenshots plus `design-state-summary.md`.

The script expects a running site and defaults to:

```text
http://localhost:4173
```

Override the base URL when needed:

```bash
DESIGN_REVIEW_BASE_URL=http://localhost:5174 npm run screenshots:design-review
```
