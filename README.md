# Click2Client websitetemplate

Dit is een herbruikbare website voor klanten van Click2Client. Elke nieuwe klant begint met een kopie van dit project. De voorbeeldteksten, kleuren en bedrijfsgegevens van Voorbeeldbedrijf B.V. laten zien wat je per klant vervangt.

De site is gebouwd met Next.js (App Router), React, TypeScript en Tailwind CSS. De pagina's staan in `src/app/`. De teksten staan los in `src/content/`. Het contactformulier wordt op de server gecontroleerd, beschermd met Cloudflare Turnstile en verstuurd via Resend. Statistieken lopen via Google Tag Manager, pas nadat de bezoeker toestemming heeft gegeven. De site is bedoeld om op Vercel te draaien, met de code op GitHub.

## Nieuwe klantsite maken

1. Open dit project op GitHub en kies **Use this template**. Maak de nieuwe repository **private**.
2. Open die repository in Cursor.
3. Open een terminal en voer uit: `npm install`.
4. Kopieer `.env.example` naar `.env.local` en vul de waarden in. Uitleg per regel staat in dat bestand.
5. Pas `src/config/site.ts` aan: naam, adres, telefoon, e-mail, KvK, btw, socials, menu en de Google-verificatiecode. Zet `url` op het echte domein, hetzelfde adres als `NEXT_PUBLIC_SITE_URL`.
6. Pas de kleuren en lettertypes aan in `@theme` in `src/app/globals.css`.
7. Vervang de teksten in `src/content/` en de afbeeldingen in `public/images/`.

Lokaal bekijken: `npm run dev` en open http://localhost:3000.

## Teksten aanpassen

Alle zichtbare teksten per pagina staan in `src/content/`, bijvoorbeeld `src/content/home.ts` en `src/content/contact.ts`. De onderdelen op de pagina (zoals de hero of de veelgestelde vragen) bevatten zelf geen vaste zinnen; ze krijgen de tekst uit die bestanden.

Afbeeldingen staan in `public/images/`, met een map per pagina. In het contentbestand staan het pad, de alt-tekst, de breedte en de hoogte. Houd bestanden bij voorkeur onder 500 KB.

In Cursor kun je bijvoorbeeld vragen: "Pas in `src/content/home.ts` de hero-tekst aan naar deze beschrijving: …". De opmaak blijft dan staan. Controleer na een nieuwe kop of de titel en omschrijving bovenaan datzelfde bestand nog kloppen.

## Publiceren op Vercel

Klantsites hebben een **Pro-abonnement** op Vercel nodig.

1. Importeer de GitHub-repository in Vercel.
2. Ga naar **Settings**, **Environment Variables** en vul dezelfde variabelen in als in `.env.local`, voor Production en Preview. Zet op Production de echte Turnstile-sleutels en de Resend-sleutel. Laat `NEXT_PUBLIC_ANALYTICS_DEBUG` leeg.
3. Koppel het domein van de klant bij **Settings**, **Domains**.

`.env.local` blijft alleen op je computer. Dat bestand gaat niet naar GitHub.

## Waar de sleutels vandaan komen

- **Turnstile:** Cloudflare-dashboard, Turnstile, een widget voor het domein van de klant. De sitekey wordt `NEXT_PUBLIC_TURNSTILE_SITE_KEY`. Het secret wordt `TURNSTILE_SECRET_KEY`. De sleutels in `.env.example` zijn openbare testsleutels en mogen niet live blijven staan.
- **Resend:** een API-sleutel uit het Resend-dashboard (`RESEND_API_KEY`). Verifieer daar ook het afzenderdomein. `CONTACT_FROM_EMAIL` moet op dat domein staan. `CONTACT_TO_EMAIL` is de inbox die de berichten ontvangt.
- **GTM-ID:** in Google Tag Manager, bij de container, een code die begint met `GTM-`. Die komt in `NEXT_PUBLIC_GTM_ID`. Zonder die code laadt de site geen Tag Manager.

## Cookies en statistieken

De code laadt alleen Google Tag Manager, en alleen op de live site (of lokaal als `NEXT_PUBLIC_ANALYTICS_DEBUG=true`). Vóór Tag Manager staat de toestemming standaard op geweigerd. Analytics en marketingcookies wachten op een keuze van de bezoeker.

Richt dit per klant zo in:

1. Maak een CookieYes-account voor de klant en voeg het domein toe.
2. Zet in CookieYes de ondersteuning voor **Google Consent Mode** aan.
3. Zorg dat **Weigeren** even makkelijk is als **Accepteren**, en dat er geen vakjes al aan staan. De bezoeker moet de keuze later kunnen wijzigen.
4. In Google Tag Manager: voeg de officiële CookieYes-template toe uit de Community Template Gallery. Zet de trigger op **Consent Initialization - All Pages**.
5. Voeg Google Analytics 4 toe in Tag Manager, zodat die tag pas meet nadat er toestemming is voor statistieken.
6. Controleer met de voorbeeldmodus van Tag Manager: zonder toestemming gaan er geen analytische cookies mee, na accepteren wel.

De knop **Cookie-instellingen** in de footer heeft de class `cky-banner-element`. CookieYes opent daarmee de banner opnieuw. Daar is geen extra script voor nodig. De pagina `/cookies` legt de soorten cookies uit. CookieYes kan daar ook een actuele cookielijst tonen; zet dat aan in hun dashboard.

In de code staat geen CookieYes-script en geen losse Facebook- of andere pixel. Die horen in Tag Manager, achter toestemming.

## Een nieuw extern domein toestaan

Scripts, afbeeldingen en iframes van een ander domein worden geblokkeerd tot je dat domein toevoegt in `src/config/security.ts`. Dat bestand is gegroepeerd op soort: `script`, `connect`, `img`, `frame`, `style` en `font`. Voeg het domein in de juiste lijst toe. `next.config.ts` bouwt daar de Content Security Policy uit.

Werkt een nieuw script niet, kijk dan in de browserconsole of deze policy het tegenhoudt.

## Branches en previewversies

Grotere wijzigingen horen op een eigen branch, bijvoorbeeld `feature/contactformulier`. Vercel maakt daar automatisch een previewversie van. Die link kun je aan de klant laten zien. Preview-sites staan op `noindex`, zodat Google ze niet opneemt.

Pas na akkoord gaat de branch naar `main`. Dat is de live site.

Zet verbeteringen aan het template ook in `CHANGELOG.md`, zodat je weet wat je naar bestaande klantsites kunt overzetten. Zet op GitHub Dependabot aan, zodat je een seintje krijgt als een pakket bijgewerkt moet worden.

## Checklist voor livegang

- `src/config/site.ts` is ingevuld, inclusief KvK-nummer en btw-nummer.
- `url` in `site.ts` en `NEXT_PUBLIC_SITE_URL` zijn het echte domein.
- De testsleutels van Turnstile zijn vervangen door de sleutels van het klantdomein.
- Het Resend-domein is geverifieerd en er is een testmail aangekomen.
- Elke pagina heeft een eigen titel, omschrijving en canonical.
- De voorbeeldtekst op de juridische pagina's is vervangen door tekst van de klant.
- De Rich Results Test van Google is gedraaid op de homepage en de dienstenpagina.
- De sitemap is ingediend in Google Search Console. De verificatiecode staat in `site.verification.google`.
- CookieYes en Google Analytics 4 zijn getest in de voorbeeldmodus van Tag Manager.
- De site is gecontroleerd met Lighthouse en met alleen het toetsenbord: tabben, het mobiele menu sluiten met Escape, en de link "Naar inhoud".
