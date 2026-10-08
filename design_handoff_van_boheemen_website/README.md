# Handoff: Website Administratiekantoor Van Boheemen

## Overview
Complete marketing website for Van Boheemen, a local administratiekantoor/boekhouder with two equal locations (Leidschendam & Den Haag). Audience: ZZP'ers, MKB-ondernemers and particulieren in Leidschendam-Voorburg, Den Haag e.o. Tone: personal, local, calm, premium. All copy is Dutch, addressed with "u".

## About the design files
The files in `pages/` are **design references built in HTML** — prototypes that show the intended look, copy and behaviour. They are **not production code to copy**. Recreate them in the target stack (e.g. Next.js/Astro + Tailwind, or a WordPress theme) using that stack's normal patterns: real components, a shared layout (header/footer), CSS tokens instead of inline styles.

To view a reference: open any `pages/*.dc.html` in a browser (keep `support.js` and `assets/` next to them). Styles are inline on purpose (prototype tooling); treat them as the spec. Page logic (state, animation) is in the `<script data-dc-script>` block at the bottom of each file — a class with `renderVals()` returning the template data.

## Fidelity
**High-fidelity.** Final colours, typography, spacing, copy and interactions. Recreate pixel-accurately. Exceptions: photography (demo stock, see Assets), placeholders marked in monospace green/blue boxes, and the open items below.

## Open items (resolve before launch)
- **Telefoonnummer Den Haag**: brief gave "070 800 82 8" (one digit missing). Prototype uses `070 800 82 88` / `tel:0708008288` — **must be confirmed**.
- **Inloggen klantportaal** (footer): no URL yet.
- **Kennismakingsformulier** (Contact): front-end only; needs a backend/mail endpoint + spam protection.
- **Reviews**: placeholder quotes — replace with real reviews or hide the section (`showReviews`).
- **Teamnamen/functies, eigen historie (Over ons), toelichting verkeerssituatie**: placeholders.
- **Dienst-teksten & FAQ's, privacyverklaring**: concept copy written by design; have content checked (fiscal statements, privacy legal check).
- **Werkgebied** mentions Leiden & Zoetermeer (footer + home marquee) — confirm.

## Pages / routes
| Route (suggested) | Reference file |
|---|---|
| `/` | `Home v2.dc.html` |
| `/diensten` | `Diensten.dc.html` |
| `/diensten/scannen-mailen` | `Dienst-Scannen.dc.html` |
| `/diensten/boeken-administratie` | `Dienst-Boekhouding.dc.html` |
| `/diensten/controleren-administratie` | `Dienst-Controleren.dc.html` |
| `/diensten/jaarrekening` | `Dienst-Jaarrekening.dc.html` |
| `/diensten/belastingaangifte` | `Dienst-Belastingaangifte.dc.html` |
| `/diensten/aangifte-particulieren` | `Dienst-Particulieren.dc.html` |
| `/diensten/loonadministratie` | `Dienst-Loonadministratie.dc.html` |
| `/diensten/begeleiding-starters` | `Dienst-Starters.dc.html` |
| `/over-ons` | `Over-ons.dc.html` |
| `/contact` (anchors `#formulier`, `#vestigingen`) | `Contact.dc.html` |
| `/verkeerssituatie-leidschendam` | `Verkeerssituatie-Leidschendam.dc.html` |
| `/privacy` | `Privacy.dc.html` |
| (internal) style guide | `Stijlgids.dc.html` |

The 8 dienst-pages share **one template** — build it once and feed content from a data file (CMS/MDX/JSON). Content per service is in the `D` structure visible in each page (hero lines, lead, image, "Wat wij voor u doen" list ×6, 3 steps, 3 "Voor wie" cards, FAQ ×3–4, 3 related services).

## Global layout
- Container: `max-width: 1320px`, horizontal padding `clamp(20px, 4vw, 48px)`.
- Section vertical padding: `clamp(72px, 9vw, 140px)` (hero-ish/CTA up to 160px).
- Responsive: fluid grids `repeat(auto-fit, minmax(min(100%, Xpx), 1fr))`. **Mobile/desktop switch at 1080px** (nav collapses to burger; home services list changes from hover-list+sticky-panel to stacked list).
- Base: body 17px / 1.55, `text-wrap: pretty`, `-webkit-font-smoothing: antialiased`, `overflow-x: clip` on root wrapper.

