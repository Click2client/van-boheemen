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
  title: "Voorbeeldtekst",
  text: "Dit is een voorbeeld voor het template, geen juridisch advies. Vervang deze tekst door een versie die bij de klant past, of laat een jurist ernaar kijken.",
};
