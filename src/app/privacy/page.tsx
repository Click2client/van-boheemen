import type { Metadata } from "next";

import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { site } from "@/config/site";
import { ui } from "@/content/ui";
import { privacyContent } from "@/content/privacy";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: privacyContent.metadata.title,
  description: privacyContent.metadata.description,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: ui.homeLabel, href: "/" },
          { label: privacyContent.breadcrumb, href: "/privacy" },
        ]}
        eyebrow={privacyContent.eyebrow}
        lines={privacyContent.headline}
        lead={privacyContent.lead}
        actions={
          <p className="w-fit rounded-md bg-tint-green px-2.5 py-1.5 font-mono text-xs text-green">
            {privacyContent.notice}
          </p>
        }
      />
      <section className="border-t border-rule">
        <Container className="flex flex-wrap items-start gap-10 py-[clamp(48px,6vw,88px)] pb-[clamp(72px,9vw,130px)] wide:gap-x-[72px]">
          <nav aria-label="Op deze pagina" data-reveal="fade" className="flex w-full flex-col gap-1 text-[15px] wide:sticky wide:top-28 wide:w-[220px] wide:shrink-0">
            {privacyContent.nav.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`border-rule py-2.5 text-ink hover:text-primary ${
                  index < privacyContent.nav.length - 1 ? "border-b" : ""
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="min-w-0 w-full max-w-[760px] flex-1">
            <div id="privacy" className="scroll-mt-28">
              {privacyContent.privacy.map((section) => (
                <section key={section.heading} data-reveal="fade" className="flex flex-col gap-3.5 border-t border-border py-8">
                  <h2 className="font-heading text-[clamp(26px,2.4vw,32px)] leading-[1.15] font-normal tracking-[-0.01em]">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-[17px] leading-[1.75] text-text-2">
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets ? (
                    <ul className="list-disc space-y-2 pl-5 text-[17px] leading-[1.75] text-text-2">
                      {section.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>
            <div id="disclaimer" className="scroll-mt-28">
              <section data-reveal="fade" className="flex flex-col gap-3.5 border-t border-border py-8">
                <h2 className="font-heading text-[clamp(26px,2.4vw,32px)] leading-[1.15] font-normal tracking-[-0.01em]">
                  {privacyContent.disclaimer.heading}
                </h2>
                {privacyContent.disclaimer.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-[17px] leading-[1.75] text-text-2">
                    {paragraph}
                  </p>
                ))}
              </section>
            </div>
            <div id="gegevens" className="scroll-mt-28">
              <section data-reveal="fade" className="flex flex-col gap-3.5 border-t border-border py-8">
                <h2 className="font-heading text-[clamp(26px,2.4vw,32px)] leading-[1.15] font-normal tracking-[-0.01em]">
                  {privacyContent.company.heading}
                </h2>
                <p className="text-[17px] leading-[1.75] text-text-2">{privacyContent.company.registration}</p>
                <p className="text-sm text-text-3">
                  {ui.lastUpdated}: {site.legal.lastUpdated}
                </p>
                {site.offices.map((office) => (
                  <p key={office.city} className="text-[17px] leading-[1.75] text-text-2">
                    {office.city}: {office.street}, {office.postalCode} {office.locality} · {office.phoneDisplay}
                  </p>
                ))}
                {site.contact.email ? (
                  <p className="text-[17px] leading-[1.75] text-text-2">
                    E-mail:{" "}
                    <a className="text-primary" href={`mailto:${site.contact.email}`}>
                      {site.contact.email}
                    </a>
                  </p>
                ) : null}
              </section>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
