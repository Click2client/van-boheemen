import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/CtaBand";
import { Locations } from "@/components/sections/Locations";
import { PageHero } from "@/components/sections/PageHero";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { WhyBand } from "@/components/sections/WhyBand";
import { Container } from "@/components/ui/Container";
import { RichHeading } from "@/components/ui/RichHeading";
import { ui } from "@/content/ui";
import { aboutContent } from "@/content/over-ons";
import { team } from "@/content/shared";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: aboutContent.metadata.title,
  description: aboutContent.metadata.description,
  path: "/over-ons",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: ui.homeLabel, href: "/" },
          { label: aboutContent.breadcrumb, href: "/over-ons" },
        ]}
        eyebrow={aboutContent.eyebrow}
        lines={aboutContent.headline}
        lead={aboutContent.lead}
        image={{ src: aboutContent.image, alt: aboutContent.imageAlt }}
      />
      <section>
        <Container className="grid items-start gap-10 py-[clamp(56px,7vw,112px)] pb-[clamp(72px,9vw,140px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr))] wide:gap-x-[72px]">
          <div data-reveal="fade" className="flex flex-col gap-[18px]">
            <p className="text-[13px] font-semibold tracking-[0.1em] text-green uppercase">
              {aboutContent.story.label}
            </p>
            <RichHeading parts={aboutContent.story.heading} />
          </div>
          <div data-reveal="fade" data-delay="120" className="flex max-w-[560px] flex-col gap-5 text-lg leading-[1.7] text-text-2">
            {aboutContent.story.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="w-fit rounded-md bg-tint-green px-2.5 py-1.5 font-mono text-xs leading-normal text-green">
              {aboutContent.story.note}
            </p>
          </div>
        </Container>
      </section>
      <WhyBand label={aboutContent.whyLabel} />
      <section>
        <Container className="flex flex-col gap-[clamp(40px,5vw,64px)] py-[clamp(72px,9vw,140px)]">
          <SectionIntro
            label={aboutContent.team.label}
            heading={aboutContent.team.heading}
            intro={aboutContent.team.intro}
          />
          <TeamGrid people={team} roleSuffix={aboutContent.team.roleSuffix} />
        </Container>
      </section>
      <section id="vestigingen" className="scroll-mt-24 bg-surface">
        <Container className="flex flex-col gap-[clamp(40px,5vw,64px)] py-[clamp(72px,9vw,140px)]">
          <SectionIntro label={aboutContent.offices.label} heading={aboutContent.offices.heading} />
          <Locations />
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
