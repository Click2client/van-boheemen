import { site } from "@/config/site";
import { legalNotice } from "@/content/ui";
import type { LegalSection, PageMeta } from "@/content/types";

export const privacyContent = {
  metadata: {
    title: "Privacyverklaring voor bezoekers",
    description:
      "Lees welke gegevens Voorbeeldbedrijf verwerkt, waarom, hoe lang een voorbeeldtermijn duurt en welke rechten je hebt. Dit is een voorbeeldtekst.",
  } satisfies PageMeta,
  heading: "Privacyverklaring",
  intro: `Deze pagina legt uit hoe ${site.legalName} omgaat met persoonsgegevens van bezoekers en mensen die het contactformulier gebruiken.`,
  breadcrumb: "Privacy",
  notice: legalNotice,
  sections: [
    {
      heading: "Wie is verantwoordelijk",
      paragraphs: [
        `${site.legalName} is verantwoordelijk voor de verwerking van persoonsgegevens via deze website.`,
        `Bezoekadres: ${site.address.street}, ${site.address.postalCode} ${site.address.city}. E-mail: ${site.contact.email}. Telefoon: ${site.contact.phoneDisplay}. KvK: ${site.kvk}.`,
      ],
    },
    {
      heading: "Welke gegevens",
      paragraphs: [
        "Via het contactformulier vragen we je naam, e-mailadres, een optioneel telefoonnummer en je bericht. Vul hier aan als de klant meer gegevens vraagt, bijvoorbeeld een bedrijfsnaam.",
        "De site kan daarnaast technische gegevens verwerken die nodig zijn om de pagina te tonen, zoals een IP-adres in serverlogboeken van de hosting.",
      ],
    },
    {
      heading: "Doelen en grondslagen",
      paragraphs: [
        "Voorbeeld: we gebruiken je bericht om je vraag te beantwoorden. De grondslag is dan het gerechtvaardigd belang of de stappen vóór een overeenkomst. Kies de grondslag die bij de echte situatie past.",
        "Statistieken via Google Analytics lopen alleen nadat je daarvoor toestemming hebt gegeven. Zonder die keuze worden geen analytische cookies geplaatst.",
      ],
    },
    {
      heading: "Bewaartermijnen",
      paragraphs: [
        "Voorbeeld: berichten uit het formulier bewaren we zo lang als nodig is om de vraag af te handelen, en daarna niet langer dan de termijn die je hier invult.",
        "Verzin geen termijn als die nog niet vaststaat. Zet de echte termijn erin voordat de site live gaat.",
      ],
    },
    {
      heading: "Delen met derden",
      paragraphs: [
        "We verkopen geen gegevens. Voor de werking van de site kunnen gegevens worden verwerkt door partijen die een taak voor ons uitvoeren:",
      ],
      bullets: [
        "Vercel, voor het hosten van de website.",
        "Resend, voor het afleveren van e-mail uit het contactformulier.",
        "Cloudflare, voor de spamcontrole (Turnstile) op het formulier.",
        "Google, voor Tag Manager en Analytics, alleen na toestemming via de cookiemelder.",
      ],
    },
    {
      heading: "Rechten van betrokkenen",
      paragraphs: [
        "Je kunt vragen om inzage, correctie, verwijdering, beperking of overdracht van je gegevens, en bezwaar maken tegen een verwerking. Stuur daarvoor een e-mail naar het adres hierboven.",
        "We kunnen vragen je identiteit te bevestigen voordat we een verzoek uitvoeren.",
      ],
    },
    {
      heading: "Klachten",
      paragraphs: [
        "Ben je het niet eens met hoe we met je gegevens omgaan, dan kun je een klacht indienen bij de Autoriteit Persoonsgegevens.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [
        `Vragen over deze verklaring kun je sturen naar ${site.contact.email} of bellen naar ${site.contact.phoneDisplay}.`,
      ],
    },
  ] satisfies LegalSection[],
};
