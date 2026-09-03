# Hofgemeinschaft bei Hamburg — Website

Einseitige, statische Website für das Projekt "Hofgemeinschaft bei Hamburg"
(Hof-Lebensgemeinschaft im Hamburger Umland, sucht Mitgründer und Immobilie).

**Vor jeder Änderung dieses Dokument lesen.** Es ist die verbindliche
Referenz für das Design-System.

## Aufbau

- `index.html` — die Hauptseite.
- `bauernhof-gesucht.html` — Unterseite: Infoblatt für Hofbesitzer und
  Makler. Der Inhalt stammt aus `assets/Hofgemeinschaft-Bauernhof-gesucht.pdf`.
- `style.css` — **das Design-System, gemeinsam für beide Seiten.** Farben,
  Typo und Abstände stehen ausschließlich hier. Nie CSS in eine der HTML-
  Dateien zurückholen, sonst gibt es zwei Wahrheiten.
- `script.js` — das gesamte JavaScript, ebenfalls für beide Seiten:
  Copy-Buttons und die Modal-Logik. Die Modal-Logik hält sich selbst
  zurück, wenn es auf der Seite keinen `a[data-sheet]` gibt.
- `assets/` — Favicons, OG-Image und das PDF zum Download.
- Ursprüngliches Quelldokument (`202608 Hofgemeinschaft bei Hamburg.docx`) ist
  vollständig in `index.html` übernommen und liegt nicht mehr im Repo (lokal
  archiviert). `index.html` ist ab jetzt die Quelle der Wahrheit für den Text.
- `design/` — Quellen des Design-System-Canvas (`*.dc.html`, `canvas.json`).
  Nur für die Canvas-Ansicht nötig, nicht für die Website selbst.

Kein Framework, kein Build-Step, keine Dependencies außer Google Fonts.
Direkt deploybar auf jedem Static-Host.

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
Immer **beide** Seiten prüfen — sie teilen sich `style.css`, eine Änderung
dort wirkt auf beide.

## Die Unterseite als Modal

`bauernhof-gesucht.html` ist eine **echte, eigenständige Seite** und
gleichzeitig der Inhalt des Modals auf der Hauptseite. Es gibt nur diese
eine Quelle — nie den Inhalt in `index.html` duplizieren.

- Beim Klick auf den Hero-Hinweis (`a[data-sheet]`) lädt ein kleines Skript
  in `index.html` die Unterseite per `fetch`, hebt das `.sheet`-Element
  heraus und zeigt es als Modal. Die URL wechselt per `history.pushState`
  auf `bauernhof-gesucht.html`, ist also kopier- und teilbar.
- Schließen (✕, Escape, Klick auf den Hintergrund) geht per `history.back()`
  zurück — die Hauptseite bleibt dabei an derselben Scroll-Position stehen,
  weil sie nie verlassen wurde.
- Beim Direktaufruf der URL erscheint dieselbe Karte als vollwertige Seite;
  das ✕ ist dort ein normaler Link auf `index.html`.
- **Ohne JavaScript, bei `file://` oder wenn `fetch` scheitert**, folgt der
  Link ganz normal der Seite. Das ist Absicht und muss so bleiben.

Die Copy-Buttons hängen deshalb an einem delegierten Listener am `document`,
nicht an einer Schleife über die vorhandenen Buttons: die Buttons im Modal
entstehen erst zur Laufzeit. Wer das auf eine Schleife zurückbaut, macht die
Buttons im Modal still kaputt.

Beim lokalen Testen: `python3 -m http.server` verwenden. Per Doppelklick
geöffnet (`file://`) blockiert der Browser `fetch`, dann navigiert der Link
statt das Modal zu öffnen — das ist kein Fehler.

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
