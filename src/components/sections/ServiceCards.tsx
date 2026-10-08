import Image from "next/image";
import Link from "next/link";

import type { Service } from "@/content/services";
import { serviceCardCta } from "@/content/services";

type ServiceCardsProps = {
  services: Service[];
  heading?: "h2" | "h3";
};

export function ServiceCards({ services, heading = "h2" }: ServiceCardsProps) {
  return (
    <div className="grid gap-x-[clamp(24px,2.5vw,36px)] gap-y-[clamp(40px,4vw,56px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
      {services.map((service) => (
        <Link
          key={service.slug}
          href={`/diensten/${service.slug}`}
          id={`d${service.number}`}
          data-reveal="fade"
          className="group flex scroll-mt-28 flex-col gap-[22px] text-ink"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-[#E4ECF2]">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              sizes="(min-width: 1080px) 30vw, 100vw"
              className="object-cover transition-transform duration-1000 ease-draw group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="text-[13px] text-text-3 tabular-nums">{service.number} / 08</p>
            {heading === "h2" ? (
              <h2 className="font-heading text-[clamp(26px,2.3vw,32px)] leading-[1.12] font-normal tracking-[-0.015em]">
                {service.title}
              </h2>
            ) : (
              <h3 className="font-heading text-[clamp(26px,2.3vw,32px)] leading-[1.12] font-normal tracking-[-0.015em]">
                {service.title}
              </h3>
            )}
            <p className="text-base leading-relaxed text-text-2">{service.description}</p>
            <span className="mt-1.5 inline-flex w-fit items-center gap-2 border-b border-track pb-[3px] text-[15px] font-medium text-primary">
              {serviceCardCta} <span aria-hidden="true">→</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
