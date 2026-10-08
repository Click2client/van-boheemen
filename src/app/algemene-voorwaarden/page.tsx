import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LegalDocument } from "@/components/sections/LegalDocument";
import { termsContent } from "@/content/algemene-voorwaarden";
import { ui } from "@/content/ui";
import { site } from "@/config/site";
import { createMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  if (!site.legal.hasTerms) return {};
  return createMetadata({
    title: termsContent.metadata.title,
    description: termsContent.metadata.description,
    path: "/algemene-voorwaarden",
  });
}

export default function TermsPage() {
  if (!site.legal.hasTerms) notFound();

  return (
    <LegalDocument
      title={termsContent.heading}
      intro={termsContent.intro}
      notice={termsContent.notice}
      updated={site.legal.lastUpdated}
      sections={termsContent.sections}
      crumbs={[
        { label: ui.homeLabel, href: "/" },
        { label: termsContent.breadcrumb, href: "/algemene-voorwaarden" },
      ]}
    />
  );
}