### Header (sticky, all pages)
- Height 88px at top → 72px after scroll > 20px; logo 54px → 46px. Background transparent at top → `rgba(251,252,253,.9)` + `backdrop-filter: blur(16px)` + bottom border `#E6ECF0` when scrolled. Always visible (no hide-on-scroll).
- Left: logo (unchanged JPG, `mix-blend-mode: multiply`). Centre (≥1080px): nav Diensten · Werkwijze (home#werkwijze) · Over ons · Vestigingen (contact#vestigingen) · Contact — pills, 15px/500, padding 8×14, radius 999, hover bg `#EEF3F7` + text `#1F4E79`.
- Right: **"Bel ons"** outline pill (46px, border `#D5DEE5`, pulsing green dot `#3F7D25`) → opens **call popover** (320px, radius 18, shadow `0 30px 60px -24px rgba(20,33,43,.28)`): "Welke vestiging wilt u bellen?", two rows (city label 12px caps + number 18px/600 + blue round arrow) as `tel:` links, footer row with live open/closed status. Closes on outside click.
- **"Kennismaking plannen"** primary pill (bg `#1F4E79`, hover `#173D5F`, arrow chip in rgba white 14%, gap animates 12→18px on hover) → `/contact#formulier`. Hidden <1080px.
- Mobile: round burger (2 lines → X), opens full-height menu with 32px Newsreader items + numbers, CTA pill at bottom.

### Footer (all pages)
Bg `#14212B`, text `#B8C4CE`. 4 columns (auto-fit 200px): logo on white tile + werkgebied · Leidschendam (adres, tel, tijden) · Den Haag · Diensten list (links). Bottom bar: "KvK 28081866 · Btw NL819162450B01", links Privacy & disclaimer / Inloggen klantportaal. Oversized decorative wordmark "Van Boheemen" (Newsreader, `clamp(72px,17vw,250px)`, colour `#1C2E3C`, aria-hidden) bleeding off the bottom.

## Home — sections in order
1. **Hero**: 6 faint vertical grid lines (`#EDF1F4`) drawn in (scaleY). Eyebrow row: italic "Administratiekantoor" — line — "Leidschendam · Den Haag" + right "Nu geopend/gesloten" pill (live, Europe/Amsterdam, ma–vr 09–18). H1 Newsreader 400 `clamp(40px,4.2vw,62px)`/.98, `-0.035em`: "Een vaste boekhouder / die meedenkt met / *[ZZP'ers. | ondernemers. | particulieren. | starters.]*" — last word rotates every 2.8s (slide-up 900ms). Lead + CTAs (primary 58px pill with white arrow circle; secondary "Bel een vestiging" opens call popover). Right: photo (aspect 4/5 desktop, 4/3 mobile, radius 28, clip-path reveal) with floating white card bottom-left: "Scannen, mailen / & wij doen de rest" + progress bar + 4 checklist steps that tick on a 1.3s loop.
2. **Marquee**: white band, italic Newsreader `clamp(22px,2.4vw,32px)` items separated by green dots, translateX 0→-50% over 48s, infinite.
3. **01 — Diensten**: desktop = numbered list (left, hover indents 18px, arrow rotates -45°→0 and fills blue) + sticky blue panel right (`#1F4E79`, radius 28) showing photo/title/desc of hovered service with fade-in. Mobile = stacked list with descriptions.
4. **02 — Werkwijze** (bg `#F4F7F9`): 4 steps, top rule animates in blue 3px, big italic numbers `#4F88B5`.
5. **03 — Waarom** (bg `#1F4E79`): large statement H2 with green italic accents `#B5DC8A`, 2 slowly drifting outline circles, 4 reasons (Persoonlijk, Lokaal, Vast aanspreekpunt, Twee vestigingen).
6. **04 — Klanten** (toggle `showReviews`): one big quote, prev/next round buttons, counter "01 / 03".
7. **05 — Over ons** teaser: 4 portrait cards (3/4, staggered 48px offset), horizontal scroll on narrow screens.
8. **06 — Vestigingen** (bg `#F4F7F9`): two equal cards — map (Google Maps embed, `filter: saturate(.55)`), city H3, open-status pill, Adres + Openingstijden, **Leidschendam only**: quiet info row (outline "i" circle, "Let op: verkeerssituatie gewijzigd", "Lees meer →" to `/verkeerssituatie-leidschendam`; toggle `showTrafficNotice`), buttons phone (primary) + "Plan route ↗" (Google Maps directions, new tab). Card hover: lift 4px + shadow.
9. **CTA** (bg `#EAF3E2`): huge H2 "Zullen we / *kennismaken?*" (`clamp(48px,9vw,148px)`, italic `#2F6A1B`), both phone numbers, dark pill CTA with green arrow chip.

## Sub-page pattern
Hero: breadcrumb (14px, `/` separators) → eyebrow label → H1 `clamp(46px,6.4vw,96px)`/.96 `-0.04em` with line-by-line rise → lead + CTAs on the right, optional 21/9 image (radius 28, mask reveal). Section heads: label + H2 left, short paragraph right (aligned bottom). Reused blocks: Vestigingen, CTA, Waarom.
- **Diensten**: 8 cards (4/3 image radius 22, image zooms 1.05 on hover, "nr / 08", H2 26–32px, desc, underlined link) + Particulieren band + CTA.
- **Dienst template**: hero → "Wat wij voor u doen" (sticky left head, right checklist with green check circles `#EAF3E2`/`#2F6A1B`) → 3 steps (`#F4F7F9`) → 3 "Voor wie" cards (white, border, radius 24, hover lift) → FAQ accordion (first open; round +/− toggle fills blue when open) → 3 related service cards → CTA.
- **Over ons**: hero + image → story → Waarom block → team grid (4) → Vestigingen → CTA.
- **Contact**: hero + two large phone cards (number Newsreader `clamp(36px,4.4vw,60px)` in blue, whole card is `tel:` link) → `#formulier` (bg `#F4F7F9`): left intro + openingstijden table; right white form card (radius 28). Fields: Naam*, Bedrijfsnaam (optioneel), E-mailadres* (type email), Telefoonnummer, Voorkeur vestiging (segmented pills: Leidschendam / Den Haag / Maakt niet uit — default last), Waar gaat het over? (select: Kennismaking + 8 services + Iets anders), Bericht (textarea). Inputs 56px, radius 14, border `#D5DEE5`, focus border `#1F4E79` + ring `0 0 0 4px rgba(31,78,121,.12)`. Submit → success state ("Dank u wel. We nemen contact met u op." + direct phone numbers + "Nog een bericht sturen"). Then Vestigingen + KvK/Btw strip.
- **Verkeerssituatie**: hero, info list, route/bel buttons, map. Text placeholder.
- **Privacy**: sticky side nav (flex, 220px) + content sections; concept copy.

## Interactions & motion
- Easing everywhere: `cubic-bezier(.16, 1, .3, 1)`.
- Scroll reveals (IntersectionObserver, rootMargin bottom -6%, once): `fade` = opacity 0 + translateY(32px) → none, 1000ms; `rise` (headline lines inside overflow-hidden wrappers) translateY(108%) → 0, 1100ms; `mask` clip-path inset(100% 0 0 0) + scale 1.06 → none, 1500ms; `line` scaleX 0→1, 1400ms; `vline` scaleY, 1800ms. Stagger via data-delay (≈70–150ms steps).
- Loops: marquee 48s linear; pulse dots scale 1→2.8 + fade, 2.2s; drift circles 14–18s alternate.
- **Respect `prefers-reduced-motion: reduce`**: no reveals/loops, content shown immediately. Only start loops when the tab is visible.
- Hover: buttons darken + arrow gap grows; cards lift 4px with soft shadow; images zoom 1.04–1.05 over ~1s; text links underline `#C9D5DE` → `#1F4E79`.
- Transitions 200–400ms.

## State
- Header: `scrolled`, `callOpen`, `menuOpen`.
- Open status: computed from current time in `Europe/Amsterdam` (ma–vr 09:00–18:00), refreshed each minute.
- Home: rotating word index, flow step (0–5 loop), active service index (hover/focus), review index.
- Dienst: open FAQ index (default 0, click toggles).
- Contact: chosen location, `formSent`. Needs real submit (POST) + validation (naam, e-mail required) + error state.
- Props/toggles: `showReviews`, `showTrafficNotice`.

## Design tokens
**Colours**
| Token | Hex | Use |
|---|---|---|
| primary | `#1F4E79` | CTA, links, accents, blue sections |
| primary-hover | `#173D5F` | CTA hover |
| logo-blue | `#7FB2D9` | decorative only |
| number-blue | `#4F88B5` | large step numbers on light bg (≥3:1) |
| sky-on-dark | `#A9CBE6` | labels on primary bg |
| accent-green | `#3F7D25` | section labels, status dot (5.2:1 on white) |
| green-deep | `#2F6A1B` | italic accent on `#EAF3E2`, check icons |
| logo-green | `#8CC152` | decorative dots/quotes, arrow chip |
| green-on-dark | `#B5DC8A` | accents on primary/ink bg |
| ink | `#14212B` | headings, body, footer bg |
| text-2 | `#4A5864` | body copy |
| text-3 | `#6B7A86` | captions/meta (on white only) |
| footer-text | `#B8C4CE` / `#94A3AF` | footer |
| border | `#DEE5EA` | card borders, rules |
| border-input | `#D5DEE5` | inputs, outline buttons |
| rule-light | `#E6ECF0` / `#C9D5DE` | section rules / step tracks |
| surface | `#F4F7F9` | alt sections |
| tint-blue | `#E7F0F7` / `#EEF3F7` | soft fills, nav hover |
| tint-green | `#EAF3E2` | CTA section, check circles |
| page | `#FBFCFD` | background |

**Typography** — Google Fonts: **Newsreader** (opsz, 400/500 + italic) for headings/display/numbers; **Instrument Sans** (400/500/600) for body/UI.
| Role | Size | LH | Tracking |
|---|---|---|---|
| Display H1 home | clamp(40,4.2vw,62) | .98 | -0.035em |
| Page H1 | clamp(46,6.4vw,96) | .96 | -0.04em |
| CTA H2 | clamp(48,9vw,148) | .95 | -0.04em |
| H2 section | clamp(36,4.6vw,64) | 1.02 | -0.025em |
| H3 card | 24–32 | 1.1–1.2 | -0.01em |
| Lead | clamp(17,1.4vw,20) | 1.6 | 0 |
| Body | 17 | 1.55–1.7 | 0 |
| Small/UI | 14–16 / 500 | — | 0 |
| Label | 13 / 600 caps | — | .1em |
Italic Newsreader in primary blue is the signature accent inside headings.

**Radius**: 999 (all buttons/pills), 14 (inputs, info rows), 18–22 (images, panels), 24–28 (cards, hero image, form card).
**Shadows**: CTA `0 18px 30px -16px rgba(31,78,121,.6)`; popover `0 30px 60px -24px rgba(20,33,43,.28)`; card hover `0 40px 70px -40px rgba(20,33,43,.35)`.

## Assets
- `pages/assets/logo.jpg` — client logo, use unchanged (ask client for SVG/transparent PNG for production).
- Photos: **demo only**, hot-linked from Pexels (`images.pexels.com/photos/<id>`). IDs: hero 7648029; services 7680681, 5900074, 8152735, 7691724, 9870132, 8152738, 7693184, 7651715; team 31987756, 6670986, 10031281, 30767572; Over ons 7888656. Replace with an own photoshoot (warm, authentic office/team, no stock clichés) before launch.
- Maps: Google Maps embed `https://maps.google.com/maps?q=<adres>&z=15&output=embed` — swap for the official Embed API (key) or a static map + consent handling (cookies/AVG).
- No icon set: arrows/checks are text glyphs (→ ↗ ✓ + −); use an icon set if preferred, keep thin/minimal.

## Contact data (exact)
Leidschendam — Doctor van Noortstraat 134, 2266 HB Leidschendam, T 071 580 48 47
Den Haag — Winkelhaak 77, 2495 AX Den Haag, T 070 800 82 8 (incomplete — confirm)
Openingstijden: ma – vr 09.00 – 18.00 · KvK 28081866 · Btw NL819162450B01
