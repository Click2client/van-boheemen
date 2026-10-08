import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { formatAddress, site } from "@/config/site";
import { ui } from "@/content/ui";

export function Footer() {
  return (
    <footer className="mt-auto bg-primary text-on-primary">
      <Container className="grid gap-10 py-12 md:grid-cols-3">
        <div>
          <h2 className="font-heading text-lg">{ui.footerCompany}</h2>
          <p className="mt-3 font-semibold">{site.legalName}</p>
          <p className="mt-2 text-on-primary-muted">{formatAddress()}</p>
          <p className="text-on-primary-muted">{site.address.country}</p>
          <p className="mt-3 text-on-primary-muted">
            {ui.kvkLabel}: {site.kvk}
          </p>
          {site.vat ? (
            <p className="text-on-primary-muted">
              {ui.vatLabel}: {site.vat}
            </p>
          ) : null}
        </div>
        <div>
          <h2 className="font-heading text-lg">{ui.footerContact}</h2>
          <ul className="mt-3 space-y-1">
            <li>
              <a
                href={`mailto:${site.contact.email}`}
                className="inline-flex min-h-11 items-center underline underline-offset-2"
              >
                {site.contact.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.contact.phone}`}
                className="inline-flex min-h-11 items-center underline underline-offset-2"
              >
                {site.contact.phoneDisplay}
              </a>
            </li>
            {site.socials.map((social) => (
              <li key={social.url}>
                <a
                  href={social.url}
                  className="inline-flex min-h-11 items-center underline underline-offset-2"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {social.name}
                  <span className="sr-only"> ({ui.opensInNewTab})</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-heading text-lg">{ui.footerLegal}</h2>
          <ul className="mt-3">
            {site.footerNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center underline underline-offset-2"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                type="button"
                className="cky-banner-element inline-flex min-h-11 items-center text-left underline underline-offset-2"
              >
                {ui.cookieSettings}
              </button>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
