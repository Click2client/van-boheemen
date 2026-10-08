import type { Metadata } from "next";

import { HomeHero } from "@/components/sections/HomeHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Locations } from "@/components/sections/Locations";
import { Marquee } from "@/components/sections/Marquee";
import { Reviews } from "@/components/sections/Reviews";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { ServiceExplorer } from "@/components/sections/ServiceExplorer";
import { Steps } from "@/components/sections/Steps";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { WhyBand } from "@/components/sections/WhyBand";
import { Container } from "@/components/ui/Container";
import { TextLink } from "@/components/ui/Pill";
import { RichHeading } from "@/components/ui/RichHeading";
import { site } from "@/config/site";
import { homeContent } from "@/content/home";
import { homeSteps, team } from "@/content/shared";
import { services } from "@/content/services";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: homeContent.metadata.title,
  description: homeContent.metadata.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <Marquee />
      <section id="diensten">
        <Container className="py-[clamp(72px,9vw,140px)]">
          <div className="mb-[clamp(36px,5vw,64px)]">
            <SectionIntro
              label={homeContent.services.label}
              heading={homeContent.services.heading}
              intro={homeContent.services.intro}
            />
          </div>
          <ServiceExplorer
            services={services.map((service) => ({
              href: `/diensten/${service.slug}`,
              title: service.title,
              description: service.description,
              image: service.image,
              imageAlt: service.imageAlt,
              number: service.number,
            }))}
          />
        </Container>
      </section>
      <section id="werkwijze" className="scroll-mt-24 bg-surface">
        <Container className="flex flex-col gap-[clamp(44px,6vw,80px)] py-[clamp(72px,9vw,140px)]">
          <SectionIntro
            label={homeContent.method.label}
            heading={homeContent.method.heading}
            intro={homeContent.method.intro}
          />
          <Steps items={homeSteps} />
        </Container>
      </section>
      <WhyBand label={homeContent.why.label} />
      {site.showReviews ? <Reviews label={homeContent.reviews.label} note={homeContent.reviews.note} /> : null}
      <section className="border-t border-rule">
        <Container className="flex flex-col gap-[clamp(40px,5vw,64px)] py-[clamp(72px,9vw,140px)]">
          <SectionIntro
            label={homeContent.about.label}
            heading={homeContent.about.heading}
            intro={homeContent.about.intro}
            extra={<TextLink href="/over-ons">{homeContent.about.link}</TextLink>}
          />
          <TeamGrid people={team} stagger />
        </Container>
      </section>
      <section className="bg-surface">
        <Container className="flex flex-col gap-[clamp(40px,5vw,64px)] py-[clamp(72px,9vw,140px)]">
          <div data-reveal="fade" className="flex max-w-[720px] flex-col gap-[18px]">
            <p className="text-[13px] font-semibold tracking-[0.1em] text-green uppercase">
              {homeContent.offices.label}
            </p>
            <RichHeading parts={homeContent.offices.heading} />
          </div>
          <Locations />
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
