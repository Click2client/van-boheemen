import Image from "next/image";
import type { ReactNode } from "react";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { RiseHeading } from "@/components/ui/RichHeading";
import type { NavItem } from "@/config/site";
import type { TextPart } from "@/content/shared";

type PageHeroProps = {
  crumbs: NavItem[];
  eyebrow: string;
  lines: TextPart[];
  lead?: string;
  actions?: ReactNode;
  image?: { src: string; alt: string };
};

export function PageHero({ crumbs, eyebrow, lines, lead, actions, image }: PageHeroProps) {
  return (
    <section>
      <Container className="flex flex-col gap-[clamp(32px,4.5vw,64px)] pt-[clamp(28px,3.5vw,48px)] pb-[clamp(48px,6vw,88px)]">
        <div data-reveal="fade">
          <Breadcrumbs items={crumbs} />
        </div>
        <div className="grid items-end gap-8 [grid-template-columns:repeat(auto-fit,minmax(min(100%,460px),1fr))] wide:gap-x-[72px]">
          <div className="flex min-w-0 flex-col gap-[22px]">
            <p data-reveal="fade" className="text-[13px] font-semibold tracking-[0.1em] text-green uppercase">
              {eyebrow}
            </p>
            <RiseHeading lines={lines} />
          </div>
          {lead || actions ? (
            <div data-reveal="fade" data-delay="300" className="flex max-w-[480px] flex-col gap-[26px]">
              {lead ? <p className="text-[clamp(17px,1.4vw,20px)] leading-[1.6] text-text-2">{lead}</p> : null}
              {actions ? <div className="flex flex-wrap items-center gap-3">{actions}</div> : null}
            </div>
          ) : null}
        </div>
        {image ? (
          <div
            data-reveal="mask"
            data-delay="250"
            className="relative aspect-[21/9] max-h-[620px] w-full overflow-hidden rounded-[28px] bg-[#E4ECF2]"
          >
            <Image src={image.src} alt={image.alt} fill priority sizes="(min-width: 1320px) 1320px, 100vw" className="object-cover" />
          </div>
        ) : null}
      </Container>
    </section>
  );
}
