# Startopdracht: Click2Client Next.js-template opzetten

Je bent de AI-agent in Cursor. Zet in deze map een herbruikbaar websitetemplate op volgens de onderstaande stappen. Praat met de gebruiker in het Nederlands en leg kort uit wat je doet; de gebruiker is nieuw met Cursor en programmeren.

## 1. Controleer de voorwaarden
- Voer `node -v` en `git --version` uit.
- Node.js moet versie 20 of hoger zijn. Ontbreekt Node.js of Git, of is de versie te oud: **stop** en leg de gebruiker uit dat hij Node.js (LTS-versie) via nodejs.org en/of Git via git-scm.com moet installeren en Cursor daarna opnieuw moet starten.

## 2. Maak het Next.js-project aan
Deze map bevat al `STARTOPDRACHT.md` en de map `cursor-rules/`, en `create-next-app` weigert een map die niet leeg is. Doe daarom:
1. `npx create-next-app@latest _app --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --yes`
2. Verplaats de volledige inhoud van `_app` (ook verborgen bestanden zoals `.gitignore` en een eventuele `.git`-map) naar de hoofdmap en verwijder daarna de lege map `_app`.
3. Controleer dat `npm run dev` start.

## 3. Zet de Cursor-regels op hun plek
- Verplaats alle bestanden uit `cursor-rules/` naar `.cursor/rules/` en verwijder de map `cursor-rules/`.
- Lees alle regels in `.cursor/rules/` en volg ze vanaf nu bij alles wat je bouwt.

## 4. Installeer de benodigde pakketten
`npm install zod resend server-only`

## 5. Bouw het template volgens de regels
Gebruik overal duidelijke **voorbeelddata** (bv. "Voorbeeldbedrijf B.V.", `https://www.voorbeeldbedrijf.nl`, fictief adres en KvK-nummer), zodat meteen zichtbaar is wat per klant aangepast moet worden.

- `src/config/site.ts` met alle klantgegevens, `navigation` en `pages`.
- Design tokens (primaire kleur, accentkleur, lettertypes) in `@theme` in `src/app/globals.css`.
- `src/app/layout.tsx` met `lang="nl"`, een lettertype via `next/font`, Header, Footer, standaard metadata en JSON-LD (`Organization`/`LocalBusiness` en `WebSite`).
- Pagina's: home (`/`), `/over-ons`, `/diensten`, `/contact`, `/privacy`, `/cookies` en `/algemene-voorwaarden` (die laatste alleen als `site.legal.hasTerms` `true` is), elk met eigen metadata en canonical. Juridische pagina's met structuur, voorbeeldtekst en een duidelijke melding dat het een voorbeeld is.
- `not-found.tsx` en `error.tsx`, allebei in Nederlands en in de huisstijl.
- Een footer met statutaire naam, adres, KvK-nummer, btw-nummer, links naar de juridische pagina's en een link "Cookie-instellingen".
- Een skip link "Naar inhoud" en een toegankelijk mobiel menu, volgens de toegankelijkheidsregel.
- `src/components/analytics/GoogleTagManager.tsx` met Consent Mode v2 (alles standaard geweigerd), zoals beschreven in de cookieregel. Zonder `NEXT_PUBLIC_GTM_ID` wordt er niets geladen. De knop "Cookie-instellingen" in de footer krijgt de class `cky-banner-element`, zodat CookieYes de banner opnieuw opent.
- Beveiligingsheaders en een Content Security Policy in `next.config.ts`, opgebouwd uit `src/config/security.ts`, volgens de beveiligingsregel.
- Favicons via `src/app/icon.png` en `src/app/apple-icon.png` (tijdelijke eenvoudige versie) en de Search Console-verificatie via `site.verification.google`.
- Een `CHANGELOG.md` met als eerste regel de datum van vandaag en "Eerste versie van het template".
- Alle paginateksten in `src/content/` volgens de contentregel, met voorbeeldteksten; de componenten bevatten zelf geen vaste teksten.
- Secties in `src/components/sections/`: Hero, Services, CallToAction en Faq (met `FAQPage` JSON-LD).
- UI-bouwstenen in `src/components/ui/`: Button, Card, Container, Input, Textarea.
- `src/components/seo/JsonLd.tsx` en `src/lib/seo.ts`.
- `src/app/sitemap.ts` en `src/app/robots.ts` (preview-omgevingen blokkeren).
- Een werkend contactformulier op `/contact`: Server Action, Zod-validatie, honeypot, Cloudflare Turnstile met verificatie op de server, versturen via Resend, en een privacytekst bij de knop.
- `src/lib/env.ts` met Zod-validatie. Zorg dat `npm run build` ook slaagt zonder ingevulde Resend-sleutel: als de mailvariabelen ontbreken, meldt het formulier netjes dat verzenden (nog) niet is ingesteld in plaats van te crashen.
- `.env.example` met: `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_ANALYTICS_DEBUG`, `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY`, `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`, elk met een Nederlandse toelichting. Vul voor Turnstile de openbare testsleutels van Cloudflare in.
- Voeg `!.env.example` toe aan `.gitignore`.
- Maak ook een `.env.local` aan als kopie van `.env.example`, zodat het lokaal direct werkt.

