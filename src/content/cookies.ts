import { legalNotice } from "@/content/ui";
import type { LegalSection, PageMeta } from "@/content/types";

export const cookiesContent = {
  metadata: {
    title: "Uitleg over cookies op deze site",
    description:
      "Welke cookies Voorbeeldbedrijf gebruikt, waarvoor ze dienen en hoe je je keuze later wijzigt. Dit is een voorbeeldtekst voor de cookieverklaring.",
  } satisfies PageMeta,
  heading: "Cookieverklaring",
  intro:
    "Deze site plaatst analytische of marketingcookies pas nadat je daar toestemming voor geeft. Noodzakelijke cookies zijn nodig om de site te laten werken.",
  breadcrumb: "Cookies",
  notice: legalNotice,
  sections: [
    {
      heading: "Noodzakelijk",
      paragraphs: [
        "Deze cookies of vergelijkbare opslag zijn nodig voor de werking van de site, bijvoorbeeld om je cookiekeuze te onthouden of om het formulier te beveiligen tegen spam.",
        "Hiervoor is geen toestemming nodig. Ze worden niet gebruikt om je over andere websites te volgen.",
      ],
    },
    {
      heading: "Statistiek",
      paragraphs: [
        "Met statistiekcookies, via Google Analytics 4 en Google Tag Manager, zien we hoeveel mensen de site bezoeken en welke pagina's ze openen.",
        "Die cookies worden pas geplaatst als je statistieken accepteert in de cookiemelder.",
      ],
    },
    {
      heading: "Marketing",
      paragraphs: [
        "Marketingcookies zijn in dit template niet standaard actief. Zet ze alleen aan als de klant advertenties meet, en alleen na een aparte keuze in de cookiemelder.",
        "Er staan geen losse advertentiepixels in de code. Die horen in Google Tag Manager, achter toestemming.",
      ],
    },
    {
      heading: "Je keuze wijzigen",
      paragraphs: [
        "Onder aan elke pagina staat de knop Cookie-instellingen. Daarmee open je de cookiemelder opnieuw en kun je je keuze aanpassen.",
        "In het CookieYes-account van de klant moet 'Weigeren' even makkelijk zijn als 'Accepteren', zonder vakjes die al aan staan.",
      ],
    },
    {
      heading: "Actuele cookielijst",
      paragraphs: [
        "CookieYes kan op deze plek een actuele lijst van cookies tonen. Zet dat aan in het CookieYes-dashboard en plaats de lijst hier voordat de site live gaat.",
      ],
    },
  ] satisfies LegalSection[],
};
