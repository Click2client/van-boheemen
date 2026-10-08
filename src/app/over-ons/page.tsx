import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CallToAction } from "@/components/sections/CallToAction";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { aboutContent } from "@/content/over-ons";
import { ui } from "@/content/ui";
import { createMetadata } from "@/lib/seo";
import { toHeadingId } from "@/lib/slug";

export const metadata: Metadata = createMetadata({
  title: aboutContent.metadata.title,
  description: aboutContent.metadata.description,
  path: "/over-ons",
});

export default function AboutPage() {
  return (
    <>
      <Container className="py-12 sm:py-16">
        <Breadcrumbs
          items={[
            { label: ui.homeLabel, href: "/" },
            { label: aboutContent.breadcrumb, href: "/over-ons" },
          ]}
        />
        <div className="mt-6">
          <PageHeader title={aboutContent.heading} intro={aboutContent.intro} />
        </div>
        <div className="mt-12 max-w-3xl space-y-10">
          {aboutContent.sections.map((section) => {
            const headingId = toHeadingId(section.heading);
            return (
              <section key={section.heading} aria-labelledby={headingId}>
                <h2 id={headingId} className="font-heading text-2xl text-ink">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-3 leading-relaxed text-muted">
                    {paragraph}
                  </p>
                ))}
              </section>
            );
          })}
        </div>
      </Container>
      <CallToAction {...aboutContent.cta} />
    </>
  );
}
