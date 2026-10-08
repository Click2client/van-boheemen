import { contactLine, formatAddress, site } from "@/config/site";
import type { PageMeta } from "@/content/types";
import type { TextPart } from "@/content/shared";

const offices = site.offices
  .map((office) => `${office.city}: ${formatAddress(office)} · ${office.phoneDisplay}`)
  .join("\n");

export const privacyContent = {
  metadata: {
    title: "Privacyverklaring en disclaimer",
    description:
      "Lees welke gegevens Administratiekantoor Van Boheemen verwerkt, waarom, hoe lang, en welke rechten u heeft. Dit is een concepttekst.",
  } satisfies PageMeta,
  eyebrow: "Juridisch",
  breadcrumb: "Privacy & disclaimer",
  headline: [
    { text: "Privacy" },
    { text: "& disclaimer", accent: true },
  ] satisfies TextPart[],
  lead: "Wij gaan zorgvuldig om met uw gegevens. Hieronder leest u welke gegevens wij verwerken, waarom, en welke rechten u heeft.",
  notice: "concepttekst — laten controleren vóór livegang",
  nav: [
    { href: "#privacy", label: "Privacyverklaring" },
    { href: "#disclaimer", label: "Disclaimer" },
    { href: "#gegevens", label: "Bedrijfsgegevens" },
  ],
  privacy: [
    {
      heading: "Wie zijn wij",
      paragraphs: [
        `${site.legalName} is verantwoordelijk voor de verwerking van uw persoonsgegevens zoals beschreven in deze verklaring. Wij zijn gevestigd aan de ${site.offices[0].street} in ${site.offices[0].locality} en aan de ${site.offices[1].street} in ${site.offices[1].locality}.`,
      ],
    },
    {
      heading: "Welke gegevens wij verwerken",
      paragraphs: [
        "Wij verwerken de gegevens die u zelf aan ons verstrekt, zoals uw naam, adres, telefoonnummer en e-mailadres, en de financiële gegevens die nodig zijn om onze diensten uit te voeren.",
        "Via het kennismakingsformulier vragen wij uw naam, e-mailadres en, als u die invult, uw bedrijfsnaam, telefoonnummer, voorkeur voor een vestiging, het onderwerp en uw bericht.",
        "De site kan daarnaast technische gegevens verwerken die nodig zijn om de pagina te tonen, zoals een IP-adres in serverlogboeken van de hosting.",
      ],
    },
    {
      heading: "Waarom wij uw gegevens verwerken",
      paragraphs: [
        "Wij gebruiken uw gegevens om contact met u op te nemen, om onze diensten uit te voeren — zoals het voeren van uw administratie en het verzorgen van aangiften — en om te voldoen aan onze wettelijke verplichtingen.",
        "Voor een bericht via het formulier is de grondslag het gerechtvaardigd belang om uw vraag te beantwoorden, of de stappen vóór een overeenkomst. Statistieken via Google Analytics lopen alleen nadat u daarvoor toestemming heeft gegeven. Laat de gekozen grondslagen juridisch controleren voordat de site live gaat.",
      ],
    },
    {
      heading: "Hoe lang wij gegevens bewaren",
      paragraphs: [
        "Wij bewaren uw gegevens niet langer dan nodig. Voor administratieve gegevens geldt een wettelijke bewaarplicht van zeven jaar.",
        "Berichten uit het formulier bewaren wij zo lang als nodig is om uw vraag af te handelen. De precieze termijn voor die berichten moet nog worden vastgelegd voordat de site live gaat.",
      ],
    },
    {
      heading: "Delen met derden",
      paragraphs: [
        "Wij verkopen geen gegevens. Voor de werking van de site kunnen gegevens worden verwerkt door partijen die een taak voor ons uitvoeren:",
      ],
      bullets: [
        "Vercel, voor het hosten van de website.",
        "Resend, voor het afleveren van e-mail uit het kennismakingsformulier.",
        "Cloudflare, voor de spamcontrole (Turnstile) op het formulier.",
        "Google, voor Tag Manager en Analytics, alleen na toestemming via de cookiemelder.",
        "Google Maps, voor de kaarten bij de vestigingen. Die kaarten kunnen cookies plaatsen.",
      ],
    },
    {
      heading: "Uw rechten",
      paragraphs: [
        "U heeft het recht om uw gegevens in te zien, te laten corrigeren of te laten verwijderen. U kunt ook vragen om beperking of overdracht, en bezwaar maken tegen een verwerking. Neem hiervoor contact met ons op via een van onze vestigingen.",
        "Wij kunnen vragen uw identiteit te bevestigen voordat wij een verzoek uitvoeren.",
      ],
    },
    {
      heading: "Klachten",
      paragraphs: [
        "Bent u het niet eens met hoe wij met uw gegevens omgaan, dan kunt u een klacht indienen bij de Autoriteit Persoonsgegevens.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [`Vragen over deze verklaring kunt u stellen via ${contactLine()}.`],
    },
  ],
  disclaimer: {
    heading: "Disclaimer",
    paragraphs: [
      "De informatie op deze website is met zorg samengesteld. Toch kunnen wij niet garanderen dat alle informatie altijd volledig en actueel is. Aan de inhoud van deze website kunnen geen rechten worden ontleend.",
    ],
  },
  company: {
    heading: "Bedrijfsgegevens",
    registration: `KvK ${site.kvk} · Btw ${site.vat}`,
    offices,
  },
};
