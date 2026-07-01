# Hof-Lebensgemeinschaft Hamburg – vollständiges Website-Konzept und Coding-Agent-Goal

Stand: Website V1  
Projektname: **Hof-Lebensgemeinschaft Hamburg**  
Ziel: vollständige Umsetzung einer professionellen Website inklusive Bildgenerierung, technischer Full-Stack-Grundstruktur und QA über mehrere Breakpoints.

---

## 1. Zielbild des Projekts

Es soll eine professionelle, warme, norddeutsche Projektwebsite entstehen für eine neue **Hof-Lebensgemeinschaft im Hamburger Umland**.

Die Website soll zwei Zielgruppen ansprechen:

1. **Potenzielle Mitgründerinnen und Mitgründer**  
   Menschen, Familien, Paare oder Singles, die Lust haben, eine Hof-Lebensgemeinschaft von Anfang an mit aufzubauen, mitzudenken, mitzusuchen und später vielleicht dort zu leben.

2. **Hofeigentümerinnen und Hofeigentümer / Hinweisgeber**  
   Menschen, die einen Hof, Resthof, Ferienhof, ein Gutshaus oder Hofensemble besitzen oder einen passenden Ort kennen. Makler sind indirekt mitgemeint, werden aber nicht explizit als Hauptzielgruppe angesprochen.

Die Website soll **nicht bedürftig, akquisig oder beliebig** wirken. Sie soll klar machen:

> Wir suchen Menschen und einen Hof. Aber nicht irgendwen und nicht irgendeinen Ort. Es muss menschlich, räumlich, wirtschaftlich und vom Lebensgefühl her passen.

---

## 2. Zentrale Positionierung

Die zentrale Headline der Startseite lautet:

> **Wir suchen Menschen und einen Hof für eine neue Hof-Lebensgemeinschaft im Hamburger Umland.**

Subline:

> **Ein Ort zum Wohnen, Leben und Arbeiten. Weit genug draußen, dass man die Vögel hört. Nah genug an Hamburg, dass Freunde, Familie und Alltag erreichbar bleiben.**

---

## 3. Tonalität

Die Website soll so klingen:

- norddeutsch
- direkt
- klar
- warm
- selbstbewusst
- bodenständig
- hochwertig
- nicht anbiedernd
- nicht esoterisch
- nicht sozialpädagogisch
- nicht investorenmäßig
- mit Kante
- mit Humor
- mit Lebensfreude

Unterschiedliche Tonalität nach Zielgruppe:

### Startseite
Klar, warm, professionell, orientierend.

### Seite „Mitgründen“
Direkter, mehr Kante, mehr Rohtext-Energie, stärker filternd.

### Seite „Hof gesucht“
Respektvoller, ruhiger, vertrauensbildender, aber weiterhin klar und nicht schleimig.

---

## 4. Abgrenzung

Auf der Startseite ruhig formulieren:

> Wir suchen keinen Aussteigerort, keine Kommune und kein Investorenprojekt. Sondern einen bodenständigen, lebendigen Hof für Menschen, die Verantwortung übernehmen und gerne etwas aufbauen.

Auf der Seite „Mitgründen“ kantiger formulieren:

> Kein Dauerplenum, keine Szene, kein Hof als romantische Kulisse. Wir suchen Menschen mit Herz, Hirn, Humor und Tatkraft — und mit Lust auf echtes Hofleben.

Wichtig: Keine abwertenden Begriffe wie „Öko-Fuzzis“, „Eso-Onkel“ etc. verwenden. Die Haltung darf klar sein, aber nicht unnötig spöttisch.

---

## 5. Ansprache

- Potenzielle Mitgründerinnen und Mitgründer werden konsequent mit **Du** angesprochen.
- Hofeigentümerinnen und Hofeigentümer werden konsequent mit **Sie** angesprochen.
- Hinweisgeber werden je nach Kontext neutral oder höflich angesprochen.

Auf der Startseite dürfen beide Ansprachen nebeneinanderstehen:

- **Du möchtest mitgründen?**
- **Sie haben oder kennen einen Hof?**

---

## 6. Kontaktprozess

Es gibt **kein Kontaktformular**.

Kontakt läuft über:

- Telefon
- WhatsApp
- E-Mail

Platzhalter:

- Telefon: `[TELEFONNUMMER]`
- WhatsApp: `[WHATSAPP-LINK]`
- E-Mail: `[E-MAIL-ADRESSE]`

Diese Kontaktdaten erscheinen:

- auf der Kontaktseite prominent
- unten auf der Seite „Mitgründen“
- unten auf der Seite „Hof gesucht“
- im Kontakt-Teaser auf der Startseite

Auf Mobile müssen Telefon und WhatsApp direkt antippbar sein:

- Telefon-Link: `tel:[TELEFONNUMMER]`
- WhatsApp-Link: `[WHATSAPP-LINK]`
- E-Mail-Link: `mailto:[E-MAIL-ADRESSE]`

---

## 7. Technologisches Zielbild

Auch wenn die Website V1 inhaltlich eher statisch ist, soll sie technisch so aufgebaut werden, dass sie später zu einer interaktiven App ausgebaut werden kann.

### Wenn der Ordner leer ist oder noch kein passender Stack existiert
Bitte eine Full-Stack-Grundstruktur aufbauen mit:

- **Frontend:** React + TypeScript + Vite
- **Routing:** React Router
- **Styling:** eigene CSS-Struktur mit CSS Custom Properties / CSS Modules oder sauberem globalem CSS; keine schwere UI-Library nötig
- **Backend / Engine-Server:** Node.js + Express + TypeScript
- **Datenbank-Perspektive:** Struktur vorbereiten, damit später SQLite angebunden werden kann; aktuell keine aktive Datenbanklogik erforderlich
- **Deployment-Ziel:** als Node-App baubar und startbar; Server kann das gebaute Frontend ausliefern

### Empfohlene Struktur

```text
project-root/
  package.json
  README.md
  apps/
    web/
      package.json
      src/
        main.tsx
        App.tsx
        routes/
        components/
        sections/
        content/
        config/
        styles/
        assets/
          images/
          brand/
      public/
    server/
      package.json
      src/
        index.ts
        routes/
        config/
        db/
          README.md
```

Alternativ ist eine einfachere Struktur erlaubt, wenn sie im bestehenden Repo besser passt. Wichtig ist: React-Frontend und Express-Server sollen sauber getrennt, aber gemeinsam entwickelbar und später erweiterbar sein.

### Server-Anforderungen

- Express-Server mit Health-Route, z. B. `/health`
- Server soll im Production-Build die statischen Frontend-Dateien ausliefern können
- Catch-all auf `index.html` für React Router
- keine Formulare und keine Datenspeicherung implementieren
- optional zentrale Config für Kontaktinformationen bereitstellen

### Content-Strategie

Texte sollen nicht hart über viele Komponenten verstreut werden, sondern möglichst zentral pflegbar sein, z. B. in:

- `apps/web/src/content/pages.ts`
- `apps/web/src/config/siteConfig.ts`

Kontaktinformationen, Domain, SEO-Texte, Bildpfade und Navigationspunkte sollen zentral konfigurierbar sein.

---

## 8. Seitenstruktur

Die Website V1 besteht aus vier Hauptseiten:

1. **Start**
2. **Mitgründen**
3. **Hof gesucht**
4. **Kontakt**

Zusätzlich im Footer:

- Impressum als Platzhalterlink
- Datenschutz als Platzhalterlink

Keine separate Seite „Die Idee“ in V1. Die Idee wird auf der Startseite integriert.

---

## 9. Header / Navigation

### Desktop

