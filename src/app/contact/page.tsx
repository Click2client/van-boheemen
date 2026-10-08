import type { Metadata } from "next";

import { ContactForm } from "@/components/forms/ContactForm";
import { Locations } from "@/components/sections/Locations";
import { PageHero } from "@/components/sections/PageHero";
import { OpenStatus } from "@/components/ui/OpenStatus";
import { RichHeading } from "@/components/ui/RichHeading";
import { Container } from "@/components/ui/Container";
import { site } from "@/config/site";
import { ui } from "@/content/ui";
import { contactContent } from "@/content/contact";
import { env } from "@/lib/env";
import { contactFallback } from "@/lib/mail";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: contactContent.metadata.title,
  description: contactContent.metadata.description,
  path: "/contact",
});

export default function ContactPage() {
  const intro = contactContent.formIntro;

  return (
    <>
      <PageHero
        crumbs={[
          { label: ui.homeLabel, href: "/" },
          { label: contactContent.breadcrumb, href: "/contact" },
        ]}
        eyebrow={contactContent.eyebrow}
        lines={contactContent.headline}
        lead={contactContent.lead}
      />
      <Container className="pb-[clamp(48px,6vw,88px)]">
        <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2">
          {site.offices.map((office, index) => (
            <a
              key={office.city}
              href={office.phoneTel}
              data-reveal="fade"
              data-delay={String(index * 120)}
              className="flex min-w-0 flex-col gap-5 rounded-[28px] border border-border bg-white p-[clamp(26px,3vw,40px)] text-ink transition duration-300 ease-draw hover:-translate-y-1 hover:border-primary hover:shadow-[0_40px_70px_-40px_rgba(20,33,43,0.35)]"
            >
              <span className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-semibold tracking-[0.1em] text-text-2 uppercase">{office.city}</span>
                <OpenStatus variant="quiet" />
              </span>
              <span className="min-w-0 font-heading text-[clamp(1.75rem,8vw,3.75rem)] leading-none tracking-[-0.03em] break-words text-primary">
                {office.phoneDisplay}
              </span>
              <span className="flex min-w-0 flex-wrap items-end justify-between gap-4 text-[15px] leading-normal text-text-2">
                <span className="min-w-0">
                  {office.street}
                  <br />
                  {office.postalCode} {office.locality}
                </span>
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-white" aria-hidden="true">
                  →
                </span>
              </span>
            </a>
          ))}
        </div>
      </Container>
      <section id="formulier" className="scroll-mt-24 bg-surface">
        <Container className="grid items-start gap-12 py-[clamp(72px,9vw,130px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,400px),1fr))] wide:gap-x-[72px]">
          <div data-reveal="fade" className="flex flex-col gap-6">
            <p className="text-[13px] font-semibold tracking-[0.1em] text-green uppercase">{intro.label}</p>
            <RichHeading parts={intro.heading} />
            <p className="max-w-[440px] leading-[1.65] text-text-2">{intro.text}</p>
            <div className="mt-3 max-w-[440px] border-t border-ink">
              <div className="flex justify-between gap-4 border-b border-border py-4 text-[15px]">
                <span>{intro.weekday}</span>
                <span className="font-medium">{intro.weekdayHours}</span>
              </div>
              <div className="flex justify-between gap-4 border-b border-border py-4 text-[15px] text-text-3">
                <span>{intro.weekend}</span>
                <span>{intro.weekendHours}</span>
              </div>
            </div>
          </div>
          <div
            data-reveal="fade"
            data-delay="120"
            className="rounded-[28px] border border-border bg-white p-[clamp(24px,3.5vw,48px)] shadow-[0_40px_80px_-60px_rgba(20,33,43,0.35)]"
          >
            <ContactForm siteKey={env.NEXT_PUBLIC_TURNSTILE_SITE_KEY} fallbackContact={contactFallback()} />
          </div>
        </Container>
      </section>
      <section id="vestigingen" className="scroll-mt-24">
        <Container className="flex flex-col gap-[clamp(40px,5vw,64px)] py-[clamp(72px,9vw,140px)]">
          <div data-reveal="fade" className="flex max-w-[720px] flex-col gap-[18px]">
            <p className="text-[13px] font-semibold tracking-[0.1em] text-green uppercase">
              {contactContent.offices.label}
            </p>
            <RichHeading parts={contactContent.offices.heading} />
          </div>
          <Locations />
        </Container>
      </section>
      <section className="border-t border-rule">
        <Container className="flex flex-wrap gap-x-10 gap-y-3 py-9 text-sm text-text-2">
          <p>
            <span className="text-text-3">KvK</span> {site.kvk}
          </p>
          <p>
            <span className="text-text-3">Btw</span> {site.vat}
          </p>
          {site.contact.email ? (
            <p>
              <span className="text-text-3">E-mail</span>{" "}
              <a className="text-primary" href={`mailto:${site.contact.email}`}>
                {site.contact.email}
              </a>
            </p>
          ) : null}
        </Container>
      </section>
    </>
  );
}
