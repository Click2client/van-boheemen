import type { PageMeta } from "@/content/types";
import type { TextPart } from "@/content/shared";

export const trafficContent = {
  metadata: {
    title: "Verkeerssituatie Leidschendam",
    description:
      "De bereikbaarheid van Doctor van Noortstraat 134 in Leidschendam is gewijzigd. Plan uw route of bel de vestiging voor u langskomt.",
  } satisfies PageMeta,
  eyebrow: "Let op",
  breadcrumb: "Verkeerssituatie Leidschendam",
  headline: [
    { text: "Verkeerssituatie" },
    { text: "gewijzigd", accent: true },
  ] satisfies TextPart[],
  lead: "De bereikbaarheid van onze vestiging aan de Doctor van Noortstraat is gewijzigd. Hieronder leest u hoe u ons het beste kunt bereiken.",
  heading: "Wat is er veranderd?",
  note: "ruimte voor toelichting: wat is er gewijzigd, sinds wanneer, aanbevolen aanrijroute, parkeren en bereikbaarheid met OV",
  route: "Plan route",
  call: "Bel Leidschendam",
  mapZoom:
    "https://maps.google.com/maps?q=Doctor+van+Noortstraat+134,+2266+HB+Leidschendam&z=16&output=embed",
};
