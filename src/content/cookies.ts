import { legalNotice } from "@/content/ui";
import type { LegalSection, PageMeta } from "@/content/types";

export const cookiesContent = {
  metadata: {
    title: "Uitleg over cookies op deze site",
    description:
      "Welke cookies deze site gebruikt, waarvoor ze dienen en hoe u uw keuze later wijzigt. Analytische cookies plaatsen wij pas na uw toestemming.",
  } satisfies PageMeta,
  heading: "Cookieverklaring",
  intro:
    "Deze site plaatst analytische of marketingcookies pas nadat u daar toestemming voor geeft. Noodzakelijke cookies zijn nodig om de site te laten werken.",
  breadcrumb: "Cookies",
  notice: legalNotice,
  sections: [
    {
      heading: "Noodzakelijk",
      paragraphs: [
        "Deze cookies of vergelijkbare opslag zijn nodig voor de werking van de site, bijvoorbeeld om uw cookiekeuze te onthouden of om het formulier te beveiligen tegen spam.",
        "Hiervoor is geen toestemming nodig. Ze worden niet gebruikt om u over andere websites te volgen.",
      ],
    },
    {
      heading: "Statistiek",
      paragraphs: [
        "Met statistiekcookies, via Google Analytics 4 en Google Tag Manager, zien wij hoeveel mensen de site bezoeken en welke pagina’s zij openen.",
        "Die cookies worden pas geplaatst als u statistieken accepteert in de cookiemelder.",
      ],
    },
    {
      heading: "Marketing",
      paragraphs: [
        "Marketingcookies zijn niet standaard actief. Zet ze alleen aan als advertenties worden gemeten, en alleen na een aparte keuze in de cookiemelder.",
        "Er staan geen losse advertentiepixels in de code. Die horen in Google Tag Manager, achter toestemming.",
      ],
    },
    {
      heading: "Kaarten",
      paragraphs: [
        "Op de pagina’s met vestigingen staat een ingesloten kaart van Google Maps. Google kan daarbij cookies plaatsen. Laat vóór de livegang vastleggen of die kaart pas na toestemming geladen moet worden.",
      ],
    },
    {
      heading: "Uw keuze wijzigen",
      paragraphs: [
        "Onder aan elke pagina staat de knop Cookie-instellingen. Daarmee opent u de cookiemelder opnieuw en kunt u uw keuze aanpassen.",
        "In het CookieYes-account moet ‘Weigeren’ even makkelijk zijn als ‘Accepteren’, zonder vakjes die al aan staan.",
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