- Header liegt initial transparent über dem Hero-Bild.
- Beim Scrollen wird der Header hell, fest/sticky und gut lesbar.
- Wortmarke links: **Hof-Lebensgemeinschaft Hamburg**
- Navigation rechts:
  - Start
  - Mitgründen
  - Hof gesucht
  - Kontakt
- Kein hervorgehobener Kontaktbutton im Header.
- Über Hero: helle Schrift, leichter Schatten oder Verlauf für Lesbarkeit.
- Beim Scrollen: warmweißer Hintergrund, dunkle Schrift, dezenter Schatten oder feine Linie.

### Mobile

- Kompakter Header mit Wortmarke und Menü-Icon.
- Navigation als Drawer/Menu.
- Menü mit denselben vier Punkten.
- Header darf den Hero nicht kaputtmachen.
- Menü muss hochwertig, ruhig und gut bedienbar sein.

---

## 10. Designrichtung

Die Website soll wirken:

- warm
- norddeutsch
- hochwertig
- bodenständig
- klar
- professionell
- großzügig

Sie soll nicht wirken wie:

- Biohof-Klischee
- Esoterik-Retreat
- Luxus-Landgut
- klassische Immobilienmakler-Seite
- Startup-Landingpage
- sterile Beratungswebsite

### Farbwelt

- warmes Weiß / Naturweiß
- dunkles Grün
- Erdtöne
- Holz-/Lehm-/Sandtöne
- Backsteinrot als dezenter Akzent
- dunkles Grau statt hartem Schwarz

### Typografie

- sehr gut lesbar
- großzügige Headlines
- ruhige, hochwertige Fließtexte
- keine verspielten Schriften
- keine zu technische SaaS-Ästhetik

### Layout

- großzügige Section-Abstände
- klare Leseführung
- hochwertige Cards
- gute mobile Spacing-Logik
- keine überladenen Abschnitte

---

## 11. Bildwelt allgemein

Die Bildwelt orientiert sich an einem warmen, leicht idealisierten, fotorealistischen, cinematic/illustrativen Stil:

- lebendig
- detailreich
- leicht idealisiert, aber nicht kitschig
- norddeutsche Hof-Atmosphäre
- Menschen dürfen klar erkennbar und von vorne sichtbar sein
- mehrere kleine Aktivitäten in einem Bild sind gut
- Gemeinschaft, Kinder, Garten, Werkstatt, Tiere, Natur und Hamburg-Nähe dürfen visuell mitschwingen
- insgesamt positiv, optimistisch und lebendig

### Wichtige Bildregeln

- Keine wichtigen Texte im Bild selbst.
- Kleine realistische Schilder, Wegweiser, Hofdetails oder Aushänge sind okay, aber ohne wichtige lesbare Botschaft.
- Keine KI-generierten Banner mit Projektbotschaften.
- Kein Logo/Text im Bild selbst.
- Keine Stockfoto-Ästhetik.
- Keine Yoga-/Retreat-/Selbsterfahrungs-Ästhetik.
- Keine Luxus-Landgut-Anmutung.
- Kein übertriebener Bauernhof-Kitsch.

---

## 12. Bildstrategie und Bildplatzierungen

### Kernlogik

- Hero + zentrale Kernbilder sollen wie dieselbe Hof-Welt wirken.
- Nebenbilder dürfen freier sein, aber im gleichen Stil bleiben.

### Startseiten-Hero

Es werden zwei separate Hero-Bilder erstellt:

1. `hero-desktop.jpg` – Querformat / Desktop
2. `hero-mobile.jpg` – Hochformat / Mobile

Wichtig:

- Mobile ist **kein Crop** des Desktopbilds.
- Mobile ist ein eigenes vertikales Bild mit eigener Komposition.
- Hamburg-Skyline soll im Hero klar erkennbar sein.
- Fokus bleibt auf Hofleben und Menschen.

### Geplante Bildassets

```text
apps/web/src/assets/images/hero-desktop.jpg
apps/web/src/assets/images/hero-mobile.jpg
apps/web/src/assets/images/mitgruenden-hero.jpg
apps/web/src/assets/images/hof-gesucht-hero.jpg
apps/web/src/assets/images/gemeinschaft-tafel.jpg
apps/web/src/assets/images/arbeiten-werkstatt.jpg
apps/web/src/assets/images/kinder-hofleben.jpg
apps/web/src/assets/images/hof-region.jpg
apps/web/src/assets/images/kontakt-detail.jpg
apps/web/src/assets/brand/logo-option-b.png
apps/web/src/assets/brand/logo-option-c.png
```

Falls die Bildgenerierung im Coding-Agent-Kontext nicht möglich ist, müssen zunächst hochwertige Platzhalter eingesetzt werden. Wenn Bildgenerierung möglich ist, sollen die folgenden Prompts genutzt und die generierten Bilder direkt an den vorgesehenen Pfaden gespeichert werden.

---

## 13. Bildgenerierungs-Prompts

Alle Bildprompts möglichst mit konsistenter Stilbeschreibung verwenden. Wenn das Bildtool Seeds, Style References oder Serienkonsistenz unterstützt, für alle Kernbilder dieselbe Stilreferenz / denselben Seed-Stil verwenden.

### Globale Stilbeschreibung für alle Websitebilder

Diese Stilbeschreibung am Anfang oder Ende jedes Prompts verwenden:

```text
Warm cinematic photorealistic illustration style, realistic but slightly idealized, inviting northern German countryside atmosphere, rich but tasteful details, natural warm light, modern editorial quality, no stock photo look, no luxury resort look, no spiritual retreat aesthetic, no exaggerated hippie commune aesthetic, grounded and authentic, high detail, coherent color palette with warm whites, dark greens, earth tones, wood, brick, soft natural contrast.
```

Negative Prompt / Ausschlüsse, sofern vom Tool unterstützt:

```text
No readable important text, no banners, no slogans, no distorted typography, no fake logo text, no watermark, no stock photo posing, no luxury villa, no yoga retreat, no fantasy castle, no exaggerated eco commune cliché, no creepy faces, no distorted hands, no extra limbs, no overly perfect influencer aesthetic, no urban downtown foreground.
```

---

### Bild 1: Startseite Hero Desktop

Dateiname: `hero-desktop.jpg`  
Format: Querformat, ca. 16:9 bis 21:9, ideal für vollbreiten Website-Hero.  
Funktion: emotionaler Wow-Einstieg auf Desktop.

```text
Create a wide cinematic hero image for a website about founding a new Hof-Lebensgemeinschaft near Hamburg, Germany. In the foreground: a beautiful northern German brick farmstead / Resthof / Hofensemble with a large courtyard, warm evening or late afternoon light, families with children, singles and couples gathered naturally, some sitting at a long wooden table, some gardening, some near a workshop, children playing, a few animals such as chickens and a dog, garden beds, old trees, meadow, wooden structures, tools, signs of real life and work. The atmosphere is lively, optimistic, grounded and authentic.

In the background, clearly visible but not dominating, show the Hamburg skyline on the horizon, recognizable with the Elbphilharmonie, Michel church tower and TV tower, suggesting that Hamburg is reachable but the place is rural. Optionally include a subtle regional train or S-Bahn line in the distance connecting countryside and city.

Composition: rich and slightly wimmelbild-like, many small details to discover, but still elegant and not chaotic. Leave a calmer darker/sky/landscape area on the left or lower-left side suitable for website text overlay. No important readable text in the image; small realistic farm signs are okay but should not contain legible slogans. No banners.

Warm cinematic photorealistic illustration style, realistic but slightly idealized, inviting northern German countryside atmosphere, rich but tasteful details, natural warm light, modern editorial quality, no stock photo look, no luxury resort look, no spiritual retreat aesthetic, no exaggerated hippie commune aesthetic, grounded and authentic, high detail, coherent color palette with warm whites, dark greens, earth tones, wood, brick, soft natural contrast.
```

