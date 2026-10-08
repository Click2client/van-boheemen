export type NavItem = {
  label: string;
  href: string;
};

export type SitePage = {
  path: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
};

const hasTerms = true;

export const site = {
  name: "Voorbeeldbedrijf",
  legalName: "Voorbeeldbedrijf B.V.",
  url: "https://www.voorbeeldbedrijf.nl",
  description:
    "Voorbeeldbedrijf maakt overzichtelijke websites voor kleine bedrijven, zodat bezoekers snel zien wat je doet en contact kunnen opnemen. Plan een gesprek.",
  locale: "nl-NL",
  logo: "/images/logo.png",
  contact: {
    email: "info@voorbeeldbedrijf.nl",
    phone: "+31201234567",
    phoneDisplay: "020 123 45 67",
  },
  address: {
    street: "Voorbeeldstraat 12",
    postalCode: "1012 AB",
    city: "Amsterdam",
    country: "Nederland",
    countryCode: "NL",
  },
  kvk: "12345678",
  vat: "NL123456789B01",
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/voorbeeldbedrijf",
    },
  ],
  navigation: [
    { label: "Over ons", href: "/over-ons" },
    { label: "Diensten", href: "/diensten" },
    { label: "Contact", href: "/contact" },
  ],
  footerNavigation: [
    { label: "Privacy", href: "/privacy" },
    { label: "Cookies", href: "/cookies" },
    ...(hasTerms
      ? [{ label: "Algemene voorwaarden", href: "/algemene-voorwaarden" }]
      : []),
  ],
  pages: [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/over-ons", changeFrequency: "monthly", priority: 0.8 },
    { path: "/diensten", changeFrequency: "monthly", priority: 0.8 },
    { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
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
    lastUpdated: "26 september 2026",
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
  contact: { email: string; phone: string; phoneDisplay: string };
  address: {
    street: string;
    postalCode: string;
    city: string;
    country: string;
    countryCode: string;
  };
  kvk: string;
  vat: string;
  socials: { name: string; url: string }[];
  navigation: NavItem[];
  footerNavigation: NavItem[];
  pages: SitePage[];
  legal: { hasTerms: boolean; lastUpdated: string };
  verification: { google: string };
};

export function formatAddress(): string {
  const { street, postalCode, city } = site.address;
  return `${street}, ${postalCode} ${city}`;
}
