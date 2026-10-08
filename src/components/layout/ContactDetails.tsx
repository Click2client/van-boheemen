import { formatAddress, site } from "@/config/site";
import { ui } from "@/content/ui";

type ContactDetailsProps = {
  title: string;
};

export function ContactDetails({ title }: ContactDetailsProps) {
  return (
    <section aria-labelledby="bedrijfsgegevens" className="mt-8">
      <h2 id="bedrijfsgegevens" className="font-heading text-2xl text-ink">
        {title}
      </h2>
      <address className="mt-4 space-y-2 text-muted not-italic">
        <p className="font-semibold text-ink">{site.legalName}</p>
        <p>{formatAddress()}</p>
        <p>{site.address.country}</p>
        <p>
          <a className="underline underline-offset-2" href={`mailto:${site.contact.email}`}>
            {site.contact.email}
          </a>
        </p>
        <p>
          <a className="underline underline-offset-2" href={`tel:${site.contact.phone}`}>
            {site.contact.phoneDisplay}
          </a>
        </p>
        <p>
          {ui.kvkLabel}: {site.kvk}
        </p>
        {site.vat ? (
          <p>
            {ui.vatLabel}: {site.vat}
          </p>
        ) : null}
      </address>
    </section>
  );
}
