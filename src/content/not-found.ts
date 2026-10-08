import type { PageMeta } from "@/content/types";

export const notFoundContent = {
  metadata: {
    title: "Pagina niet gevonden",
    description:
      "Deze pagina bestaat niet of is verplaatst. Ga terug naar de homepage van Voorbeeldbedrijf.",
  } satisfies PageMeta,
  heading: "Deze pagina bestaat niet",
  intro:
    "Het adres klopt niet, of de pagina is verplaatst. Ga terug naar de homepage en kies daar een onderwerp.",
  homeLink: "Naar de homepage",
};
