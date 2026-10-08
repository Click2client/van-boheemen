import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { CtaContent } from "@/content/types";
import { toHeadingId } from "@/lib/slug";

export function CallToAction({ title, text, cta }: CtaContent) {
  const headingId = toHeadingId(title);

  return (
    <section aria-labelledby={headingId} className="bg-primary py-16 text-on-primary">
      <Container>
        <h2 id={headingId} className="max-w-2xl font-heading text-3xl sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-on-primary-muted">{text}</p>
        <div className="mt-8">
          <Button href={cta.href} variant="accent">
            {cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
