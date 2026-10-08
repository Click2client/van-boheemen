import Image from "next/image";

import { CallButton } from "@/components/layout/CallProvider";
import { FlowCard } from "@/components/sections/FlowCard";
import { RotatingWord } from "@/components/sections/RotatingWord";
import { Container } from "@/components/ui/Container";
import { OpenStatus } from "@/components/ui/OpenStatus";
import { Pill } from "@/components/ui/Pill";
import { homeContent } from "@/content/home";
import { rotatingWords } from "@/content/shared";

const outlineButton =
  "inline-flex h-[58px] items-center rounded-full border border-border-input bg-white px-6 text-base font-medium text-ink transition-colors hover:border-primary hover:text-primary";

export function HomeHero() {
  const hero = homeContent.hero;

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 mx-auto grid max-w-[1320px] grid-cols-6 px-[clamp(20px,4vw,48px)]"
      >
        {Array.from({ length: 6 }, (_, index) => (
          <span
            key={index}
            data-reveal="vline"
            data-delay={String(index * 80)}
            className={`origin-top border-l border-grid ${index === 5 ? "border-r" : ""}`}
          />
        ))}
      </div>
      <Container className="relative flex flex-col gap-[clamp(24px,3vw,36px)] pt-[clamp(24px,3vw,44px)] pb-[clamp(72px,8vw,120px)]">
        <div data-reveal="fade" data-delay="200" className="flex flex-wrap items-center justify-between gap-3 text-sm text-text-2">
          <p className="flex items-center gap-3">
            <span className="font-heading text-[17px] text-primary italic">{hero.eyebrow}</span>
            <span className="h-px w-7 bg-[#B8C6D1]" aria-hidden="true" />
            {hero.place}
          </p>
          <OpenStatus />
        </div>
        <div className="grid items-start gap-[clamp(48px,6vw,88px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,460px),1fr))]">
          <div className="flex min-w-0 flex-col gap-[clamp(24px,3vw,36px)] pt-[clamp(8px,2vw,40px)]">
            <h1 className="font-heading text-[clamp(40px,4.2vw,62px)] leading-[0.98] font-normal tracking-[-0.035em] text-ink">
              {hero.lines.map((line, index) => (
                <span key={line} className="block overflow-hidden pb-[0.06em]">
                  <span data-reveal="rise" data-delay={String(150 + index * 110)} className="block">
                    {line}
                  </span>
                </span>
              ))}
              <span className="block overflow-hidden pb-[0.1em]">
                <span data-reveal="rise" data-delay="370" className="block">
                  <RotatingWord words={rotatingWords} />
                </span>
              </span>
            </h1>
            <div data-reveal="fade" data-delay="550" className="flex max-w-[500px] flex-col gap-7">
              <p className="text-[clamp(17px,1.4vw,20px)] leading-[1.6] text-text-2">{hero.lead}</p>
              <div className="flex flex-wrap items-center gap-3">
                <Pill href="/contact#formulier">{hero.primary}</Pill>
                <CallButton className={outlineButton}>{hero.secondary}</CallButton>
              </div>
            </div>
          </div>
          <div className="relative">
            <div
              data-reveal="mask"
              data-delay="300"
              className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] bg-[linear-gradient(155deg,#D5E3EE_0%,#E9F0F5_55%,#F1F5EA_100%)] wide:aspect-[4/5] wide:max-h-[640px]"
            >
              <Image
                src={hero.image}
                alt={hero.imageAlt}
                fill
                priority
                sizes="(min-width: 1080px) 46vw, 100vw"
                className="object-cover"
              />
            </div>
            <FlowCard title={hero.cardTitle} label={hero.cardLabel} />
          </div>
        </div>
      </Container>
    </section>
  );
}
