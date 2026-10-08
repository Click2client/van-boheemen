export type TextPart = {
  text: string;
  accent?: boolean;
};

export type Step = {
  number: string;
  title: string;
  description: string;
};

export type Person = {
  name: string;
  role: string;
  image: string;
  alt: string;
};

export const ctaContent = {
  lines: [
    { text: "Zullen we" },
    { text: "kennismaken?", accent: true },
  ] satisfies TextPart[],
  text: "Een eerste gesprek is vrijblijvend. Op kantoor in Leidschendam of Den Haag, of telefonisch — wat u prettig vindt.",
  button: "Kennismaking plannen",
  href: "/contact#formulier",
};

export const reasons = [
  {
    number: "01",
    title: "Persoonlijk",
    description: "Geen standaardantwoorden, maar advies dat past bij uw situatie.",
  },
  {
    number: "02",
    title: "Lokaal",
    description: "Geworteld in Leidschendam-Voorburg en Den Haag. We kennen de regio.",
  },
  {
    number: "03",
    title: "Vast aanspreekpunt",
    description: "U spreekt steeds dezelfde mensen. Een belletje is genoeg.",
  },
  {
    number: "04",
    title: "Twee vestigingen",
    description: "Leidschendam of Den Haag — of u levert gewoon digitaal aan.",
  },
];

export const whyStatement: TextPart[] = [
  { text: "Geen anoniem kantoor. U spreekt steeds " },
  { text: "dezelfde mensen", accent: true },
  { text: ", die uw dossier kennen — " },
  { text: "om de hoek", accent: true },
  { text: "." },
];

export const homeSteps: Step[] = [
  {
    number: "01",
    title: "Kennismaken",
    description: "We bespreken uw situatie en wensen. Vrijblijvend, op kantoor of telefonisch.",
  },
  {
    number: "02",
    title: "Aanleveren",
    description: "U levert digitaal aan via de scan-app of e-mail. Een schoenendoos mag ook.",
  },
  {
    number: "03",
    title: "Boeken & controleren",
    description: "Wij verwerken uw administratie en controleren alles zorgvuldig.",
  },
  {
    number: "04",
    title: "Inzicht & aangifte",
    description: "U heeft 24/7 online inzicht. Wij verzorgen de aangiften en de jaarrekening.",
  },
];

export const marqueeItems = [
  "Leidschendam-Voorburg",
  "Scannen, mailen & wij doen de rest",
  "Den Haag",
  "Vast aanspreekpunt",
  "Leiden",
  "24/7 online inzicht",
  "Zoetermeer",
  "Exact Online & Snelstart",
];

export const reviews = [
  {
    quote: "Hier komt een korte, echte klantreview van maximaal twee zinnen.",
    who: "Naam · ZZP’er, Leidschendam",
  },
  {
    quote: "Ruimte voor een tweede echte review, liefst over het vaste aanspreekpunt.",
    who: "Naam · MKB-ondernemer, Den Haag",
  },
  {
    quote: "Ruimte voor een derde echte review, bijvoorbeeld van een particulier.",
    who: "Naam · Particulier, Voorburg",
  },
];

export const rotatingWords = ["ZZP’ers.", "ondernemers.", "particulieren.", "starters."];

export const flowLabels = [
  "Bon gescand in de app",
  "Geboekt in uw administratie",
  "Gecontroleerd",
  "Klaar voor aangifte",
];

const teamPhotos = ["31987756", "6670986", "10031281", "30767572"];

export const team: Person[] = teamPhotos.map((id) => ({
  name: "Naam teamlid",
  role: "Functie",
  image: pexels(id),
  alt: "Tijdelijke voorbeeldfoto van een teamlid",
}));

export function pexels(id: string, width = 1400): string {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
}
