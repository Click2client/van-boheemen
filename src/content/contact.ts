import type { PageMeta } from "@/content/types";
import type { TextPart } from "@/content/shared";

export const contactContent = {
  metadata: {
    title: "Contact en kennismaking plannen",
    description:
      "Bel Leidschendam of Den Haag, of plan een vrijblijvende kennismaking. Wij zijn bereikbaar van maandag tot vrijdag, van 09.00 tot 18.00 uur.",
  } satisfies PageMeta,
  eyebrow: "Contact",
  breadcrumb: "Contact",
  headline: [
    { text: "Even bellen" },
    { text: "of langskomen?", accent: true },
  ] satisfies TextPart[],
  lead: "Wij zijn bereikbaar van maandag tot en met vrijdag, van 09.00 tot 18.00 uur. Bel de vestiging van uw voorkeur of plan hieronder een kennismaking.",
  formIntro: {
    label: "Kennismaking",
    heading: [
      { text: "Vertel ons kort " },
      { text: "waar u mee zit", accent: true },
    ] satisfies TextPart[],
    text: "Een eerste gesprek is vrijblijvend. Op kantoor in Leidschendam of Den Haag, of telefonisch — wat u prettig vindt.",
    weekday: "Maandag – vrijdag",
    weekdayHours: "09.00 – 18.00",
    weekend: "Zaterdag – zondag",
    weekendHours: "Gesloten",
  },
  offices: {
    label: "Vestigingen",
    heading: [
      { text: "Twee adressen, " },
      { text: "één vertrouwd gezicht", accent: true },
    ] satisfies TextPart[],
  },
  form: {
    name: "Naam",
    nameHint: "(verplicht)",
    company: "Bedrijfsnaam",
    companyHint: "(optioneel)",
    email: "E-mailadres",
    emailHint: "(verplicht)",
    phone: "Telefoonnummer",
    location: "Voorkeur vestiging",
    subject: "Waar gaat het over?",
    message: "Bericht",
    messagePlaceholder: "Bijvoorbeeld: ik start binnenkort als ZZP’er en zoek iemand voor mijn boekhouding.",
    honeypot: "Website",
    privacy: "Wij gebruiken uw gegevens alleen om contact met u op te nemen.",
    privacyLink: "privacyverklaring",
    submit: "Verstuur aanvraag",
    sending: "Bezig met versturen…",
    successTitle: "Dank u wel.",
    successAccent: "We nemen contact met u op.",
    successText: "Heeft u haast? Bel gerust direct.",
    again: "Nog een bericht sturen",
    invalid: "Controleer de gemarkeerde velden en probeer het opnieuw.",
    turnstileMissing: "Bevestig eerst de spamcontrole onder het formulier.",
    turnstileFailed: "De spamcontrole is niet gelukt. Vernieuw de pagina en probeer het opnieuw.",
    notConfigured: "Verzenden is nog niet ingesteld. Uw bericht is niet verstuurd. Bel ons via",
    sendFailed: "Het bericht kon niet worden verstuurd. Uw vraag is niet aangekomen. Bel ons via",
    turnstileNotReady: "De spamcontrole is nog niet ingesteld op deze site. Bel ons via",
    errors: {
      name: "Vul uw naam in, met minimaal 2 tekens.",
      nameLength: "Deze naam is te lang. Gebruik maximaal 100 tekens.",
      email: "Vul een geldig e-mailadres in.",
      phone: "Dit telefoonnummer is te lang. Gebruik maximaal 30 tekens.",
      company: "Deze bedrijfsnaam is te lang. Gebruik maximaal 120 tekens.",
      message: "Dit bericht is te lang. Gebruik maximaal 5000 tekens.",
      location: "Kies een vestiging.",
      subject: "Kies waar het over gaat.",
    },
  },
};