---

### Bild 2: Startseite Hero Mobile

Dateiname: `hero-mobile.jpg`  
Format: Hochformat, 9:16 oder 4:5, eigenes Bild, kein Crop.  
Funktion: emotionaler Wow-Einstieg auf Smartphone.

```text
Create a vertical cinematic mobile hero image for a website about founding a new Hof-Lebensgemeinschaft near Hamburg, Germany. This should feel like the same visual world as the desktop hero, but composed specifically for a smartphone screen.

Foreground: warm, emotional focus on a northern German brick farm courtyard with a few clearly visible people: a family with children, one or two adults in conversation, children playing, maybe a dog or chickens, garden beds, a workshop door, old trees, warm natural light. The scene should feel alive, optimistic and grounded, not posed.

Midground: the farm buildings, courtyard, garden and open landscape. Background: the Hamburg skyline clearly visible but not dominating, with recognizable Elbphilharmonie, Michel church tower and TV tower on the horizon. The image should communicate: rural Hofleben, but Hamburg is still reachable.

Composition: strong vertical composition with a clear focal center. Keep enough calm dark/sky/landscape space in the upper or lower third so website headline, subline and buttons can be overlaid with a gradient. It must look impressive and emotional on a phone, not like a cropped desktop panorama. No important readable text, no banners, no slogans.

Warm cinematic photorealistic illustration style, realistic but slightly idealized, inviting northern German countryside atmosphere, rich but tasteful details, natural warm light, modern editorial quality, no stock photo look, no luxury resort look, no spiritual retreat aesthetic, no exaggerated hippie commune aesthetic, grounded and authentic, high detail, coherent color palette with warm whites, dark greens, earth tones, wood, brick, soft natural contrast.
```

---

### Bild 3: Mitgründen Hero / Kernbild

Dateiname: `mitgruenden-hero.jpg`  
Format: Querformat 16:9.  
Funktion: Seite „Mitgründen“, stärker menschenbezogen.

```text
Create a cinematic photorealistic illustration for the page "Mitgründen" of a website about a Hof-Lebensgemeinschaft near Hamburg. Show a warm, lively courtyard of the same northern German brick farm world as the hero image. The focus is on people who could become founding members: families with young children, a couple, one or two singles, mixed ages, authentic and approachable, standing or sitting together around a rough wooden table with coffee, notebooks, simple sketches or a map of a farm, discussing and laughing. Children play nearby, a dog lies under the table, garden and workshop details in the background.

The mood: "Raus aufs Land. Nah an Hamburg. Rein ins Hofleben." It should feel like capable, friendly, pragmatic people planning something real, not a commune meeting, not a business meeting, not a retreat. Clear faces are allowed, natural expressions, no fake stock-photo smiles.

Subtle rural northern Germany atmosphere, brick buildings, courtyard, trees, garden, warm light. Hamburg does not need to dominate here, but a very subtle distant hint of city connection or regional train is acceptable.

No important readable text, no banners, no slogans.

Warm cinematic photorealistic illustration style, realistic but slightly idealized, inviting northern German countryside atmosphere, rich but tasteful details, natural warm light, modern editorial quality, no stock photo look, no luxury resort look, no spiritual retreat aesthetic, no exaggerated hippie commune aesthetic, grounded and authentic, high detail, coherent color palette with warm whites, dark greens, earth tones, wood, brick, soft natural contrast.
```

---

### Bild 4: Hof gesucht Hero / Kernbild

Dateiname: `hof-gesucht-hero.jpg`  
Format: Querformat 16:9.  
Funktion: Seite „Hof gesucht“, stärker objekt-/eigentümerbezogen.

```text
Create a cinematic photorealistic illustration for the page "Hof gesucht" of a website about finding a farmstead for a new Hof-Lebensgemeinschaft near Hamburg. Show a beautiful but realistic northern German Resthof / farm ensemble with brick buildings, old barn doors, a courtyard, mature trees, garden areas, meadows, perhaps a small pond or old fruit trees. The farm should have character, history and potential, not look luxurious or fully renovated.

Include a subtle human scene: perhaps an older farm owner couple or single owner speaking with a small group of friendly prospective buyers / initiators in the courtyard, respectful and relaxed. The mood should communicate trust, continuity, a good transition, and a future for the place. Not a real estate sales scene, no suits, no aggressive negotiation.

The image should suggest: "Wir suchen einen Hof, dessen Geschichte weitergehen darf." It should be warm, grounded, authentic, respectful. Hamburg connection may be subtly visible in the far background or implied by landscape, but focus on the farm.

No important readable text, no banners, no slogans.

Warm cinematic photorealistic illustration style, realistic but slightly idealized, inviting northern German countryside atmosphere, rich but tasteful details, natural warm light, modern editorial quality, no stock photo look, no luxury resort look, no spiritual retreat aesthetic, no exaggerated hippie commune aesthetic, grounded and authentic, high detail, coherent color palette with warm whites, dark greens, earth tones, wood, brick, soft natural contrast.
```

---

### Bild 5: Gemeinschaft / lange Tafel

Dateiname: `gemeinschaft-tafel.jpg`  
Format: Querformat oder 4:3.  
Funktion: Abschnitt zu Gemeinschaft, Leben, Essen, Feiern.

```text
Create a warm cinematic image of a long wooden table in the courtyard of a northern German brick farmstead, part of a Hof-Lebensgemeinschaft near Hamburg. Families, children, couples and singles are eating together casually in the early evening, with garden, barn, trees, string lights or warm ambient light, simple good food, laughter and relaxed conversation. It should feel authentic, not staged, not luxury, not a wedding, not a retreat. Children are naturally part of the scene. Some people look toward each other, some toward the camera, with natural faces.

No important readable text, no banners, no slogans.

Warm cinematic photorealistic illustration style, realistic but slightly idealized, inviting northern German countryside atmosphere, rich but tasteful details, natural warm light, modern editorial quality, no stock photo look, no luxury resort look, no spiritual retreat aesthetic, no exaggerated hippie commune aesthetic, grounded and authentic, high detail, coherent color palette with warm whites, dark greens, earth tones, wood, brick, soft natural contrast.
```

---

### Bild 6: Arbeiten / Werkstatt / Büro

Dateiname: `arbeiten-werkstatt.jpg`  
Format: Querformat oder 4:3.  
Funktion: Abschnitt „Der Hof soll kein Schlafdorf werden“ / Arbeiten auf dem Hof.

```text
Create a cinematic image showing work and creativity on a northern German farmstead that is becoming a Hof-Lebensgemeinschaft. In one part of the scene, an open workshop with wood, tools, a workbench and someone building or repairing something. Nearby, a simple shared office or studio corner with a laptop, sketches, coffee and natural light. In the background, the farm courtyard, brick walls, garden and maybe a child passing by or a dog. The mood should show: people live and work here, the farm is active and practical, not just decorative.

No important readable text, no banners, no slogans.

Warm cinematic photorealistic illustration style, realistic but slightly idealized, inviting northern German countryside atmosphere, rich but tasteful details, natural warm light, modern editorial quality, no stock photo look, no luxury resort look, no spiritual retreat aesthetic, no exaggerated hippie commune aesthetic, grounded and authentic, high detail, coherent color palette with warm whites, dark greens, earth tones, wood, brick, soft natural contrast.
```

---

### Bild 7: Kinder / Hofleben

