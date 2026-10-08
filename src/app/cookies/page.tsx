import type { Metadata } from "next";

import { LegalDocument } from "@/components/sections/LegalDocument";
import { cookiesContent } from "@/content/cookies";
import { ui } from "@/content/ui";
import { site } from "@/config/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: cookiesContent.metadata.title,
  description: cookiesContent.metadata.description,
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <LegalDocument
      title={cookiesContent.heading}
      intro={cookiesContent.intro}
      notice={cookiesContent.notice}
      updated={site.legal.lastUpdated}
      sections={cookiesContent.sections}
      crumbs={[
        { label: ui.homeLabel, href: "/" },
        { label: cookiesContent.breadcrumb, href: "/cookies" },
      ]}
    />
  );
}
