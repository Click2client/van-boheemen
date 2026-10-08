import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { CallToAction } from "@/components/sections/CallToAction";
import { Services } from "@/components/sections/Services";
import { Container } from "@/components/ui/Container";
import { servicesContent } from "@/content/diensten";
import { ui } from "@/content/ui";
import { createMetadata, servicesJsonLd } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: servicesContent.metadata.title,
  description: servicesContent.metadata.description,
  path: "/diensten",
});

export default function ServicesPage() {
  return (
    <>
      <Container className="pt-12 sm:pt-16">
        <Breadcrumbs
          items={[
            { label: ui.homeLabel, href: "/" },
            { label: servicesContent.breadcrumb, href: "/diensten" },
          ]}
        />
      </Container>
      <Services
        headingLevel="h1"
        title={servicesContent.heading}
        intro={servicesContent.intro}
        items={servicesContent.items}
      />
      <CallToAction {...servicesContent.cta} />
      <JsonLd data={servicesJsonLd(servicesContent.items)} />
    </>
  );
}