Dateiname: `kinder-hofleben.jpg`  
Format: Querformat oder 4:3.  
Funktion: Abschnitt „Kinder gehören ausdrücklich dazu“.

```text
Create a warm, lively cinematic image of children playing freely on a northern German farmstead courtyard and garden, part of a Hof-Lebensgemeinschaft near Hamburg. Children of different ages are running, climbing, playing near a treehouse or simple wooden play structure, with chickens or a dog nearby, adults casually present in the background but not controlling the scene. The farm has brick buildings, garden beds, meadow, old trees and a safe, adventurous atmosphere. It should feel like real childhood outdoors: lively, a little messy, joyful, natural.

No important readable text, no banners, no slogans.

Warm cinematic photorealistic illustration style, realistic but slightly idealized, inviting northern German countryside atmosphere, rich but tasteful details, natural warm light, modern editorial quality, no stock photo look, no luxury resort look, no spiritual retreat aesthetic, no exaggerated hippie commune aesthetic, grounded and authentic, high detail, coherent color palette with warm whites, dark greens, earth tones, wood, brick, soft natural contrast.
```

---

### Bild 8: Hof / Region / Hamburg-Verbindung

Dateiname: `hof-region.jpg`  
Format: Querformat 16:9.  
Funktion: Abschnitt Lage / Region / Hamburg-Nähe.

```text
Create a cinematic landscape image showing the connection between rural Hofleben and Hamburg. In the foreground: a northern German rural landscape with a farmstead, fields, trees, maybe a small country road or bicycle path. In the midground: a small regional train or S-Bahn passing quietly through the landscape, suggesting accessibility. In the distance: the Hamburg skyline clearly visible but still far away, including Elbphilharmonie, Michel church tower and TV tower. The mood: rural, open, calm, but connected to the city. Warm light, grounded and hopeful.

No important readable text, no banners, no slogans.

Warm cinematic photorealistic illustration style, realistic but slightly idealized, inviting northern German countryside atmosphere, rich but tasteful details, natural warm light, modern editorial quality, no stock photo look, no luxury resort look, no spiritual retreat aesthetic, no exaggerated hippie commune aesthetic, grounded and authentic, high detail, coherent color palette with warm whites, dark greens, earth tones, wood, brick, soft natural contrast.
```

---

### Bild 9: Kontakt / Detailbild

Dateiname: `kontakt-detail.jpg`  
Format: Querformat oder 4:3.  
Funktion: Kontaktseite oder Footer-Bereich.

```text
Create a warm detail image for the contact page of a Hof-Lebensgemeinschaft website. Show a rustic wooden table in a northern German farm courtyard or kitchen, with a smartphone, a coffee cup, a simple notebook, a pencil, maybe a rough map of the Hamburg surrounding countryside, keys, and warm natural light. In the soft background, hint at brick farm buildings or garden. The mood should invite a simple first contact: call, WhatsApp, email. Human, direct, unpretentious, not corporate.

No readable important text, no banners, no slogans, no visible phone numbers or email addresses.

Warm cinematic photorealistic illustration style, realistic but slightly idealized, inviting northern German countryside atmosphere, rich but tasteful details, natural warm light, modern editorial quality, no stock photo look, no luxury resort look, no spiritual retreat aesthetic, no exaggerated hippie commune aesthetic, grounded and authentic, high detail, coherent color palette with warm whites, dark greens, earth tones, wood, brick, soft natural contrast.
```

---

## 14. Logo-Prompts

Die finale Logo-Richtung ist noch nicht entschieden. Es sollen zwei Richtungen erstellt werden.

### Logo Option B: Wortmarke + schlichtes Symbol

Dateiname: `logo-option-b.png` und, wenn möglich, zusätzlich als SVG.  
Funktion: mögliche Header-/Markenvariante.

```text
Design a clean, modern logo for "Hof-Lebensgemeinschaft Hamburg". Direction: wordmark plus a very simple symbol. The symbol should be minimal and grounded, inspired by a northern German farm roofline, barn door, courtyard, tree or horizon. It should feel professional, warm, understated, and not playful. No luxury real estate look, no organic food brand cliché, no esoteric symbol, no startup tech look.

Use a calm color palette: dark green, warm off-white, earth tone or subtle brick accent. Typography should be clear, high-quality, readable, modern but warm. The logo must work in a website header and as a small favicon-like mark. Provide on transparent background if possible. Avoid complex details.
```

### Logo Option C: Emblem / Siegel-artig

Dateiname: `logo-option-c.png` und, wenn möglich, zusätzlich als SVG.  
Funktion: mögliche Marken-/Emblemvariante.

```text
Design a tasteful emblem-style logo for "Hof-Lebensgemeinschaft Hamburg". Direction: a characterful but modern emblem or seal, inspired by a northern German farmstead, courtyard, barn, tree, horizon and community. It should feel established, warm, grounded and trustworthy, but not old-fashioned. Avoid looking like a Biohof product label, farm shop label, craft beer label or official municipal crest.

Use a restrained color palette: dark green, warm off-white, earth tones, subtle brick red. Include the name "Hof-Lebensgemeinschaft Hamburg" if the image model can render text accurately; otherwise create the emblem mark without important text and keep text as real HTML/SVG later. The emblem should be simple enough for website use, favicon/social preview and print-like applications.
```

Implementation note: Until a logo is selected, the website header should use a clean typographic wordmark: **Hof-Lebensgemeinschaft Hamburg**. Logo assets should be stored for review but should not block the website.

---

## 15. Startseite – vollständiger Inhalt

### Hero

Headline:

> **Wir suchen Menschen und einen Hof für eine neue Hof-Lebensgemeinschaft im Hamburger Umland.**

Subline:

> Ein Ort zum Wohnen, Leben und Arbeiten. Weit genug draußen, dass man die Vögel hört. Nah genug an Hamburg, dass Freunde, Familie und Alltag erreichbar bleiben.

Buttons gleichwertig:

- **Ich möchte mitgründen** → `/mitgruenden`
- **Ich habe oder kenne einen Hof** → `/hof-gesucht`

### Section: Worum es geht

Headline:

> **Worum es geht**

Text:

> Wir möchten einen Hof im Hamburger Umland zu einem Ort entwickeln, an dem gewohnt, gelebt und gearbeitet wird. Mit privaten Wohnbereichen, gemeinschaftlichen Flächen, Garten, Werkstätten, Kindern, Tieren, Gästen und genug Nähe zu Hamburg, damit Verbindung bleibt.
>
> Wir suchen keinen Aussteigerort, keine Kommune und kein Investorenprojekt. Sondern einen bodenständigen, lebendigen Hof für Menschen, die Verantwortung übernehmen und gerne etwas aufbauen.

### Section: Zwei Einstiegskarten

Zwei Cards nebeneinander auf Desktop, untereinander auf Mobile.

#### Card 1

Headline:

> **Du möchtest mitgründen?**

Text:

> Wir suchen Menschen, die nicht erst einziehen möchten, wenn alles fertig ist. Sondern Menschen, die Lust haben, von Anfang an mitzudenken, mitzusuchen, mitzuentscheiden und später vielleicht dort zu leben.

Button:

> **Mehr zum Mitgründen** → `/mitgruenden`

#### Card 2

Headline:

> **Sie haben oder kennen einen Hof?**

Text:

> Wir suchen einen Hof, Resthof, Ferienhof, ein Gutshaus oder Hofensemble im Hamburger Umland — einen Ort mit Substanz, Charakter und Potenzial für neues Leben.

Button:

> **Mehr zum gesuchten Hof** → `/hof-gesucht`

### Section: Der Hof

Headline:

> **Der Hof**

Text:

