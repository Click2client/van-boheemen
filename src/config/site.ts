export type NavItem = {
  label: string;
  href: string;
};

export type SitePage = {
  path: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
};

export type Office = {
  city: string;
  street: string;
  postalCode: string;
  locality: string;
  phoneDisplay: string;
  phoneTel: string;
  phoneE164: string;
  routeUrl: string;
  mapUrl: string;
  trafficNotice: boolean;
};

const hasTerms = false;

const offices = [
  {
    city: "Leidschendam",
    street: "Doctor van Noortstraat 134",
    postalCode: "2266 HB",
    locality: "Leidschendam",
    phoneDisplay: "071 580 48 47",
    phoneTel: "tel:0715804847",
    phoneE164: "+31715804847",
    routeUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Doctor+van+Noortstraat+134+Leidschendam",
    mapUrl:
      "https://maps.google.com/maps?q=Doctor+van+Noortstraat+134,+2266+HB+Leidschendam&z=15&output=embed",
    trafficNotice: true,
  },
  {
    city: "Den Haag",
    street: "Winkelhaak 77",
    postalCode: "2495 AX",
    locality: "Den Haag",
    phoneDisplay: "070 800 82 88",
    phoneTel: "tel:0708008288",
    phoneE164: "+31708008288",
    routeUrl: "https://www.google.com/maps/dir/?api=1&destination=Winkelhaak+77+Den+Haag",
    mapUrl: "https://maps.google.com/maps?q=Winkelhaak+77,+2495+AX+Den+Haag&z=15&output=embed",
    trafficNotice: false,
  },
] as const satisfies readonly Office[];

const servicePaths = [
  "/diensten/scannen-mailen",
  "/diensten/boeken-administratie",
  "/diensten/controleren-administratie",
  "/diensten/jaarrekening",
  "/diensten/belastingaangifte",
  "/diensten/aangifte-particulieren",
  "/diensten/loonadministratie",
  "/diensten/begeleiding-starters",
] as const;

export const site = {
  name: "Van Boheemen",
  legalName: "Administratiekantoor Van Boheemen",
  url: "https://www.vanboheemen.nl",
  description:
    "Administratiekantoor in Leidschendam en Den Haag. Voor ZZP’ers, MKB-ondernemers en particulieren. U levert aan, wij boeken en verzorgen de aangiften.",
  locale: "nl-NL",
  logo: "/images/logo.jpg",
  logoWidth: 217,
  logoHeight: 130,
  contact: {
    email: "info@van-boheemen.nl",
    phone: offices[0].phoneE164,
    phoneDisplay: offices[0].phoneDisplay,
  },
  address: {
    street: offices[0].street,
    postalCode: offices[0].postalCode,
    city: offices[0].locality,
    country: "Nederland",
    countryCode: "NL",
  },
  offices,
  openingHours: "ma – vr 09.00 – 18.00",
  openingHoursSchema: "Mo-Fr 09:00-18:00",
  area: "Leidschendam-Voorburg, Den Haag, Leiden, Zoetermeer en omgeving",
  portalUrl: "",
  showReviews: true,
  showTrafficNotice: true,
  kvk: "28081866",
  vat: "NL819162450B01",
  socials: [] as { name: string; url: string }[],
  navigation: [
    { label: "Diensten", href: "/diensten" },
    { label: "Werkwijze", href: "/#werkwijze" },
    { label: "Over ons", href: "/over-ons" },
    { label: "Vestigingen", href: "/contact#vestigingen" },
    { label: "Contact", href: "/contact" },
  ],
  mobileNavigation: [
    { label: "Home", href: "/" },
    { label: "Diensten", href: "/diensten" },
    { label: "Over ons", href: "/over-ons" },
    { label: "Vestigingen", href: "/contact#vestigingen" },
    { label: "Contact", href: "/contact" },
  ],
  footerNavigation: [
    { label: "Privacy & disclaimer", href: "/privacy" },
    { label: "Cookies", href: "/cookies" },
  ],
  pages: [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/diensten", changeFrequency: "monthly", priority: 0.8 },
    ...servicePaths.map((path) => ({
      path,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { path: "/over-ons", changeFrequency: "monthly", priority: 0.8 },
    { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
    { path: "/verkeerssituatie-leidschendam", changeFrequency: "yearly", priority: 0.4 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/cookies", changeFrequency: "yearly", priority: 0.3 },
    ...(hasTerms
      ? [
          {
            path: "/algemene-voorwaarden",
            changeFrequency: "yearly" as const,
            priority: 0.3,
          },
        ]
      : []),
  ],
  legal: {
    hasTerms,
    lastUpdated: "8 oktober 2026",
  },
  verification: {
    google: "voorbeeld-zoekconsole-code",
  },
} satisfies {
  name: string;
  legalName: string;
  url: string;
  description: string;
  locale: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  contact: { email: string; phone: string; phoneDisplay: string };
  address: {
    street: string;
    postalCode: string;
    city: string;
    country: string;
    countryCode: string;
  };
  offices: readonly Office[];
  openingHours: string;
  openingHoursSchema: string;
  area: string;
  portalUrl: string;
  showReviews: boolean;
  showTrafficNotice: boolean;
  kvk: string;
  vat: string;
  socials: { name: string; url: string }[];
  navigation: NavItem[];
  mobileNavigation: NavItem[];
  footerNavigation: NavItem[];
  pages: SitePage[];
  legal: { hasTerms: boolean; lastUpdated: string };
  verification: { google: string };
};

export function formatAddress(office: Office = site.offices[0]): string {
  return `${office.street}, ${office.postalCode} ${office.locality}`;
}

export function contactLine(): string {
  const phones = site.offices.map((office) => `${office.city} ${office.phoneDisplay}`).join(" of ");
  return site.contact.email ? `${site.contact.email} of ${phones}` : phones;
}
