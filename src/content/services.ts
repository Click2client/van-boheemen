import type { PageMeta } from "@/content/types";
import { pexels, type Step, type TextPart } from "@/content/shared";

export type ServiceBlock = {
  label: string;
  heading: TextPart[];
  intro?: string;
};

export type AudienceCard = {
  number: string;
  title: string;
  description: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  metadata: PageMeta;
  headline: TextPart[];
  lead: string;
  does: ServiceBlock & { items: string[] };
  steps: ServiceBlock & { items: Step[] };
  audience: ServiceBlock & { items: AudienceCard[] };
  faqs: ServiceFaq[];
  related: string[];
};

const priceAnswer =
  "Dat hangt af van uw situatie en de omvang van het werk. Na een kennismaking ontvangt u een heldere offerte, zonder verrassingen achteraf.";

const faqHeading: TextPart[] = [
  { text: "Goed om " },
  { text: "te weten", accent: true },
];

function service(input: Omit<Service, "image"> & { photoId: string }): Service {
  const { photoId, ...rest } = input;
  return { ...rest, image: pexels(photoId, 1800) };
}

export const services: Service[] = [
  service({
    slug: "scannen-mailen",
    number: "01",
    title: "Scannen, mailen & wij doen de rest",
    description:
      "U scant of fotografeert uw bonnen en facturen met de scan-app. Wij boeken ze in en houden uw administratie bij.",
    photoId: "7680681",
    imageAlt: "Bonnetje op een bureau, klaar om te scannen",
    metadata: {
      title: "Scannen en mailen van uw administratie",
      description:
        "Fotografeer of mail uw bonnen en facturen. Wij boeken ze in en houden uw administratie bij, vanuit Leidschendam of Den Haag.",
    },
    headline: [
      { text: "Scannen, mailen" },
      { text: "& wij doen de rest", accent: true },
    ],
    lead: "U fotografeert of scant uw bonnen en facturen met de scan-app, of stuurt ze per e-mail. Wij boeken ze in en houden uw administratie bij.",
    does: {
      label: "Wat wij voor u doen",
      heading: [
        { text: "U levert aan, " },
        { text: "wij nemen het over", accent: true },
      ],
      intro: "Geen mappen, geen schoenendozen. Zo blijft uw administratie bij zonder dat het u tijd kost.",
      items: [
        "Aanleveren via de scan-app",
        "Of gewoon doorsturen per e-mail",
        "Inboeken en verwerken door ons",
        "Uw stukken digitaal bij elkaar",
        "Online inzicht in uw cijfers",
        "Eén vaste contactpersoon",
      ],
    },
    steps: {
      label: "Zo werkt het",
      heading: [
        { text: "Drie stappen, " },
        { text: "nul gedoe", accent: true },
      ],
      items: [
        { number: "01", title: "Scannen", description: "Maak met de scan-app een foto van uw bon of factuur." },
        { number: "02", title: "Mailen", description: "Digitale facturen stuurt u gewoon door per e-mail." },
        { number: "03", title: "Wij doen de rest", description: "Wij boeken alles in en houden u op de hoogte." },
      ],
    },
    audience: {
      label: "Voor wie",
      heading: [
        { text: "Voor wie " },
        { text: "is dit?", accent: true },
      ],
      items: [
        { number: "01", title: "ZZP’ers", description: "Bonnetjes direct scannen in plaats van verzamelen tot het kwartaal om is." },
        { number: "02", title: "MKB-ondernemers", description: "Ook bij veel facturen blijft aanleveren eenvoudig en overzichtelijk." },
        { number: "03", title: "Drukke agenda’s", description: "Voor iedereen die administratie liever uitbesteedt dan uitstelt." },
      ],
    },
    faqs: [
      { question: "Hoe kom ik aan de scan-app?", answer: "Bij de start zorgen wij dat u toegang krijgt, en we leggen u uit hoe het werkt." },
      { question: "Moet ik de originele bonnen bewaren?", answer: "Voor uw administratie geldt een fiscale bewaarplicht van zeven jaar. Wij bespreken bij de start hoe u dat het handigst regelt." },
      { question: "Wat kost het?", answer: priceAnswer },
    ],
    related: ["boeken-administratie", "controleren-administratie", "belastingaangifte"],
  }),
  service({
    slug: "boeken-administratie",
    number: "02",
    title: "Boeken administratie",
    description:
      "Wij verwerken uw volledige administratie in Exact Online of Snelstart, zodat uw cijfers altijd actueel zijn.",
    photoId: "5900074",
    imageAlt: "Medewerker aan een bureau",
    metadata: {
      title: "Boeken van uw administratie",
      description:
        "Wij verwerken uw administratie in Exact Online of Snelstart. U levert aan, uw cijfers blijven actueel en klaar voor de aangifte.",
    },
    headline: [
      { text: "Boeken" },
      { text: "administratie", accent: true },
    ],
    lead: "Wij verwerken uw volledige administratie in Exact Online of Snelstart, zodat uw cijfers altijd actueel zijn — en u er geen omkijken naar heeft.",
    does: {
      label: "Wat wij voor u doen",
      heading: [
        { text: "Alles geboekt, " },
        { text: "alles klopt", accent: true },
      ],
      intro: "U levert aan, wij doen de rest. Zo is uw administratie altijd klaar voor de aangifte en de jaarrekening.",
      items: [
        "Inboeken van inkoop- en verkoopfacturen",
        "Verwerken van bankmutaties",
        "Bijhouden van debiteuren en crediteuren",
        "Voorbereiden van de btw-aangifte",
        "Online inzicht via Exact Online of Snelstart",
        "Eén vaste contactpersoon",
      ],
    },
    steps: {
      label: "Zo werkt het",
      heading: [
        { text: "In drie stappen " },
        { text: "van bon tot inzicht", accent: true },
      ],
      intro: "Geen ingewikkelde systemen. U kiest zelf hoe u aanlevert.",
      items: [
        { number: "01", title: "Aanleveren", description: "U scant uw bonnen en facturen met de scan-app of stuurt ze per e-mail." },
        { number: "02", title: "Wij boeken", description: "Wij verwerken alles in uw administratie en controleren de aansluiting met de bank." },
        { number: "03", title: "U heeft inzicht", description: "Uw cijfers zijn online altijd actueel. Vragen? U belt uw vaste contactpersoon." },
      ],
    },
    audience: {
      label: "Voor wie",
      heading: [
        { text: "Voor iedereen die " },
        { text: "liever onderneemt", accent: true },
      ],
      items: [
        { number: "01", title: "ZZP’ers", description: "U wilt ondernemen, niet boekhouden. Wij houden uw cijfers bij, u houdt overzicht." },
        { number: "02", title: "MKB-ondernemers", description: "Meer facturen, personeel, meer verplichtingen. Wij zorgen dat alles op tijd en correct verwerkt is." },
        { number: "03", title: "Starters", description: "Vanaf de eerste factuur een administratie die klopt — en iemand die meekijkt." },
      ],
    },
    faqs: [
      { question: "Met welk boekhoudpakket werkt u?", answer: "Wij werken met Exact Online en Snelstart. Gebruikt u al een ander pakket? Neem contact op, dan kijken we samen wat het handigst is." },
      { question: "Hoe lever ik mijn administratie aan?", answer: "Het makkelijkst via de scan-app of per e-mail. Liever op papier? Dat kan ook: u brengt het langs in Leidschendam of Den Haag." },
      { question: "Hoe vaak wordt mijn administratie bijgewerkt?", answer: "In overleg: per maand of per kwartaal, afgestemd op uw btw-aangifte en uw wensen." },
      { question: "Wat kost het?", answer: "Dat hangt af van de omvang van uw administratie. Na een kennismaking ontvangt u een heldere offerte, zonder verrassingen achteraf." },
    ],
    related: ["controleren-administratie", "jaarrekening", "belastingaangifte"],
  }),
  service({
    slug: "controleren-administratie",
    number: "03",
    title: "Controleren van zelfgeboekte administratie",
    description:
      "Boekt u zelf? Wij controleren uw werk, zodat alles klopt en klaar is voor de jaarrekening.",
    photoId: "8152735",
    imageAlt: "Twee mensen bekijken samen een uitdraai",
    metadata: {
      title: "Controle van zelfgeboekte administratie",
      description:
        "Boekt u zelf? Wij controleren uw boekhouding, de bankaansluiting en de btw, zodat alles klopt voor de jaarrekening.",
    },
    headline: [
      { text: "Controle van" },
      { text: "uw eigen boekhouding", accent: true },
    ],
    lead: "Boekt u zelf? Wij controleren uw werk, zodat alles klopt en klaar is voor de jaarrekening en de aangifte.",
    does: {
      label: "Wat wij voor u doen",
      heading: [
        { text: "Zelf boeken, " },
        { text: "met een vangnet", accent: true },
      ],
      intro: "U houdt de regie, wij kijken mee. Fouten vinden we voordat ze geld kosten.",
      items: [
        "Controle van boekingen en grootboek",
        "Aansluiting met uw bankafschriften",
        "Controle van de btw-boekingen",
        "Correcties waar nodig, met uitleg",
        "Tips om het zelf nog beter te doen",
        "Eén vaste contactpersoon",
      ],
    },
    steps: {
      label: "Zo werkt het",
      heading: [
        { text: "In drie stappen " },
        { text: "zeker van uw cijfers", accent: true },
      ],
      items: [
        { number: "01", title: "U boekt", description: "U houdt uw administratie zelf bij in uw eigen pakket." },
        { number: "02", title: "Wij controleren", description: "Wij lopen alles na en corrigeren waar nodig." },
        { number: "03", title: "Klaar voor de jaarrekening", description: "Uw administratie is op orde voor jaarrekening en aangifte." },
      ],
    },
    audience: {
      label: "Voor wie",
      heading: [
        { text: "Voor wie " },
        { text: "is dit?", accent: true },
      ],
      items: [
        { number: "01", title: "ZZP’ers", description: "U boekt graag zelf, maar wilt zeker weten dat het klopt." },
        { number: "02", title: "MKB-ondernemers", description: "Een eigen administrateur, met een frisse blik van buitenaf." },
        { number: "03", title: "Starters", description: "Leer het zelf, met iemand die meekijkt en uitlegt." },
      ],
    },
    faqs: [
      { question: "Hoe vaak laat ik mijn administratie controleren?", answer: "Dat stemmen we af op uw situatie, bijvoorbeeld per kwartaal rond de btw-aangifte of eenmaal per jaar." },
      { question: "Met welk boekhoudpakket werkt u?", answer: "Wij werken met Exact Online en Snelstart. Gebruikt u een ander pakket? Neem contact op, dan kijken we wat mogelijk is." },
      { question: "Wat kost het?", answer: priceAnswer },
    ],
    related: ["boeken-administratie", "jaarrekening", "belastingaangifte"],
  }),
  service({
    slug: "jaarrekening",
    number: "04",
    title: "Opstellen jaarrekeningen",
    description: "Een heldere jaarrekening die inzicht geeft in uw resultaat en voldoet aan alle eisen.",
    photoId: "7691724",
    imageAlt: "Ordners in een kantoorkast",
    metadata: {
      title: "Opstellen van uw jaarrekening",
      description:
        "Een heldere jaarrekening met balans, resultaat en toelichting. Wij stellen hem op en nemen de uitkomsten met u door.",
    },
    headline: [
      { text: "Opstellen" },
      { text: "jaarrekening", accent: true },
    ],
    lead: "Een heldere jaarrekening die inzicht geeft in uw resultaat en voldoet aan alle eisen.",
    does: {
      label: "Wat wij voor u doen",
      heading: [
        { text: "Uw jaar " },
        { text: "helder in beeld", accent: true },
      ],
      intro: "Geen stapel cijfers, maar een jaarrekening die we samen met u doornemen.",
      items: [
        "Balans en winst-en-verliesrekening",
        "Toelichting op de cijfers",
        "Bespreking van de uitkomsten",
        "Basis voor uw belastingaangifte",
        "Deponering bij de KvK waar verplicht",
        "Eén vaste contactpersoon",
      ],
    },
    steps: {
      label: "Zo werkt het",
      heading: [
        { text: "Van boekjaar " },
        { text: "naar overzicht", accent: true },
      ],
      items: [
        { number: "01", title: "Afsluiten", description: "Wij sluiten het boekjaar af en verwerken de laatste boekingen." },
        { number: "02", title: "Opstellen", description: "Wij stellen de jaarrekening op volgens de geldende eisen." },
        { number: "03", title: "Bespreken", description: "We nemen de uitkomsten met u door — wat betekent dit voor u?" },
      ],
    },
    audience: {
      label: "Voor wie",
      heading: [
        { text: "Voor wie " },
        { text: "is dit?", accent: true },
      ],
      items: [
        { number: "01", title: "ZZP’ers", description: "Inzicht in uw resultaat, als basis voor uw aangifte." },
        { number: "02", title: "MKB-ondernemers", description: "Een jaarrekening die voldoet en waar u ook iets aan heeft." },
        { number: "03", title: "BV’s", description: "Inclusief de verplichtingen die bij uw rechtsvorm horen." },
      ],
    },
    faqs: [
      { question: "Ben ik verplicht een jaarrekening te laten maken?", answer: "Dat hangt af van uw rechtsvorm. Wij leggen u graag uit wat voor u geldt." },
      { question: "Wanneer moet de jaarrekening klaar zijn?", answer: "Dat verschilt per situatie. Wij plannen het met u in, op tijd voor de aangifte." },
      { question: "Wat kost het?", answer: priceAnswer },
    ],
    related: ["boeken-administratie", "belastingaangifte", "controleren-administratie"],
  }),
  service({
    slug: "belastingaangifte",
    number: "05",
    title: "Belastingaangifte",
    description:
      "Btw, inkomstenbelasting en vennootschapsbelasting: wij verzorgen uw aangiften op tijd en correct.",
    photoId: "9870132",
    imageAlt: "Gesprek aan een tafel",
    metadata: {
      title: "Belastingaangifte voor ondernemers",
      description:
        "Btw, inkomstenbelasting en vennootschapsbelasting. Wij stellen uw aangifte op, bespreken bijzonderheden en dienen in na uw akkoord.",
    },
    headline: [
      { text: "Belasting" },
      { text: "aangifte", accent: true },
    ],
    lead: "Btw, inkomstenbelasting en vennootschapsbelasting: wij verzorgen uw aangiften op tijd en correct.",
    does: {
      label: "Wat wij voor u doen",
      heading: [
        { text: "Op tijd, " },
        { text: "en goed", accent: true },
      ],
      intro: "Wij bewaken de termijnen. U hoeft er niet meer aan te denken.",
      items: [
        "Btw-aangifte",
        "Aangifte inkomstenbelasting voor ondernemers",
        "Aangifte vennootschapsbelasting",
        "Controle van voorlopige aanslagen",
        "Bewaking van alle termijnen",
        "Eén vaste contactpersoon",
      ],
    },
    steps: {
      label: "Zo werkt het",
      heading: [
        { text: "Zo regelen we " },
        { text: "uw aangifte", accent: true },
      ],
      items: [
        { number: "01", title: "Gegevens", description: "Wij verzamelen de gegevens uit uw administratie." },
        { number: "02", title: "Opstellen", description: "Wij stellen de aangifte op en bespreken bijzonderheden met u." },
        { number: "03", title: "Indienen", description: "Na uw akkoord dienen wij de aangifte in." },
      ],
    },
    audience: {
      label: "Voor wie",
      heading: [
        { text: "Voor wie " },
        { text: "is dit?", accent: true },
      ],
      items: [
        { number: "01", title: "ZZP’ers", description: "Btw en inkomstenbelasting, zonder zorgen over de deadline." },
        { number: "02", title: "MKB-ondernemers", description: "Alle aangiften op één plek geregeld." },
        { number: "03", title: "BV’s", description: "Ook de vennootschapsbelasting nemen wij voor u mee." },
      ],
    },
    faqs: [
      { question: "Kunt u uitstel aanvragen?", answer: "Neem contact op, dan bekijken we samen de mogelijkheden in uw situatie." },
      { question: "Wat moet ik aanleveren?", answer: "Als wij uw administratie voeren, hebben we vrijwel alles al. Anders sturen we u een overzicht van wat we nodig hebben." },
      { question: "Wat kost het?", answer: priceAnswer },
    ],
    related: ["jaarrekening", "aangifte-particulieren", "boeken-administratie"],
  }),
  service({
    slug: "aangifte-particulieren",
    number: "06",
    title: "Aangifte inkomstenbelasting particulieren",
    description:
      "Ook als particulier bent u welkom. Wij verzorgen uw aangifte en kijken wat er voor u mogelijk is.",
    photoId: "8152738",
    imageAlt: "Ontvangst aan de balie",
    metadata: {
      title: "Aangifte inkomstenbelasting voor particulieren",
      description:
        "Ook zonder eigen bedrijf bent u welkom. Wij verzorgen uw aangifte inkomstenbelasting en controleren de aanslag daarna.",
    },
    headline: [
      { text: "Aangifte voor" },
      { text: "particulieren", accent: true },
    ],
    lead: "Ook als particulier bent u welkom. Wij verzorgen uw aangifte inkomstenbelasting en kijken wat er voor u mogelijk is.",
    does: {
      label: "Wat wij voor u doen",
      heading: [
        { text: "Uw aangifte, " },
        { text: "zorgvuldig gedaan", accent: true },
      ],
      intro: "Persoonlijk, op kantoor of telefonisch. U weet waar u aan toe bent.",
      items: [
        "Aangifte inkomstenbelasting",
        "Controle van de vooraf ingevulde aangifte",
        "Aandacht voor aftrekposten",
        "Controle van de aanslag",
        "Gesprek op kantoor of telefonisch",
        "Eén vaste contactpersoon",
      ],
    },
    steps: {
      label: "Zo werkt het",
      heading: [
        { text: "Zo werkt het " },
        { text: "voor particulieren", accent: true },
      ],
      items: [
        { number: "01", title: "Gegevens", description: "U levert uw gegevens aan; wij sturen vooraf een overzicht." },
        { number: "02", title: "Aangifte", description: "Wij verzorgen de aangifte en bespreken de uitkomst met u." },
        { number: "03", title: "Aanslag", description: "Wij controleren de aanslag zodra die binnenkomt." },
      ],
    },
    audience: {
      label: "Voor wie",
      heading: [
        { text: "Voor wie " },
        { text: "is dit?", accent: true },
      ],
      items: [
        { number: "01", title: "Werknemers", description: "Een correcte aangifte, ook als uw situatie verandert." },
        { number: "02", title: "Gepensioneerden", description: "Persoonlijk geholpen, zonder digitaal gedoe." },
        { number: "03", title: "Fiscale partners", description: "Samen aangifte doen, zo gunstig mogelijk verdeeld." },
      ],
    },
    faqs: [
      { question: "Welke gegevens heb ik nodig?", answer: "Bijvoorbeeld jaaropgaven, gegevens van uw woning en hypotheek en uw bank- en spaarsaldi. Wij sturen u vooraf een overzicht." },
      { question: "Kan ik samen met mijn partner komen?", answer: "Zeker. Als fiscale partners doen we de aangiften graag samen." },
      { question: "Wat kost het?", answer: priceAnswer },
    ],
    related: ["belastingaangifte", "begeleiding-starters", "scannen-mailen"],
  }),
  service({
    slug: "loonadministratie",
    number: "07",
    title: "Loonadministratie",
    description: "Loonstroken, aangiften loonheffing en jaaropgaven voor uw personeel — zonder omkijken.",
    photoId: "7693184",
    imageAlt: "Ondernemer in een werkplaats",
    metadata: {
      title: "Loonadministratie voor uw personeel",
      description:
        "Loonstroken, aangifte loonheffingen en jaaropgaven. U geeft wijzigingen door, wij verwerken de salarissen op tijd.",
    },
    headline: [
      { text: "Loon" },
      { text: "administratie", accent: true },
    ],
    lead: "Loonstroken, aangiften loonheffing en jaaropgaven voor uw personeel — zonder omkijken.",
    does: {
      label: "Wat wij voor u doen",
      heading: [
        { text: "Uw personeel " },
        { text: "goed geregeld", accent: true },
      ],
      intro: "U geeft wijzigingen door, wij zorgen voor de rest. Elke periode op tijd.",
      items: [
        "Loonstroken per periode",
        "Aangifte loonheffingen",
        "Jaaropgaven voor uw medewerkers",
        "Verwerking van mutaties",
        "Journaalpost voor uw boekhouding",
        "Eén vaste contactpersoon",
      ],
    },
    steps: {
      label: "Zo werkt het",
      heading: [
        { text: "Elke periode " },
        { text: "hetzelfde ritme", accent: true },
      ],
      items: [
        { number: "01", title: "Doorgeven", description: "U geeft wijzigingen en nieuwe medewerkers aan ons door." },
        { number: "02", title: "Verwerken", description: "Wij verwerken de salarissen en de loonheffingen." },
        { number: "03", title: "Klaar", description: "Loonstroken en aangifte zijn op tijd verzorgd." },
      ],
    },
    audience: {
      label: "Voor wie",
      heading: [
        { text: "Voor wie " },
        { text: "is dit?", accent: true },
      ],
      items: [
        { number: "01", title: "MKB-ondernemers", description: "Personeel in dienst, zonder zelf de loonregels bij te houden." },
        { number: "02", title: "Eerste werknemer", description: "Wij helpen u op weg bij uw eerste medewerker." },
        { number: "03", title: "DGA’s", description: "Ook uw eigen salaris via de BV regelen wij." },
      ],
    },
    faqs: [
      { question: "Wat moet ik doorgeven bij een nieuwe medewerker?", answer: "Wij sturen u een overzicht van de gegevens die we nodig hebben, zodat u niets vergeet." },
      { question: "Kan ik halverwege het jaar overstappen?", answer: "Dat kan. We bespreken samen hoe we de overstap zorgvuldig regelen." },
      { question: "Wat kost het?", answer: priceAnswer },
    ],
    related: ["boeken-administratie", "belastingaangifte", "jaarrekening"],
  }),
  service({
    slug: "begeleiding-starters",
    number: "08",
    title: "Begeleiding starters",
    description: "Van ondernemingsplan tot rechtsvorm: wij helpen u goed voorbereid van start.",
    photoId: "7651715",
    imageAlt: "Ondernemer bij een bedrijfspand",
    metadata: {
      title: "Begeleiding voor startende ondernemers",
      description:
        "Van ondernemingsplan tot rechtsvorm en de eerste administratie. Wij helpen u goed voorbereid van start in Leidschendam of Den Haag.",
    },
    headline: [
      { text: "Begeleiding" },
      { text: "starters", accent: true },
    ],
    lead: "Van ondernemingsplan tot rechtsvorm: wij helpen u goed voorbereid van start.",
    does: {
      label: "Wat wij voor u doen",
      heading: [
        { text: "Goed begonnen " },
        { text: "is half gewonnen", accent: true },
      ],
      intro: "Vanaf de eerste dag een administratie die klopt, en iemand die meedenkt.",
      items: [
        "Hulp bij uw ondernemingsplan",
        "Advies over de rechtsvorm",
        "Wat komt er kijken bij inschrijving",
        "Opzet van uw administratie",
        "Uitleg over btw en inkomstenbelasting",
        "Eén vaste contactpersoon",
      ],
    },
    steps: {
      label: "Zo werkt het",
      heading: [
        { text: "Van idee " },
        { text: "naar eigen bedrijf", accent: true },
      ],
      items: [
        { number: "01", title: "Kennismaken", description: "We bespreken uw plannen en wat u nodig heeft." },
        { number: "02", title: "Plan & opzet", description: "Samen werken we uw plan uit en zetten we de administratie op." },
        { number: "03", title: "Van start", description: "U onderneemt; wij blijven meekijken." },
      ],
    },
    audience: {
      label: "Voor wie",
      heading: [
        { text: "Voor wie " },
        { text: "is dit?", accent: true },
      ],
      items: [
        { number: "01", title: "Toekomstige ZZP’ers", description: "U wilt voor uzelf beginnen en weten waar u aan toe bent." },
        { number: "02", title: "Starters met personeel", description: "Vanaf het begin goed geregeld, ook met werknemers." },
        { number: "03", title: "Overstappers", description: "Van loondienst naar ondernemer, stap voor stap." },
      ],
    },
    faqs: [
      { question: "Welke rechtsvorm past bij mij?", answer: "Dat hangt af van uw plannen en verwachte omzet. Wij lopen de mogelijkheden met u door." },
      { question: "Moet ik btw rekenen?", answer: "Meestal wel, maar er zijn uitzonderingen. Wij bekijken wat voor u geldt." },
      { question: "Wat kost het?", answer: priceAnswer },
    ],
    related: ["scannen-mailen", "boeken-administratie", "belastingaangifte"],
  }),
];

export function getService(slug: string): Service | undefined {
  return services.find((item) => item.slug === slug);
}

export function relatedServices(service: Service): Service[] {
  return service.related
    .map((slug) => getService(slug))
    .filter((item): item is Service => item !== undefined);
}

export const serviceCardCta = "Bekijk deze dienst";

export const faqHeadingParts = faqHeading;

export const subjectChoices = [
  "Kennismaking",
  ...services.map((item) => item.title),
  "Iets anders",
] as const;

export const locationChoices = ["Leidschendam", "Den Haag", "Maakt niet uit"] as const;