> Gesucht wird ein Hof, Resthof, Ferienhof, Gutshaus oder Hofensemble im Hamburger Umland. Wichtig sind mehrere Wohnmöglichkeiten oder entsprechendes Ausbaupotenzial, Nebengebäude, Garten- und Grünflächen, ein schönes Umfeld und eine gute Verbindung nach Hamburg.
>
> Wasser, alter Baumbestand, Werkstattflächen, Stallungen, Obstwiese, Weide oder weitere Entwicklungsmöglichkeiten wären großartig. Der Ort muss nicht fertig sein. Er muss passen.

### Section: Die Menschen

Headline:

> **Die Menschen**

Text:

> Wir suchen ehrliche, offene, optimistische Menschen mit Herz, Hirn und Tatkraft. Familien mit Kindern sind ausdrücklich willkommen, genauso Paare und Singles. Uns ist nicht wichtig, dass alle gleich leben, gleich arbeiten oder gleich denken. Wichtig sind Fairness, Humor, Verlässlichkeit, Großzügigkeit und Lust darauf, einen Ort gemeinsam aufzubauen.

### Section: Wohnen, leben, arbeiten — nicht nur nebeneinander her

Headline:

> **Wohnen, leben, arbeiten — nicht nur nebeneinander her**

Text:

> Der Hof soll kein Schlafdorf werden. Wir wünschen uns einen Ort, an dem Menschen wohnen, arbeiten, gärtnern, bauen, kochen, feiern und Verantwortung teilen. Mit privaten Rückzugsräumen und gemeinschaftlichen Flächen. Mit Kindern, Tieren, Werkstätten, vielleicht einem gemeinsamen Büro, kleinen Betrieben, Gästen, Veranstaltungen oder später einem Hofcafé.
>
> Was genau entsteht, hängt vom Ort und von den Menschen ab. Aber klar ist: Es soll Leben auf dem Hof sein.

### Section: Wo wir gerade stehen

Headline:

> **Wo wir gerade stehen**

Text:

> Wir sind in der frühen Gründungs- und Suchphase. Das konkrete Objekt steht noch nicht fest. Auch die genaue Struktur wird sich mit dem passenden Ort und den passenden Menschen entwickeln.
>
> Initiiert wird das Projekt derzeit von Dietrich aus Hamburg, Vater von zwei Töchtern, und einer weiteren Familie, die sich dem Initiatorenkreis gerade anschließt.
>
> Als Orientierung stellen wir uns einen Kern aus etwa 4–5 Parteien mit insgesamt ungefähr 12–18 Menschen vor. Jetzt geht es vor allem darum, die richtigen Menschen und den richtigen Hof zu finden.

### Section: Kontakt-Teaser

Headline:

> **Klingt interessant?**

Text:

> Wenn dich die Idee anspricht oder wenn Sie einen passenden Hof kennen, freuen wir uns über eine Nachricht. Ruf an, schreib eine WhatsApp oder schick eine Mail.

Kontakt-Platzhalter:

- Telefon: `[TELEFONNUMMER]`
- WhatsApp: `[WHATSAPP-LINK]`
- E-Mail: `[E-MAIL-ADRESSE]`

Links:

- **Kontakt aufnehmen** → `/kontakt`
- **Mehr zum Mitgründen** → `/mitgruenden`
- **Mehr zum gesuchten Hof** → `/hof-gesucht`

---

## 16. Seite „Mitgründen“ – vollständiger Inhalt

### Hero

Headline:

> **Raus aufs Land. Nah an Hamburg. Rein ins Hofleben.**

Subline:

> Wir suchen Menschen, die Lust haben, eine Hof-Lebensgemeinschaft von Anfang an mit aufzubauen — mit privaten Rückzugsräumen, gemeinschaftlichem Leben, Kindern, Garten, Arbeit und Verantwortung.

### Section: Was entstehen soll

Headline:

> **Was entstehen soll**

Text:

> Wir stellen uns einen Hof vor, auf dem Kinder draußen spielen, Menschen in Werkstätten, Ateliers oder Büros arbeiten, abends jemand den Grill anmacht, Hühner über den Hof laufen, Gäste vorbeikommen und trotzdem jede Partei ihren eigenen Rückzugsort hat.
>
> Kein Dauerplenum, keine Szene, kein Hof als romantische Kulisse. Wir suchen Menschen mit Herz, Hirn, Humor und Tatkraft — und mit Lust auf echtes Hofleben.

### Section: Für wen es passen könnte

Headline:

> **Das könnte zu dir passen, wenn …**

Bulletpoints:

- Du hast Lust auf mehr Natur, Raum und Lebendigkeit.
- Du möchtest Hamburg nicht komplett hinter dir lassen.
- Du gestaltest gerne, statt nur zu konsumieren.
- Du findest Kinder, Trubel und Leben auf dem Hof eher bereichernd als störend.
- Du magst Gemeinschaft, brauchst aber auch Privatheit.
- Du kannst Verantwortung übernehmen.
- Du bist pragmatisch, offen und eher positiv unterwegs.
- Du kannst mit Unfertigem umgehen.

### Section: Für wen es eher nicht passt

Headline:

> **Und eher nicht, wenn …**

Bulletpoints:

- Du suchst vor allem eine fertige Mietwohnung im Grünen.
- Du möchtest möglichst wenig mit anderen zu tun haben.
- Du findest Gemeinschaft romantisch, willst aber keine Verantwortung übernehmen.
- Du erwartest, dass schon alles geklärt ist.
- Du siehst bei jeder Idee zuerst die zehn Gründe, warum sie nicht funktioniert.
- Du liebst endlose Grundsatzdebatten.
- Du möchtest starke dogmatische politische, spirituelle oder sonstige Weltbilder in die Gruppe tragen.

### Section: Der Kern

Headline:

> **Der Kern**

Text:

> Als Orientierung stellen wir uns einen kleinen Kern aus etwa 4–5 Parteien vor, insgesamt ungefähr 12–18 Menschen. Gerne Familien mit Kindern, Paare und Singles. Unterschiedliche Hintergründe sind willkommen: unternehmerisch, handwerklich, akademisch, kreativ, familiär, praktisch.
>
> Entscheidend ist nicht der perfekte Lebenslauf. Entscheidend ist, dass es menschlich passt.

### Section: Kinder gehören ausdrücklich dazu

Headline:

> **Kinder gehören ausdrücklich dazu**

Text:

> Kinder sollen auf dem Hof nicht stören, sondern dazugehören. Wir wünschen uns mehrere Familien mit Kindern, damit Freundschaften, Spiel, Trubel und gemeinsames Aufwachsen möglich werden. Ein Hof mit Kindern ist lauter, lebendiger und manchmal chaotischer. Genau das darf er sein.

### Section: Mieten ist ausdrücklich möglich

Headline:

> **Mieten ist ausdrücklich möglich**

Text:

> Man muss nicht von Anfang an Eigenkapital einbringen, um Teil des Projekts zu werden. Das wahrscheinlichste Anfangsmodell ist, dass eine Person oder ein kleiner Kreis den Hof erwirbt und andere Parteien zunächst mieten.
>
> Wenn sich später zeigt, dass der Ort, die Menschen und die Struktur langfristig tragen, können Beteiligungs- oder Eigentumsmodelle dazukommen. Aber am Anfang geht es nicht darum, sofort die perfekte Rechtsform zu bauen. Am Anfang geht es darum, die richtigen Menschen und den richtigen Hof zu finden.

### Section: Der Hof soll kein Schlafdorf werden

Headline:

> **Der Hof soll kein Schlafdorf werden**

Text:

