import type { PageMeta } from "@/content/types";
import type { TextPart } from "@/content/shared";
import { pexels } from "@/content/shared";

export const homeContent = {
  metadata: {
    title: "Boekhouder in Leidschendam en Den Haag",
    description:
      "Een vaste boekhouder voor ZZP’ers, ondernemers en particulieren in Leidschendam-Voorburg en Den Haag. U levert aan, wij boeken, controleren en doen de aangifte.",
  } satisfies PageMeta,
  hero: {
    eyebrow: "Administratiekantoor",
    place: "Leidschendam · Den Haag",
    lines: ["Een vaste boekhouder", "die meedenkt met"],
    lead: "Voor ZZP’ers, MKB-ondernemers en particulieren in Leidschendam-Voorburg, Den Haag en omgeving. U levert aan, wij boeken, controleren en verzorgen de aangiften.",
    primary: "Kennismaking plannen",
    secondary: "Bel een vestiging",
    image: pexels("7648029"),
    imageAlt: "Gesprek over administratie aan tafel",
    cardTitle: "Scannen, mailen",
    cardLabel: "& wij doen de rest",
  },
  services: {
    label: "01 — Diensten",
    heading: [
      { text: "Van losse bonnetjes tot " },
      { text: "complete jaarrekening", accent: true },
    ] satisfies TextPart[],
    intro:
      "Hoe uw administratie er ook uitziet — een schoenendoos of keurige mappen — wij nemen het werk uit handen.",
  },
  method: {
    label: "02 — Werkwijze",
    heading: [
      { text: "Vier stappen naar " },
      { text: "rust in uw cijfers", accent: true },
    ] satisfies TextPart[],
    intro:
      "Geen ingewikkelde trajecten. We beginnen met een gesprek en bouwen van daaruit een ritme dat bij u past.",
  },
  why: {
    label: "03 — Waarom Van Boheemen",
  },
  reviews: {
    label: "04 — Klanten",
    note: "plek voor echte reviews",
  },
  about: {
    label: "05 — Over ons",
    heading: [
      { text: "Een klein team dat uw naam kent — " },
      { text: "en uw cijfers", accent: true },
    ] satisfies TextPart[],
    intro:
      "Wij werken met Exact Online en Snelstart, maar vooral met aandacht. We denken met u mee over keuzes die ertoe doen.",
    link: "Maak kennis met het team",
  },
  offices: {
    label: "06 — Vestigingen",
    heading: [
      { text: "Twee adressen, " },
      { text: "één vertrouwd gezicht", accent: true },
    ] satisfies TextPart[],
  },
};
