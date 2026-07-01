# QA Summary

Date: 2026-07-01

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
