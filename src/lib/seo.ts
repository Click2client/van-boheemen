import type { Metadata } from "next";

import { site, type NavItem } from "@/config/site";
import { env } from "@/lib/env";

type MetaInput = {
  title: string;
  description: string;
  path: string;
};

export function getSiteUrl(): string {
  const configured = env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  return configured || site.url;
}

export function absoluteUrl(path: string): string {
  return new URL(path, getSiteUrl()).toString();
}

export function createMetadata({ title, description, path }: MetaInput): Metadata {
  const canonical = path.startsWith("/") ? path : `/${path}`;

  const fullTitle = `${title} | ${site.name}`;

  return {
    title: path === "/" ? { absolute: fullTitle } : title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      locale: "nl_NL",
      type: "website",
      siteName: site.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function organizationJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: site.legalName,
    url: getSiteUrl(),
    logo: absoluteUrl(site.logo),
    image: absoluteUrl(site.logo),
    ...(site.contact.email ? { email: site.contact.email } : {}),
    telephone: site.contact.phone,
    openingHours: site.openingHoursSchema,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressCountry: site.address.countryCode,
    },
    location: site.offices.map((office) => ({
      "@type": "AccountingService",
      name: `${site.legalName} ${office.city}`,
      telephone: office.phoneE164,
      address: {
        "@type": "PostalAddress",
        streetAddress: office.street,
        postalCode: office.postalCode,
        addressLocality: office.locality,
        addressCountry: site.address.countryCode,
      },
    })),
    areaServed: ["Leidschendam", "Voorburg", "Den Haag", "Leiden", "Zoetermeer"],
    ...(site.socials.length > 0 ? { sameAs: site.socials.map((social) => social.url) } : {}),
  };
}

export function websiteJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: getSiteUrl(),
  };
}

export function breadcrumbJsonLd(items: NavItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  };
}

export function faqJsonLd(
  items: { question: string; answer: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function servicesJsonLd(
  items: { title: string; description: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": items.map((item) => ({
      "@type": "Service",
      name: item.title,
      description: item.description,
      provider: {
        "@type": "Organization",
        name: site.legalName,
        url: getSiteUrl(),
      },
    })),
  };
}
