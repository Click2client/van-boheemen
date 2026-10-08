import type { LegalNotice } from "@/content/types";

export const ui = {
  skipToContent: "Naar inhoud",
  mainNav: "Hoofdmenu",
  mobileNav: "Mobiel menu",
  openMenu: "Menu",
  closeMenu: "Sluiten",
  cookieSettings: "Cookie-instellingen",
  footerCompany: "Bedrijf",
  footerContact: "Contact",
  footerLegal: "Juridisch",
  kvkLabel: "KvK",
  vatLabel: "Btw",
  lastUpdated: "Laatst bijgewerkt",
  homeLabel: "Home",
  breadcrumbLabel: "Kruimelpad",
  opensInNewTab: "opent in een nieuw venster",
} as const;

export const legalNotice: LegalNotice = {
  title: "Concepttekst",
  text: "Dit is een concept, geen juridisch advies. Laat de tekst controleren voordat de site live gaat.",
};
