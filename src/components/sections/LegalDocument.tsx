import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import type { NavItem } from "@/config/site";
import type { LegalNotice, LegalSection } from "@/content/types";
import { ui } from "@/content/ui";
import { toHeadingId } from "@/lib/slug";

type LegalDocumentProps = {
  title: string;
  intro: string;
  notice: LegalNotice;
  updated: string;
  sections: LegalSection[];
  crumbs: NavItem[];
};

export function LegalDocument({
  title,
  intro,
  notice,
  updated,
  sections,
  crumbs,
}: LegalDocumentProps) {
  return (
    <Container className="py-12 sm:py-16">
      <article className="mx-auto max-w-3xl">
        <Breadcrumbs items={crumbs} />
        <div className="mt-6">
          <PageHeader title={title} intro={intro} />
        </div>
        <p className="mt-6 text-sm font-semibold text-ink">
          {ui.lastUpdated}: {updated}
        </p>
        <div className="mt-6 rounded-md bg-tint-green p-4" role="note">
          <p className="font-semibold text-green">{notice.title}</p>
          <p className="mt-2 text-text-2">{notice.text}</p>
        </div>
        <div className="mt-10 space-y-10">
          {sections.map((section) => {
            const headingId = toHeadingId(section.heading);
            return (
              <section key={section.heading} aria-labelledby={headingId} className="border-t border-border pt-8">
                <h2 id={headingId} className="font-heading text-[clamp(26px,2.4vw,32px)] leading-[1.15] font-normal tracking-[-0.01em]">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-3 text-[17px] leading-[1.75] text-text-2">
                    {paragraph}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-[17px] leading-[1.75] text-text-2">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            );
          })}
        </div>
      </article>
    </Container>
  );
}
