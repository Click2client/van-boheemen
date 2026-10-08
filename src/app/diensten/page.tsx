import type { Metadata } from "next";

import { CallButton } from "@/components/layout/CallProvider";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { Container } from "@/components/ui/Container";
import { Pill, TextLink } from "@/components/ui/Pill";
import { ui } from "@/content/ui";
import { dienstenContent } from "@/content/diensten";
import { services } from "@/content/services";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: dienstenContent.metadata.title,
  description: dienstenContent.metadata.description,
  path: "/diensten",
});

const outlineButton =
  "inline-flex h-[58px] items-center rounded-full border border-border-input bg-white px-6 text-base font-medium text-ink transition-colors hover:border-primary hover:text-primary";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: ui.homeLabel, href: "/" },
          { label: dienstenContent.breadcrumb, href: "/diensten" },
        ]}
        eyebrow={dienstenContent.eyebrow}
        lines={dienstenContent.headline}
        lead={dienstenContent.lead}
        actions={
          <>
            <Pill href="/contact#formulier">Kennismaking plannen</Pill>
            <CallButton className={outlineButton}>Bel een vestiging</CallButton>
          </>
        }
      />
      <section className="border-t border-rule">
        <Container className="py-[clamp(64px,8vw,120px)] pb-[clamp(72px,9vw,140px)]">
          <ServiceCards services={services} />
        </Container>
      </section>
      <section className="bg-surface">
        <Container className="grid items-center gap-8 py-[clamp(64px,8vw,112px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr))] wide:gap-x-[72px]">
          <div data-reveal="fade" className="flex flex-col gap-[18px]">
            <p className="text-[13px] font-semibold tracking-[0.1em] text-green uppercase">
              {dienstenContent.individuals.label}
            </p>
            <h2 className="font-heading text-[clamp(36px,4.6vw,64px)] leading-[1.02] font-normal tracking-[-0.025em]">
              {dienstenContent.individuals.heading[0]?.text}
              <em className="text-primary">{dienstenContent.individuals.heading[1]?.text}</em>
            </h2>
          </div>
          <div data-reveal="fade" data-delay="120" className="flex max-w-[480px] flex-col gap-[22px]">
            <p className="leading-[1.65] text-text-2">{dienstenContent.individuals.text}</p>
            <TextLink href={dienstenContent.individuals.href}>{dienstenContent.individuals.link}</TextLink>
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
