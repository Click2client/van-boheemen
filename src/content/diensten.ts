import type { CtaContent, PageMeta, ServiceItem } from "@/content/types";

export const servicesContent = {
  metadata: {
    title: "Diensten voor een betere website",
    description:
      "Van een nieuwe site tot teksten en een formulier dat binnenkomt. Bekijk de voorbeelddiensten en pas ze aan op het aanbod van de klant. Vraag een voorstel aan.",
  } satisfies PageMeta,
  heading: "Diensten",
  intro:
    "Hier staan drie voorbeelddiensten. Houd per dienst één belofte aan en schrijf wat de klant ervan merkt, niet alleen wat er technisch gebeurt.",
  breadcrumb: "Diensten",
  items: [
    {
      title: "Nieuwe website",
      description:
        "Een compacte site met de pagina's die je nodig hebt: home, over ons, diensten en contact. Inclusief een ontwerp in je kleuren en een formulier.",
    },
    {
      title: "Teksten en pagina-opbouw",
      description:
        "We herschrijven bestaande teksten of beginnen bij een leeg scherm. Elke pagina krijgt één onderwerp, een duidelijke kop en een volgende stap.",
    },
    {
      title: "Onderhoud na livegang",
      description:
        "Na de lancering helpen we met kleine wijzigingen, een nieuwe dienst of een controle of het formulier nog aankomt. Vul hier de echte afspraken in.",
    },
  ] satisfies ServiceItem[],
  cta: {
    title: "Welke dienst heb je nodig?",
    text: "Je hoeft het nog niet precies te weten. Beschrijf je situatie, dan stellen we een passende aanpak voor.",
    cta: { label: "Bespreek je situatie", href: "/contact" },
  } satisfies CtaContent,
};
