import { site } from "@/config/site";
import { legalNotice } from "@/content/ui";
import type { LegalSection, PageMeta } from "@/content/types";

export const termsContent = {
  metadata: {
    title: "Algemene voorwaarden voor opdrachten",
    description:
      "Voorbeeldstructuur voor de algemene voorwaarden van Voorbeeldbedrijf. Vervang elke paragraaf door de voorwaarden die de klant echt hanteert.",
  } satisfies PageMeta,
  heading: "Algemene voorwaarden",
  intro: `Deze voorwaarden zijn een voorbeeld voor opdrachten van ${site.legalName}. Gebruik ze niet ongewijzigd.`,
  breadcrumb: "Algemene voorwaarden",
  notice: legalNotice,
  sections: [
    {
      heading: "Toepasselijkheid",
      paragraphs: [
        "Voorbeeld: deze voorwaarden gelden voor offertes en opdrachten van de klant. Beschrijf hier op welke diensten ze van toepassing zijn en vanaf welk moment.",
      ],
    },
    {
      heading: "Aanbod en overeenkomst",
      paragraphs: [
        "Voorbeeld: een offerte is geldig tot de datum die erop staat. De overeenkomst komt tot stand als de opdracht schriftelijk of per e-mail is bevestigd.",
      ],
    },
    {
      heading: "Prijzen en betaling",
      paragraphs: [
        "Voorbeeld: prijzen zijn in euro's en exclusief btw, tenzij anders vermeld. Zet hier de echte betalingstermijn en wat er gebeurt bij te late betaling.",
      ],
    },
    {
      heading: "Uitvoering",
      paragraphs: [
        "Voorbeeld: de klant levert op tijd de teksten, foto's en bedrijfsgegevens aan. Vertraging daardoor schuift de oplevering op.",
      ],
    },
    {
      heading: "Aansprakelijkheid",
      paragraphs: [
        "Voorbeeld: beperk de aansprakelijkheid alleen op een manier die voor deze branche is toegestaan. Laat deze paragraaf controleren voordat de site live gaat.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [
        `Vragen over deze voorwaarden: ${site.contact.email} of ${site.contact.phoneDisplay}.`,
      ],
    },
  ] satisfies LegalSection[],
};
