"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ServiceLink = {
  href: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  number: string;
};

type ServiceExplorerProps = {
  services: ServiceLink[];
};

export function ServiceExplorer({ services }: ServiceExplorerProps) {
  const [active, setActive] = useState(0);
  const current = services[active] ?? services[0];

  return (
    <>
      <div className="hidden items-start gap-16 wide:grid wide:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
        <div data-reveal="fade" className="border-t border-ink">
          {services.map((service, index) => {
            const on = index === active;
            return (
              <Link
                key={service.href}
                href={service.href}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                className={`grid grid-cols-[48px_1fr_44px] items-center gap-4 border-b border-border py-[22px] transition-[padding,color] duration-500 ease-draw ${
                  on ? "pl-[18px] text-primary" : "text-ink"
                }`}
              >
                <span className="text-[13px] text-text-3 tabular-nums">{service.number}</span>
                <span className="font-heading text-[clamp(22px,2vw,28px)] leading-[1.15] tracking-[-0.01em]">
                  {service.title}
                </span>
                <span
                  className={`inline-flex size-10 items-center justify-center rounded-full border transition duration-300 ease-draw ${
                    on
                      ? "rotate-0 border-primary bg-primary text-white"
                      : "-rotate-45 border-border-input bg-transparent text-ink"
                  }`}
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            );
          })}
        </div>
        {current ? (
          <div className="sticky top-28">
            <div key={current.href} className="panel-in overflow-hidden rounded-[28px] bg-primary p-3.5 text-white">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-[#1A4468]">
                <Image src={current.image} alt={current.imageAlt} fill sizes="480px" className="object-cover" />
              </div>
              <div className="flex flex-col gap-3.5 px-[18px] pt-[26px] pb-[18px]">
                <p className="font-heading text-lg text-sky italic">{current.number} / 08</p>
                <h3 className="font-heading text-[30px] leading-[1.1] tracking-[-0.01em]">{current.title}</h3>
                <p className="text-base leading-relaxed text-on-dark">{current.description}</p>
                <Link
                  href={current.href}
                  className="mt-2 inline-flex w-fit items-center gap-2.5 border-b border-white/35 pb-[3px] font-medium text-white transition-[gap,border-color] hover:gap-4 hover:border-white"
                >
                  Lees meer <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div className="border-t border-ink wide:hidden">
        {services.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="grid grid-cols-[36px_1fr_24px] gap-3 border-b border-border py-[22px] text-ink"
          >
            <span className="pt-1.5 text-[13px] text-text-3">{service.number}</span>
            <span className="flex flex-col gap-1.5">
              <span className="font-heading text-[23px] leading-[1.15]">{service.title}</span>
              <span className="text-[15px] leading-normal text-text-2">{service.description}</span>
            </span>
            <span className="pt-1 text-primary" aria-hidden="true">
              →
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