> Wir wollen dort nicht nur wohnen. Der Hof soll ein Ort sein, an dem auch gearbeitet wird: in Werkstätten, Ateliers, kleinen Betrieben, einem gemeinsamen Büro, vielleicht später auch mit Hofcafé, Feriengästen, Veranstaltungen oder einer kleinen landwirtschaftlichen Nutzung. Was genau entsteht, hängt vom Ort und von den Menschen ab. Aber klar ist: Es soll Leben auf dem Hof sein.

### Kontaktblock

Headline:

> **Wenn dich das anspricht**

Text:

> Ruf kurz an, schreib eine WhatsApp oder schick eine Mail. Eine erste Nachricht muss nicht perfekt sein — Hauptsache, man bekommt ein Gefühl füreinander.

Stichpunkte, nicht als Formular:

> Spannend wäre zum Beispiel:

- Wer bist du / wer seid ihr?
- Wo lebt ihr aktuell?
- Was reizt dich an einer Hof-Lebensgemeinschaft?
- Würdest du dort perspektivisch wirklich leben wollen?
- Was bringst du mit — menschlich, praktisch, beruflich, finanziell oder ideell?
- Was wäre für dich ein Muss?
- Was wäre für dich ein No-Go?
- Hast du Ideen zur Region oder kennst du sogar ein passendes Objekt?

Kontakt-Platzhalter:

- Telefon: `[TELEFONNUMMER]`
- WhatsApp: `[WHATSAPP-LINK]`
- E-Mail: `[E-MAIL-ADRESSE]`

---

## 17. Seite „Hof gesucht“ – vollständiger Inhalt

### Hero

Headline:

> **Wir suchen einen Hof, dessen Geschichte weitergehen darf.**

Subline:

> Einen Hof, Resthof, Ferienhof, ein Gutshaus oder Hofensemble im Hamburger Umland — mit Substanz, Charakter und Potenzial für Wohnen, Arbeiten, Kinder, Garten, Gemeinschaft und neues Leben.

### Section: Der passende Ort

Headline:

> **Der passende Ort**

Text:

> Gesucht wird ein Hof mit Substanz und Potenzial. Er muss nicht fertig sein. Er muss auch nicht schon perfekt zu unserer Idee passen. Wichtig ist, dass dort mehrere Wohnbereiche entstehen können und dass es genug Raum gibt für gemeinschaftliche Flächen, Garten, Nebengebäude, Werkstätten und Leben im Freien.

Kriterien:

- Hof, Resthof, Ferienhof, Gutshaus oder Hofensemble
- Hamburger Umland / Norddeutschland mit guter Verbindung nach Hamburg
- mehrere Wohneinheiten oder Ausbaupotenzial
- Nebengebäude, Scheunen, Stallungen oder Werkstattflächen
- Garten- und Grünflächen
- gerne Wasser, alter Baumbestand, Obstwiese, Weide oder besondere Lage
- Schule, Kindergarten und Einkaufsmöglichkeiten in erreichbarer Nähe
- Entwicklungsmöglichkeiten für Wohnen, Arbeiten und gemeinschaftliche Nutzung

### Section: Was entstehen soll

Headline:

> **Was entstehen soll**

Text:

> Wir möchten einen Hof nicht einfach kaufen und verwerten. Wir möchten ihn bewohnen, pflegen und weiterentwickeln. Perspektivisch soll dort ein kleiner Kreis aus etwa 4–5 Parteien leben: Familien mit Kindern, Paare und Singles.
>
> Der Hof soll ein Ort werden, an dem gewohnt, gearbeitet, gegärtnert, gebaut, gekocht, gefeiert und Verantwortung geteilt wird. Nicht als romantische Landflucht, sondern als langfristig tragfähiges Projekt.

### Section: Teil der Region werden

Headline:

> **Teil der Region werden**

Text:

> Wir möchten nicht als abgeschlossene Insel irgendwo auftauchen. Der Hof soll Teil der Region und der Gemeinde werden. Wir wollen uns einbringen, Nachbarschaft ernst nehmen und schauen, was vor Ort gebraucht wird und was wirklich passt.
>
> Genauso wichtig ist: Auch die Umgebung muss zu uns passen. Landschaft, Erreichbarkeit, Schule, Kindergarten, Einkaufsmöglichkeiten, Nachbarschaft und der allgemeine Vibe der Gegend spielen eine große Rolle.

### Section: Ernsthaftes Interesse und ein fairer Umgang

Headline:

> **Ernsthaftes Interesse und ein fairer Umgang**

Text:

> Wir sind ernsthafte Interessenten und bereit, für ein passendes Objekt einen fairen Preis zu zahlen. Uns geht es nicht um Spekulation und nicht darum, einen Hof möglichst billig zu bekommen. Wir suchen einen Ort, den wir langfristig tragen können und mit dem wir respektvoll umgehen.
>
> Wir sind echte, authentische Menschen mit klarem Kopf, Tatkraft und dem Wunsch, etwas Schönes aufzubauen.

### Section: Wohnen, Arbeiten, Hofleben

Headline:

> **Wohnen, Arbeiten, Hofleben**

Text:

> Neben privaten Wohnbereichen stellen wir uns gemeinschaftliche Flächen, Garten, Tiere, Werkstätten, ein gemeinsames Büro, kleine Betriebe, Gästeunterkünfte, vielleicht ein Hofcafé oder Veranstaltungen vor. Auch eine bestehende oder kleine landwirtschaftliche Nutzung kann Teil des Ganzen bleiben, wenn es zum Ort passt.
>
> Entscheidend ist nicht ein starres Konzept, sondern dass der Hof wieder oder weiter ein lebendiger Ort ist.

### Section: Ein guter Übergang

Headline:

> **Ein guter Übergang**

Text:

> Falls bisherige Eigentümerinnen oder Eigentümer sich vorstellen können, auch nach einem Verkauf in einer eigenen Wohneinheit auf dem Hof zu bleiben, sind wir offen, darüber zu sprechen. Das ist kein Muss und kein fertiges Modell — aber eine Möglichkeit, wenn es menschlich und praktisch passt.

### Kontaktblock

Headline:

> **Haben Sie einen passenden Hof oder einen Hinweis?**

Text:

> Wenn Sie einen Hof besitzen oder jemanden kennen, für den diese Idee passen könnte, melden Sie sich gerne direkt per Telefon, WhatsApp oder E-Mail. Eine grobe erste Beschreibung reicht völlig.

Stichpunkte, nicht als Formular:

> Hilfreich wäre zum Beispiel:

- Wo liegt der Hof ungefähr?
- Welche Art Objekt ist es?
- Welche Gebäude gibt es?
- Wie viele Wohnbereiche gibt es aktuell?
- Gibt es Ausbaupotenzial?
- Wie groß sind Grundstück und Grünflächen ungefähr?
- Gibt es Besonderheiten wie Wasser, alter Baumbestand, Scheune, Werkstatt oder Stallungen?
- Gibt es eine Preisvorstellung oder zeitliche Vorstellungen?
- Wäre Wohnenbleiben / Altenteil grundsätzlich ein Thema?

Kontakt-Platzhalter:

- Telefon: `[TELEFONNUMMER]`
- WhatsApp: `[WHATSAPP-LINK]`
- E-Mail: `[E-MAIL-ADRESSE]`

---

## 18. Seite „Kontakt“ – vollständiger Inhalt

### Hero / Intro

Headline:

> **Melde dich, wenn es passt.**

Subline:

> Ob du mitgründen möchtest, einen Hof besitzt oder einen Hinweis hast: Ruf an, schreib eine WhatsApp oder schick eine Mail. Eine erste Nachricht muss nicht perfekt sein.

