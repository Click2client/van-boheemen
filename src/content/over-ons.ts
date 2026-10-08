import { site } from "@/config/site";
import type { CtaContent, PageMeta, ProseSection } from "@/content/types";

export const aboutContent = {
  metadata: {
    title: "Over het team achter je website",
    description:
      "Lees hoe Voorbeeldbedrijf te werk gaat: één aanspreekpunt, duidelijke teksten en een site die je later nog kunt aanpassen. Je spreekt steeds dezelfde persoon.",
  } satisfies PageMeta,
  heading: "Over ons",
  intro: `${site.legalName} is een voorbeeldbedrijf in ${site.address.city}. Vervang dit blok door het echte verhaal: wie je bent, voor wie je werkt en waarom klanten je bellen.`,
  breadcrumb: "Over ons",
  sections: [
    {
      heading: "Hoe een opdracht loopt",
      paragraphs: [
        "We beginnen met een gesprek over je aanbod en de vragen die bezoekers het vaakst stellen. Daaruit volgt een korte lijst pagina's, geen dik rapport.",
        "Daarna schrijven we de teksten, zetten de pagina's in elkaar en laten je meekijken voordat de site live gaat.",
      ],
    },
    {
      heading: "Voor wie we werken",
      paragraphs: [
        "Deze voorbeeldtekst gaat over kleine bedrijven die een nieuwe site nodig hebben of een oude site willen vervangen. Noem hier de branches waarin de klant echt werkt.",
        "We houden het team klein, zodat je niet steeds een ander aanspreekpunt krijgt.",
      ],
    },
    {
      heading: "Wat je van ons mag verwachten",
      paragraphs: [
        "Een site in het Nederlands, bereikbaar op telefoon en computer, met een contactformulier en de verplichte bedrijfsgegevens in de footer.",
        "We leveren geen loze beloftes over de eerste plek in Google. Wel een site die zoekmachines kunnen lezen en die jij zelf kunt bijhouden.",
      ],
    },
  ] satisfies ProseSection[],
  cta: {
    title: "Wil je weten of we passen?",
    text: "Stuur een bericht met wat je verkoopt en wat de site moet opleveren. Dan zeggen we eerlijk of we kunnen helpen.",
    cta: { label: "Neem contact op", href: "/contact" },
  } satisfies CtaContent,
};
