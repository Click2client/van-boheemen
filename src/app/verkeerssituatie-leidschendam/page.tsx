import type { Metadata } from "next";

import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { site } from "@/config/site";
import { ui } from "@/content/ui";
import { trafficContent } from "@/content/verkeerssituatie";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: trafficContent.metadata.title,
  description: trafficContent.metadata.description,
  path: "/verkeerssituatie-leidschendam",
});

export default function TrafficPage() {
  const office = site.offices[0];

  return (
    <>
      <PageHero
        crumbs={[
          { label: ui.homeLabel, href: "/" },
          { label: "Contact", href: "/contact" },
          { label: trafficContent.breadcrumb, href: "/verkeerssituatie-leidschendam" },
        ]}
        eyebrow={trafficContent.eyebrow}
        lines={trafficContent.headline}
        lead={trafficContent.lead}
      />
      <section className="border-t border-rule">
        <Container className="grid items-start gap-10 py-[clamp(56px,7vw,100px)] pb-[clamp(72px,9vw,130px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr))] wide:gap-x-[72px]">
          <div data-reveal="fade" className="flex flex-col gap-[22px]">
            <h2 className="font-heading text-[clamp(30px,3vw,40px)] leading-[1.1] font-normal tracking-[-0.02em]">
              {trafficContent.heading}
            </h2>
            <p className="max-w-[520px] rounded-[10px] bg-tint-blue px-3.5 py-3 font-mono text-xs leading-relaxed text-primary">
              {trafficContent.note}
            </p>
            <div className="mt-2 border-t border-ink text-[15px]">
              <div className="flex justify-between gap-4 border-b border-border py-4">
                <span className="text-text-3">Adres</span>
                <span className="text-right">
                  {office.street}
                  <br />
                  {office.postalCode} {office.locality}
                </span>
              </div>
              <div className="flex justify-between gap-4 border-b border-border py-4">
                <span className="text-text-3">Telefoon</span>
                <a className="font-medium" href={office.phoneTel}>
                  {office.phoneDisplay}
                </a>
              </div>
              <div className="flex justify-between gap-4 border-b border-border py-4">
                <span className="text-text-3">Open</span>
                <span>{site.openingHours}</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Pill href={office.routeUrl} external>
                {trafficContent.route}
              </Pill>
              <a
                href={office.phoneTel}
                className="inline-flex h-[58px] items-center rounded-full border border-border-input bg-white px-6 text-base font-medium text-ink transition-colors hover:border-primary hover:text-primary"
              >
                {trafficContent.call}
              </a>
            </div>
          </div>
          <div
            data-reveal="fade"
            data-delay="120"
            className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-border bg-[#E9EFF3]"
          >
            <iframe
              src={trafficContent.mapZoom}
              title="Kaart van Leidschendam"
              loading="lazy"
              className="absolute inset-0 h-full w-full border-0 contrast-[1.02] saturate-[.55]"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