### Kontaktmöglichkeiten

Prominent darstellen als Kontaktkarten oder Kontaktzeilen:

- Telefon: `[TELEFONNUMMER]`
- WhatsApp: `[WHATSAPP-LINK]`
- E-Mail: `[E-MAIL-ADRESSE]`

### Section: Wer dahintersteht

Headline:

> **Wer dahintersteht**

Text:

> Initiiert wird die Hof-Lebensgemeinschaft Hamburg derzeit von einem kleinen Kreis aus Hamburg: Dietrich, Vater von zwei Töchtern, und einer weiteren Familie, die sich dem Projekt gerade anschließt. Uns verbindet der Wunsch, einen Hof im Hamburger Umland zu einem lebendigen Ort für Wohnen, Arbeiten, Kinder, Gemeinschaft und Natur zu entwickeln.

### Section: Für Mitgründerinnen und Mitgründer

Headline:

> **Für Mitgründerinnen und Mitgründer**

Text:

> Wenn du dich für das Mitgründen interessierst, erzähl gern kurz, wer du bist, was dich an der Idee reizt und was du mitbringen würdest. Es geht nicht um perfekte Bewerbungsunterlagen, sondern darum, ein erstes Gefühl füreinander zu bekommen.

### Section: Für Hofeigentümerinnen, Hofeigentümer und Hinweisgeber

Headline:

> **Für Hofeigentümerinnen, Hofeigentümer und Hinweisgeber**

Text:

> Wenn Sie einen passenden Hof besitzen oder von einem Ort wissen, der zu dieser Idee passen könnte, freuen wir uns über eine Nachricht. Eine grobe Beschreibung reicht für den Anfang völlig. Lage, Gebäude, Wohnmöglichkeiten, Nebengebäude, Grundstück, Preisvorstellung und ein paar Fotos oder Links helfen natürlich.

---

## 19. Footer

Footer-Inhalt:

- Wortmarke: **Hof-Lebensgemeinschaft Hamburg**
- Claim:

> Menschen und Hof gesucht für eine neue Hof-Lebensgemeinschaft im Hamburger Umland.

Navigation:

- Start
- Mitgründen
- Hof gesucht
- Kontakt

Platzhalter:

- Impressum
- Datenschutz

---

## 20. SEO / Meta

### Startseite

Title:

> Hof-Lebensgemeinschaft Hamburg – Menschen und Hof gesucht

Meta Description:

> Wir suchen Menschen und einen Hof für eine neue Hof-Lebensgemeinschaft im Hamburger Umland: Wohnen, Leben, Arbeiten, Kinder, Garten, Gemeinschaft und Nähe zu Hamburg.

### Mitgründen

Title:

> Mitgründen – Hof-Lebensgemeinschaft Hamburg

Meta Description:

> Raus aufs Land, nah an Hamburg, rein ins Hofleben: Wir suchen Menschen, die eine Hof-Lebensgemeinschaft von Anfang an mit aufbauen möchten.

### Hof gesucht

Title:

> Hof gesucht – Hof-Lebensgemeinschaft Hamburg

Meta Description:

> Gesucht wird ein Hof, Resthof, Ferienhof, Gutshaus oder Hofensemble im Hamburger Umland mit Potenzial für Wohnen, Arbeiten, Kinder, Garten und Gemeinschaft.

### Kontakt

Title:

> Kontakt – Hof-Lebensgemeinschaft Hamburg

Meta Description:

> Kontakt zur Hof-Lebensgemeinschaft Hamburg: Melde dich per Telefon, WhatsApp oder E-Mail, wenn du mitgründen möchtest oder einen passenden Hof kennst.

---

## 21. Responsive Anforderungen

Die Website muss bei folgenden Breakpoints geprüft werden:

- 375 × 812 – kleines Smartphone
- 390 × 844 – modernes Smartphone
- 768 × 1024 – Tablet Portrait
- 1024 × 768 – Tablet Landscape / kleines Laptop
- 1440 × 900 – Desktop

Besonders wichtig:

- Mobile Hero muss stark, hoch und immersiv wirken.
- Mobile Hero soll eigenes vertikales Bild verwenden.
- Text im Hero muss gut lesbar sein.
- Buttons im Hero auf Mobile untereinander und groß genug.
- Cards sauber stapeln.
- Navigation / Drawer gut bedienbar.
- Keine horizontalen Scrollbars.
- Keine gequetschten Textblöcke.
- Kontaktlinks gut antippbar.
- Bilder nicht verzerrt.
- Headerwechsel beim Scrollen sauber.

---

## 22. QA / Selbstprüfung durch Coding-Agenten

Der Coding-Agent soll nach der Umsetzung eigenständig prüfen:

1. Lokaler Build läuft ohne Fehler.
2. Dev-Server läuft ohne Konsolenfehler.
3. Alle Routen funktionieren:
   - `/`
   - `/mitgruenden`
   - `/hof-gesucht`
   - `/kontakt`
4. Header funktioniert:
   - transparent über Hero
   - hell/fest beim Scrollen
   - Mobile-Menü funktioniert
5. Alle Links funktionieren.
6. Keine Formulare vorhanden.
7. Kontaktlinks sind klickbar:
   - `tel:`
   - WhatsApp
   - `mailto:`
8. Alle Texte aus diesem Konzept sind vollständig und korrekt eingebaut.
9. SEO-Titel und Meta Descriptions sind gesetzt.
10. Bilder sind an den definierten Stellen eingebunden.
11. Falls Bildgenerierung möglich war: finale Bilder statt Platzhalter verwenden.
12. Falls Bildgenerierung nicht möglich war: deutlich dokumentieren, welche Platzhalter noch ersetzt werden müssen.
13. Screenshots für die genannten Breakpoints erstellen.
14. Screenshots visuell prüfen und Probleme beheben.
15. Abschließend eine kurze QA-Zusammenfassung schreiben.

---

## 23. Coding-Agent-Goal-Prompt

Der folgende Prompt ist für den Coding-Agenten gedacht.

