import type { Metadata } from "next";

import { ContactForm } from "@/components/forms/ContactForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactDetails } from "@/components/layout/ContactDetails";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { contactContent } from "@/content/contact";
import { ui } from "@/content/ui";
import { env } from "@/lib/env";
import { contactFallback } from "@/lib/mail";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: contactContent.metadata.title,
  description: contactContent.metadata.description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Container className="py-12 sm:py-16">
      <Breadcrumbs
        items={[
          { label: ui.homeLabel, href: "/" },
          { label: contactContent.breadcrumb, href: "/contact" },
        ]}
      />
      <div className="mt-6 grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <PageHeader title={contactContent.heading} intro={contactContent.intro} />
          <ContactDetails title={contactContent.detailsTitle} />
        </div>
        <ContactForm
          siteKey={env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
          fallbackContact={contactFallback()}
        />
      </div>
    </Container>
  );
}
