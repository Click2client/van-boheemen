import { site } from "@/config/site";
import type {
  CtaContent,
  FaqContent,
  HeroContent,
  PageMeta,
  ServicesContent,
} from "@/content/types";

export const homeContent = {
  metadata: {
    title: "Websites die nieuwe klanten opleveren",
    description:
      "Voorbeeldbedrijf maakt overzichtelijke websites voor kleine bedrijven. Bezoekers zien meteen wat je doet en kunnen je eenvoudig een bericht sturen.",
  } satisfies PageMeta,
  hero: {
    eyebrow: site.legalName,
    title: "Websites die nieuwe klanten opleveren",
    intro:
      "Wij maken een heldere site voor ondernemers die online meer aanvragen willen. Een vaste contactpersoon, teksten in gewone taal en een formulier dat aankomt.",
    primaryCta: { label: "Neem contact op", href: "/contact" },
    secondaryCta: { label: "Bekijk de diensten", href: "/diensten" },
    highlights: [
      { value: "Amsterdam", label: "Voorbeeldvestiging" },
      { value: "1 aanspreekpunt", label: "Van eerste schets tot live" },
      { value: "Op maat", label: "Geen standaardpakket" },
    ],
    image: {
      src: "/images/home/illustratie-voorbeeld.png",
      alt: "Abstracte illustratie in donkerblauw en roestbruin. Vervang dit door een eigen foto.",
      width: 1200,
      height: 800,
    },
  } satisfies HeroContent,
  services: {
    title: "Wat we voor je doen",
    intro:
      "Drie onderdelen die op deze voorbeeldpagina staan. Pas de titels en teksten aan op het aanbod van de klant.",
    items: [
      {
        title: "Een website die leest als een goed gesprek",
        description:
          "De pagina's zijn kort, de knoppen zijn duidelijk en de site werkt op een telefoon. Bezoekers snappen binnen een minuut wat je aanbiedt.",
      },
      {
        title: "Teksten die je later zelf kunt bijstellen",
        description:
          "Alle zinnen staan los van de opmaak. Een prijswijziging of een nieuwe dienst pas je aan zonder de rest van de pagina overhoop te halen.",
      },
      {
        title: "Techniek die Google kan lezen",
        description:
          "Elke pagina heeft een eigen titel en omschrijving, een sitemap en gegevens die zoekmachines begrijpen. Zo kan de site netjes worden aangeboden.",
      },
    ],
  } satisfies ServicesContent,
  faq: {
    title: "Vragen die we vaak krijgen",
    intro: "De antwoorden hieronder zijn voorbeelden. Vervang ze door de vragen van echte klanten.",
    items: [
      {
        question: "Hoe snel kunnen jullie starten?",
        answer:
          "In dit voorbeeld starten we binnen twee weken. De echte doorlooptijd hangt af van de teksten en foto's die je aanlevert.",
      },
      {
        question: "Wat heb ik zelf nodig?",
        answer:
          "Een korte uitleg van je diensten, een paar foto's en je bedrijfsgegevens. KvK-nummer, btw-nummer en adres horen daarbij.",
      },
      {
        question: "Kan ik later teksten wijzigen?",
        answer:
          "Ja. Kleine wijzigingen kun je doorgeven. De teksten van deze site staan in losse bestanden, zodat de opmaak blijft staan.",
      },
      {
        question: "In welke plaatsen werken jullie?",
        answer:
          "Dit voorbeeld noemt Amsterdam en omgeving. Vul hier het echte werkgebied van de klant in.",
      },
    ],
  } satisfies FaqContent,
  cta: {
    title: "Vertel waar je een site voor nodig hebt",
    text: "Stuur een kort bericht. We reageren op werkdagen en denken mee over wat de site moet doen.",
    cta: { label: "Naar het contactformulier", href: "/contact" },
  } satisfies CtaContent,
};