## 6. README
Vervang `README.md` door een Nederlandse handleiding met:
- wat dit template is en welke techniek erin zit;
- **Nieuwe klantsite maken**: op GitHub "Use this template", repo openen in Cursor, `npm install`, `.env.example` kopiëren naar `.env.local` en invullen, `site.ts` en `globals.css` aanpassen, teksten en afbeeldingen vervangen;
- **Teksten aanpassen**: waar de teksten en afbeeldingen staan (`src/content/` en `public/images/`) en hoe je de AI in Cursor vraagt ze aan te passen;
- **Publiceren op Vercel**: een Pro-abonnement is nodig voor klantsites, repo importeren in Vercel, env-variabelen invullen bij Settings, Environment Variables, domein koppelen;
- waar Turnstile-sleutels (Cloudflare-dashboard), de Resend-sleutel en de GTM-ID vandaan komen;
- **Cookies en statistieken**: hoe je een CookieYes-account voor de klant aanmaakt, Google Consent Mode aanzet in CookieYes, in Google Tag Manager de CookieYes-template toevoegt (trigger "Consent Initialization - All Pages") en Google Analytics 4 instelt, en hoe je dat controleert met de voorbeeldmodus van GTM;
- hoe je een nieuw extern domein toevoegt aan `src/config/security.ts`;
- de werkwijze met branches en previewversies op Vercel;
- een checklist voor livegang (site.ts ingevuld, echte Turnstile-sleutels, Resend-domein geverifieerd, metadata per pagina, Rich Results Test, sitemap ingediend in Google Search Console, KvK- en btw-nummer ingevuld, juridische teksten door de klant aangeleverd, cookiemelder en GA4 getest, toegankelijkheid gecontroleerd met Lighthouse en het toetsenbord).

## 7. Controleren
- Voer `npm run lint` en `npm run build` uit en los alle fouten op.
- Start `npm run dev` en geef de gebruiker de lokale link (meestal http://localhost:3000) om de site te bekijken.

## 8. Afronden
- Verplaats dit bestand naar `docs/startopdracht.md`.
- Zorg dat er een git-repository is (`git init` als die nog niet bestaat) en maak een commit: `Initial Click2Client Next.js template`.
- **Push niet zelf naar GitHub.** Leg de gebruiker in het Nederlands uit dat hij het project nu via het Source Control-paneel van Cursor op GitHub kan publiceren (als **private** repo), en dat hij daarna op GitHub in de repo-instellingen "Template repository" aanvinkt.
- Geef tot slot een korte samenvatting van wat er gebouwd is en welke bestanden de gebruiker per klant aanpast.
