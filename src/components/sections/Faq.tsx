import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import type { FaqContent } from "@/content/types";
import { faqJsonLd } from "@/lib/seo";
import { toHeadingId } from "@/lib/slug";

export function Faq({ title, intro, items }: FaqContent) {
  const headingId = toHeadingId(title);

  return (
    <section aria-labelledby={headingId} className="border-t border-line bg-surface py-16">
      <Container className="max-w-3xl">
        <h2 id={headingId} className="font-heading text-3xl text-ink sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-lg text-muted">{intro}</p>
        <div className="mt-8 border-t border-line">
          {items.map((item) => (
            <details key={item.question} className="group border-b border-line">
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-3 font-semibold text-ink [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span aria-hidden="true" className="text-xl text-accent group-open:hidden">
                  +
                </span>
                <span
                  aria-hidden="true"
                  className="hidden text-xl text-accent group-open:inline"
                >
                  −
                </span>
              </summary>
              <p className="pb-4 text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
      <JsonLd data={faqJsonLd(items)} />
    </section>
  );
}
