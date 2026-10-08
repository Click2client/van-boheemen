import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import type { ServicesContent } from "@/content/types";
import { toHeadingId } from "@/lib/slug";

type ServicesProps = ServicesContent & {
  headingLevel?: "h1" | "h2";
};

export function Services({ title, intro, items, headingLevel = "h2" }: ServicesProps) {
  const headingId = toHeadingId(title);
  const Heading = headingLevel === "h1" ? "h1" : "h2";
  const ItemHeading = headingLevel === "h1" ? "h2" : "h3";

  return (
    <section aria-labelledby={headingId} className="py-16">
      <Container>
        <div className="max-w-2xl">
          <Heading id={headingId} className="font-heading text-3xl text-ink sm:text-4xl">
            {title}
          </Heading>
          <p className="mt-4 text-lg text-muted">{intro}</p>
        </div>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((item, index) => (
            <li key={item.title}>
              <Card>
                <p className="font-heading text-sm text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <ItemHeading className="mt-3 font-heading text-2xl text-ink">
                  {item.title}
                </ItemHeading>
                <p className="mt-3 text-muted">{item.description}</p>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
