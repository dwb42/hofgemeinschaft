# Hofgemeinschaft bei Hamburg — Website

Einseitige, statische Website für das Projekt "Hofgemeinschaft bei Hamburg"
(Hof-Lebensgemeinschaft im Hamburger Umland, sucht Mitgründer und Immobilie).

**Vor jeder Änderung dieses Dokument lesen.** Es ist die verbindliche
Referenz für das Design-System.

## Aufbau

- `index.html` — die komplette Website. Ein einziges File: Markup, CSS und
  JS inline. Kein Framework, kein Build-Step, keine Dependencies außer
  Google Fonts. Direkt deploybar (jeder Static-Host, GitHub Pages, Netlify).
- `202608 Hofgemeinschaft bei Hamburg.docx` — Quelldokument. Der gesamte
  Text der Website stammt hieraus. Bei inhaltlichen Änderungen ist das
  Dokument die Quelle der Wahrheit.
- `design/` — Quellen des Design-System-Canvas (`*.dc.html`, `canvas.json`).
  Nur für die Canvas-Ansicht nötig, nicht für die Website selbst.

Struktur der Seite: Eyebrow-Zeile → Hero → Inhaltsverzeichnis → 19 Kapitel
(`<section class="chapter" id="sNN">`) → Kontaktband (dunkel, mit
Copy-Buttons) → Fußzeile.

## Design-System "Graphit"

Monochrom, bewusst ohne Akzentfarbe. Kontrast trägt die Hierarchie, nicht
Farbe. Haltung: reduziert, präzise Typografie, präzise Abstände,
Bauhaus/Architekt statt ländlich-earthy. Bilder nur sparsam.

### Farben

| Token | Wert | Verwendung |
|---|---|---|
| `--bg` | `#F1F1F0` | Seitenhintergrund |
| `--ink` | `#1A1A1A` | Fließtext, Überschriften, Kontaktband-Hintergrund |
| `--ink-2` | `#3A3A3A` | Lead-Absätze |
| `--ink-soft` | `#6B6B6B` | Eyebrow, Nummerierung, Sekundäres |
| `--line` | `#D4D4D2` | Trennlinien, Rahmen |

Keine weiteren Farben einführen. Auf dem dunklen Kontaktband: Text `#D6D6D5`,
Sekundäres `#A6A6A5`, Linien `#5A5A59`.

### Typografie

Zwei Schriften: **Archivo** (Sans, 400/500/600/700) und **IBM Plex Mono**
(400/500). Mono ausschließlich für Eyebrows, Kapitelnummern und Fußzeile —
immer `uppercase` mit `letter-spacing: 0.06–0.08em`.

| Element | Desktop | Mobile (≤640px) |
|---|---|---|
| `h1` | 48 / 1.1 / 600 | 32 / 1.15 / 600 |
| `.lead` | 20 / 1.55 / 400 | 17 / 1.5 / 400 |
| `.chapter h2` | 25 / 1.28 / 600 | 21 / 1.3 / 600 |
| `.chapter p` | 17 / 1.7 / 400 | 16 / 1.65 / 400 |
| `.kontakt h2` | 34 / 1.2 / 600 | 26 / 1.2 / 600 |
| `.toc-title` | 15 / 1.4 / 400 | unverändert |
| Eyebrow / `.num` | 12 / 1.4 / 500 Mono | unverändert |

Listen (`.chapter ul`): kein Browser-Bullet, stattdessen ein 4x4px-Punkt in
`--ink-soft`, `gap: 12px` zum Text. Schrift wie `.chapter p` (17/1.7 Desktop,
16/1.65 Mobile).

### Abstände — 4px-Basis

**Jeder** Wert für `padding`, `margin` und `gap` ist ein Vielfaches von 4:
4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 96. Keine Ausnahmen. Das ist
testbar und wird getestet (siehe unten).

### Layout

`.wrap` ist der einzige Träger des seitlichen Randes:
`max-width: 720px; margin: 0 auto; padding: 0 32px` — mobil `0 20px`.
Ein einziger Breakpoint bei **640px**.

## Zwei Fallen — hier ging es schon zweimal schief

**1. Kein `padding`-Shorthand auf Elementen, die `.wrap` tragen.**
`<header class="hero wrap">` mit `.hero { padding: 24px 0 48px }` setzt den
seitlichen Rand auf 0, weil das Shorthand alle vier Seiten überschreibt.
Immer Longhands verwenden:

```css
.hero { padding-top: 24px; padding-bottom: 48px; }   /* richtig */
.hero { padding: 24px 0 48px; }                       /* falsch */
```

**2. Element-Selektoren verlieren gegen `.wrap`.**
`footer { padding: 32px 32px }` greift nie, weil `.wrap` als Klasse höher
spezifiziert ist. Auf `footer.wrap { ... }` erhöhen.

**Faustregel:** wer `.wrap` trägt, setzt ausschließlich vertikale
Longhands. Trennlinien gehören auf ein *inneres* Element (`.toc-body`,
`.chapter`), damit sie mit dem Text einrücken statt randlos durchzulaufen.

## Änderungen prüfen

Nach jeder CSS- oder Layout-Änderung diese drei Dinge verifizieren
(Playwright, Chromium unter `/opt/pw-browsers/chromium`):

1. **Linke Kante** — alle Textelemente (Eyebrow, h1, Lead, INHALT,
   TOC-Items, Kapitelnummer, h2, Fließtext, Kontakt, Fußzeile) teilen sich
   bei jeder Breite exakt dieselbe linke Kante; der rechte Abstand ist
   spiegelgleich.
2. **Trennlinien** — laufen bündig mit dem Text, nicht von Kante zu Kante.
3. **4px-Raster** — jedes Element × jede Abstands-Eigenschaft
   (`padding*`, `margin*`, `gap`) ist durch 4 teilbar. Muss 0 Treffer
   ergeben.

Breiten testen: 360, 390, 430, 640, 641, 768, 1000, 1440.

## Textkonventionen

- Deutsch, Anrede "Du".
- **Kein Geviertstrich (—).** Immer Bindestrich (-).
- Kapitelüberschriften und Reihenfolge folgen dem Quelldokument.
- Inhaltsverzeichnis und Kapitel müssen synchron bleiben: 20 Einträge,
  `id="sNN"` passend zu `href="#sNN"`.

## Deployment

```bash
git add index.html && git commit && git push origin main
```

Repo: `github.com/dwb42/hofgemeinschaft` (Branch `main`).
Remote-URL: `git@github.com:dwb42/hofgemeinschaft.git` - Auth über den persönlichen SSH-Key (`~/.ssh/id_ed25519_github_dwb42`, per `Host github.com`
in `~/.ssh/config`), kein separater Deploy Key.
