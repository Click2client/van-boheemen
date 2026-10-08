import type { Metadata } from "next";

import { LegalDocument } from "@/components/sections/LegalDocument";
import { privacyContent } from "@/content/privacy";
import { ui } from "@/content/ui";
import { site } from "@/config/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: privacyContent.metadata.title,
  description: privacyContent.metadata.description,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalDocument
      title={privacyContent.heading}
      intro={privacyContent.intro}
      notice={privacyContent.notice}
      updated={site.legal.lastUpdated}
      sections={privacyContent.sections}
      crumbs={[
        { label: ui.homeLabel, href: "/" },
        { label: privacyContent.breadcrumb, href: "/privacy" },
      ]}
    />
  );
}
