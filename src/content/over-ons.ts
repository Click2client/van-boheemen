import type { PageMeta } from "@/content/types";
import type { TextPart } from "@/content/shared";
import { pexels } from "@/content/shared";

export const aboutContent = {
  metadata: {
    title: "Over ons administratiekantoor",
    description:
      "Een klein administratiekantoor in Leidschendam en Den Haag. U spreekt steeds dezelfde mensen, die uw dossier kennen en met u meedenken.",
  } satisfies PageMeta,
  eyebrow: "Over ons",
  breadcrumb: "Over ons",
  headline: [
    { text: "Een vertrouwd gezicht" },
    { text: "voor uw cijfers", accent: true },
  ] satisfies TextPart[],
  lead: "Wij zijn een administratiekantoor met vestigingen in Leidschendam en Den Haag. Klein genoeg om u te kennen, ervaren genoeg om alles voor u te regelen.",
  image: pexels("7888656", 1800),
  imageAlt: "Kantoorinterieur met daglicht",
  story: {
    label: "Ons verhaal",
    heading: [
      { text: "U hoeft niets " },
      { text: "twee keer", accent: true },
      { text: " uit te leggen" },
    ] satisfies TextPart[],
    paragraphs: [
      "Wij verzorgen de administratie van ZZP’ers, MKB-ondernemers en particulieren uit Leidschendam-Voorburg, Den Haag en omgeving.",
      "Ons uitgangspunt is eenvoudig: u spreekt steeds dezelfde mensen, die uw dossier kennen. Zo denken we op tijd met u mee — over keuzes die ertoe doen, niet alleen over cijfers.",
    ],
    note: "ruimte voor eigen historie: oprichting, achtergrond, wie zit erachter",
  },
  whyLabel: "Waar wij voor staan",
  team: {
    label: "Het team",
    heading: [
      { text: "De mensen " },
      { text: "achter uw administratie", accent: true },
    ] satisfies TextPart[],
    intro: "Bij ons heeft u één vast aanspreekpunt. Maak alvast kennis.",
    roleSuffix: "vestiging",
  },
  offices: {
    label: "Vestigingen",
    heading: [
      { text: "Twee adressen, " },
      { text: "één vertrouwd gezicht", accent: true },
    ] satisfies TextPart[],
  },
};
