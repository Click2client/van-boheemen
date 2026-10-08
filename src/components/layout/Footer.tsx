import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { site } from "@/config/site";
import { ui } from "@/content/ui";
import { services } from "@/content/services";

export function Footer() {
  return (
    <footer className="overflow-hidden bg-ink text-footer-text">
      <Container className="flex flex-col gap-14 pt-[clamp(56px,7vw,96px)]">
        <div className="grid gap-10 [grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr))]">
          <div className="flex flex-col gap-[18px] text-sm leading-relaxed">
            <div className="w-fit rounded-[14px] bg-white px-3.5 py-2.5">
              <Image
                src={site.logo}
                alt={site.legalName}
                width={site.logoWidth}
                height={site.logoHeight}
                className="h-11 w-auto"
              />
            </div>
            <p>
              <span className="font-medium text-white">Werkgebied</span>
              <br />
              {site.area}
            </p>
            {site.contact.email ? (
              <a className="font-medium text-white hover:text-green-soft" href={`mailto:${site.contact.email}`}>
                {site.contact.email}
              </a>
            ) : null}
          </div>
          {site.offices.map((office) => (
            <div key={office.city} className="flex flex-col gap-2 text-[15px] leading-relaxed">
              <p className="mb-2 text-xs font-semibold tracking-[0.1em] text-white uppercase">
                {office.city}
              </p>
              <p>
                {office.street}
                <br />
                {office.postalCode} {office.locality}
              </p>
              <a className="font-medium text-white transition-colors hover:text-green-soft" href={office.phoneTel}>
                {office.phoneDisplay}
              </a>
              <p className="text-sm text-footer-muted">{site.openingHours}</p>
            </div>
          ))}
          <div className="flex flex-col gap-2 text-sm leading-normal">
            <p className="mb-2 text-xs font-semibold tracking-[0.1em] text-white uppercase">Diensten</p>
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/diensten/${service.slug}`}
                className="text-footer-text transition-colors hover:text-white"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-white/12 pt-6 text-[13px] text-footer-muted">
          <p>
            {site.legalName} · KvK {site.kvk} · Btw {site.vat}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {site.footerNavigation.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
            {site.portalUrl ? (
              <a href={site.portalUrl} className="hover:text-white">
                Inloggen klantportaal
              </a>
            ) : (
              <span>Inloggen klantportaal</span>
            )}
            <button type="button" className="cky-banner-element hover:text-white">
              {ui.cookieSettings}
            </button>
          </div>
        </div>
        <p
          aria-hidden="true"
          className="font-heading text-[clamp(72px,17vw,250px)] leading-[0.78] font-normal tracking-[-0.045em] whitespace-nowrap text-wordmark"
        >
          Van Boheemen
        </p>
      </Container>
    </footer>
  );
}
