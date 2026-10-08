import Link from "next/link";

import { OpenStatus } from "@/components/ui/OpenStatus";
import { Pill } from "@/components/ui/Pill";
import { site } from "@/config/site";

export function Locations() {
  return (
    <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr))]">
      {site.offices.map((office, index) => (
        <article
          key={office.city}
          data-reveal="fade"
          data-delay={String(index * 120)}
          className="flex h-full flex-col overflow-hidden rounded-[28px] border border-border bg-white transition duration-300 ease-draw hover:-translate-y-1 hover:shadow-[0_40px_70px_-40px_rgba(20,33,43,0.35)]"
        >
          <div className="relative aspect-[2/1] overflow-hidden bg-[#E9EFF3]">
            <iframe
              src={office.mapUrl}
              title={`Kaart van ${office.city}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0 contrast-[1.02] saturate-[.55]"
            />
          </div>
          <div className="flex flex-1 flex-col gap-5 p-[clamp(24px,3vw,36px)]">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-heading text-[clamp(30px,3vw,40px)] leading-none tracking-[-0.02em]">
                {office.city}
              </h3>
              <OpenStatus variant="quiet" />
            </div>
            <div className="grid gap-4 text-[15px] leading-relaxed [grid-template-columns:repeat(auto-fit,minmax(150px,1fr))]">
              <div className="flex flex-col gap-1">
                <p className="text-xs font-semibold tracking-[0.08em] text-text-3 uppercase">Adres</p>
                <address className="text-ink not-italic">
                  {office.street}
                  <br />
                  {office.postalCode} {office.locality}
                </address>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs font-semibold tracking-[0.08em] text-text-3 uppercase">Openingstijden</p>
                <p className="text-ink">
                  ma – vr
                  <br />
                  09.00 – 18.00
                </p>
              </div>
            </div>
            {office.trafficNotice && site.showTrafficNotice ? (
              <div className="flex items-center gap-3 rounded-[14px] border border-border px-4 py-3 text-sm text-text-2">
                <span
                  aria-hidden="true"
                  className="inline-flex size-[22px] shrink-0 items-center justify-center rounded-full border border-primary font-heading text-sm text-primary italic"
                >
                  i
                </span>
                <span className="flex-1">Let op: verkeerssituatie gewijzigd</span>
                <Link href="/verkeerssituatie-leidschendam" className="font-medium whitespace-nowrap text-primary">
                  Lees meer
                  <span className="sr-only"> over de verkeerssituatie in Leidschendam</span>
                  <span aria-hidden="true"> →</span>
                </Link>
              </div>
            ) : null}
            <div className="mt-auto flex flex-wrap gap-2.5 pt-1">
              <Pill href={office.phoneTel} variant="phone">
                {office.phoneDisplay}
              </Pill>
              <Pill href={office.routeUrl} variant="route" external>
                Plan route
              </Pill>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