```markdown
# GOAL: Vollständige Website V1 für „Hof-Lebensgemeinschaft Hamburg“ bauen

Du bist mein Coding-Agent. Bitte arbeite in einer langen, vollständigen Umsetzungssession und bringe dieses Goal wirklich bis zum Ende. Es geht nicht um einen kleinen ersten Schritt, sondern um eine vollständige Website V1.

## Wichtig

Im Projektordner liegt ein Konzeptdokument mit dem Namen:

`hof-lebensgemeinschaft-complete-concept-and-goal.md`

Bitte lies dieses Dokument vollständig und setze die Website exakt entsprechend um. Das Konzeptdokument ist die maßgebliche Spezifikation für Inhalt, Struktur, Tonalität, Technik, Bildwelt, Bildprompts, SEO, Responsive-Verhalten und QA.

## Ziel

Baue eine vollständige Website für das Projekt:

**Hof-Lebensgemeinschaft Hamburg**

Zentrale Positionierung:

**„Wir suchen Menschen und einen Hof für eine neue Hof-Lebensgemeinschaft im Hamburger Umland.“**

Die Website soll zwei Zielgruppen ansprechen:

1. Menschen, die mitgründen möchten.
2. Hofeigentümer:innen oder Hinweisgeber, die einen passenden Hof kennen.

Die Website soll professionell, warm, norddeutsch, direkt, hochwertig, bodenständig und mit etwas Kante wirken. Nicht esoterisch, nicht akquisig, nicht wie eine Immobilienmaklerseite, nicht wie eine Kommune-Seite und nicht wie eine Startup-Landingpage.

## Technologie

Wenn der Ordner leer ist oder noch kein passender Stack vorhanden ist, baue bitte eine Full-Stack-Grundstruktur mit:

- React + TypeScript + Vite im Frontend
- React Router für die vier Seiten
- Node.js + Express + TypeScript als Engine-/Backend-Server
- Struktur so vorbereiten, dass später SQLite ergänzt werden kann
- aktuell keine aktive Datenbanklogik und keine Kontaktformulare implementieren
- Server soll im Production-Build das gebaute Frontend ausliefern können
- Health-Route `/health`

Wenn bereits ein passendes Repo existiert, nutze die bestehende Struktur, aber erfülle trotzdem alle Anforderungen.

## Seiten

Baue diese Seiten vollständig:

1. `/` – Startseite
2. `/mitgruenden` – Mitgründen
3. `/hof-gesucht` – Hof gesucht
4. `/kontakt` – Kontakt

Zusätzlich Footer-Links als Platzhalter:

- Impressum
- Datenschutz

## Kontakt

Es gibt kein Formular.

Kontakt läuft über Platzhalter:

- Telefon: `[TELEFONNUMMER]`
- WhatsApp: `[WHATSAPP-LINK]`
- E-Mail: `[E-MAIL-ADRESSE]`

Bitte zentral konfigurierbar machen, z. B. in `siteConfig.ts`.

Auf Mobile müssen Telefon, WhatsApp und E-Mail antippbar sein.

## Bilder

Nutze die Bildstrategie und Bildprompts aus dem Konzeptdokument.

Wichtig:

- Für den Startseiten-Hero zwei eigene Bilder:
  - Desktop: `hero-desktop.jpg`
  - Mobile: `hero-mobile.jpg`
- Mobile-Hero ist kein Crop des Desktop-Hero, sondern ein eigenes vertikales Asset.
- Hamburg-Skyline im Hero klar erkennbar.
- Text als echtes HTML über dem Bild, nicht im Bild.
- Keine wichtigen Texte in den generierten Bildern.
- Kleine realistische Schilder sind okay.

Wenn du Zugriff auf ein Bildgenerierungstool hast, generiere die Bilder anhand der Prompts im Konzeptdokument und speichere sie an den vorgesehenen Pfaden. Wenn nicht, setze hochwertige Platzhalter ein und dokumentiere genau, was noch fehlt.

## Header

- Initial transparent über dem Hero-Bild.
- Beim Scrollen hell/fest/sticky.
- Wortmarke links: „Hof-Lebensgemeinschaft Hamburg“.
- Navigation rechts:
  - Start
  - Mitgründen
  - Hof gesucht
  - Kontakt
- Kein hervorgehobener Kontaktbutton im Header.
- Mobile Navigation als hochwertiges Menü/Drawer.

## Startseite

Setze die Startseite exakt nach Konzept um:

Hero-Headline:

„Wir suchen Menschen und einen Hof für eine neue Hof-Lebensgemeinschaft im Hamburger Umland.“

Hero-Subline:

„Ein Ort zum Wohnen, Leben und Arbeiten. Weit genug draußen, dass man die Vögel hört. Nah genug an Hamburg, dass Freunde, Familie und Alltag erreichbar bleiben.“

Hero-Buttons gleichwertig:

- „Ich möchte mitgründen“ → `/mitgruenden`
- „Ich habe oder kenne einen Hof“ → `/hof-gesucht`

Weitere Sections:

- Worum es geht
- Zwei Einstiegskarten
- Der Hof
- Die Menschen
- Wohnen, leben, arbeiten — nicht nur nebeneinander her
- Wo wir gerade stehen
- Kontakt-Teaser

Alle Texte stehen vollständig im Konzeptdokument.

## Seite „Mitgründen“

Hero-Headline:

„Raus aufs Land. Nah an Hamburg. Rein ins Hofleben.“

Hero-Subline:

„Wir suchen Menschen, die Lust haben, eine Hof-Lebensgemeinschaft von Anfang an mit aufzubauen — mit privaten Rückzugsräumen, gemeinschaftlichem Leben, Kindern, Garten, Arbeit und Verantwortung.“

Sections:

- Was entstehen soll
- Das könnte zu dir passen, wenn …
- Und eher nicht, wenn …
- Der Kern
- Kinder gehören ausdrücklich dazu
- Mieten ist ausdrücklich möglich
- Der Hof soll kein Schlafdorf werden
- Kontaktblock

Alle Texte stehen vollständig im Konzeptdokument.

## Seite „Hof gesucht“

Hero-Headline:

„Wir suchen einen Hof, dessen Geschichte weitergehen darf.“

Hero-Subline:

„Einen Hof, Resthof, Ferienhof, ein Gutshaus oder Hofensemble im Hamburger Umland — mit Substanz, Charakter und Potenzial für Wohnen, Arbeiten, Kinder, Garten, Gemeinschaft und neues Leben.“

Sections:

- Der passende Ort
- Was entstehen soll
- Teil der Region werden
- Ernsthaftes Interesse und ein fairer Umgang
- Wohnen, Arbeiten, Hofleben
- Ein guter Übergang
- Kontaktblock

Alle Texte stehen vollständig im Konzeptdokument.

## Seite „Kontakt“

Hero-Headline:

„Melde dich, wenn es passt.“

Hero-Subline:

„Ob du mitgründen möchtest, einen Hof besitzt oder einen Hinweis hast: Ruf an, schreib eine WhatsApp oder schick eine Mail. Eine erste Nachricht muss nicht perfekt sein.“

Sections:

- Kontaktmöglichkeiten
- Wer dahintersteht
- Für Mitgründerinnen und Mitgründer
- Für Hofeigentümerinnen, Hofeigentümer und Hinweisgeber

Alle Texte stehen vollständig im Konzeptdokument.

## SEO

Setze Seitentitel und Meta Descriptions exakt nach Konzeptdokument.

## Responsive / QA

Bitte setze die Website nicht nur grob um, sondern prüfe sie eigenständig intensiv.

Erstelle nach Umsetzung Screenshots für mindestens diese Breakpoints:

- 375 × 812
- 390 × 844
- 768 × 1024
- 1024 × 768
- 1440 × 900

Prüfe insbesondere:

- Mobile Hero wirkt groß, emotional und wow-ig.
- Mobile nutzt eigenes vertikales Hero-Bild.
- Text im Hero ist gut lesbar.
- Buttons sind gut tappbar.
- Header funktioniert transparent und beim Scrollen.
- Mobile-Menü funktioniert.
- Keine horizontalen Scrollbars.
- Keine gequetschten Textblöcke.
- Alle Texte vollständig vorhanden.
- Keine Kontaktformulare vorhanden.
- Kontaktlinks funktionieren.
- Bilder sind korrekt eingebunden.
- Build läuft ohne Fehler.
- Keine Browser-Console-Errors.

Bitte behebe gefundene Probleme eigenständig, bis das Goal erfüllt ist.

## Abschlussbericht

Am Ende bitte berichten:

1. Welche Dateien angelegt/geändert wurden.
2. Welche Technologie/Struktur final verwendet wurde.
3. Wie ich lokal starten und testen kann.
4. Wo ich Telefonnummer, WhatsApp-Link und E-Mail-Adresse ändere.
5. Welche Bilder generiert/eingebunden wurden.
6. Falls Bildgenerierung nicht möglich war: welche Platzhalter noch ersetzt werden müssen.
7. Wo die Screenshots liegen.
8. Welche Breakpoints geprüft wurden.
9. Welche offenen Punkte noch bestehen.

Arbeite bitte so lange weiter, bis die Website vollständig gemäß Konzept umgesetzt, geprüft und dokumentiert ist.
```
