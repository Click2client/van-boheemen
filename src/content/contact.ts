import type { PageMeta } from "@/content/types";

export const contactContent = {
  metadata: {
    title: "Neem contact op voor een gesprek",
    description:
      "Stuur een bericht naar Voorbeeldbedrijf. We reageren op werkdagen. Liever bellen? Het telefoonnummer en adres staan op deze pagina. We denken mee.",
  } satisfies PageMeta,
  heading: "Contact",
  intro:
    "Vertel kort wat je nodig hebt. Velden met 'verplicht' moeten worden ingevuld. We gebruiken je gegevens alleen om te reageren.",
  breadcrumb: "Contact",
  detailsTitle: "Bedrijfsgegevens",
  form: {
    title: "Stuur een bericht",
    name: "Naam (verplicht)",
    email: "E-mailadres (verplicht)",
    phone: "Telefoonnummer",
    message: "Bericht (verplicht)",
    honeypot: "Website",
    submit: "Verstuur bericht",
    sending: "Bezig met versturen…",
    privacyText: "Door te versturen ga je akkoord met de verwerking zoals beschreven in de",
    privacyLink: "privacyverklaring",
    success: "Bedankt. Je bericht is verstuurd. We reageren zo snel mogelijk.",
    invalid: "Controleer de gemarkeerde velden en probeer het opnieuw.",
    turnstileMissing: "Bevestig eerst de spamcontrole onder het formulier.",
    turnstileFailed:
      "De spamcontrole is niet gelukt. Vernieuw de pagina en probeer het opnieuw.",
    notConfigured:
      "Verzenden is nog niet ingesteld. Je bericht is niet verstuurd. Mail of bel ons via",
    sendFailed:
      "Het bericht kon niet worden verstuurd. Je vraag is niet aangekomen. Mail of bel ons via",
    turnstileNotReady:
      "De spamcontrole is nog niet ingesteld op deze site. Mail of bel ons via",
    errors: {
      name: "Vul je naam in, met minimaal 2 tekens.",
      nameLength: "Deze naam is te lang. Gebruik maximaal 100 tekens.",
      email: "Vul een geldig e-mailadres in.",
      phone: "Dit telefoonnummer is te lang. Gebruik maximaal 30 tekens.",
      message: "Schrijf een bericht van minimaal 10 tekens.",
      messageLength: "Dit bericht is te lang. Gebruik maximaal 5000 tekens.",
    },
  },
};
