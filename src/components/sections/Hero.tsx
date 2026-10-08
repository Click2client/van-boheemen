import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { HeroContent } from "@/content/types";

export function Hero({
  eyebrow,
  title,
  intro,
  primaryCta,
  secondaryCta,
  highlights,
  image,
}: HeroContent) {
  return (
    <section className="border-b border-line bg-surface">
      <Container className="grid items-center gap-10 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        <div className="min-w-0">
          <p className="text-sm font-semibold tracking-[0.14em] text-accent uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-xl font-heading text-4xl leading-tight text-ink sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">{intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={primaryCta.href}>{primaryCta.label}</Button>
            {secondaryCta ? (
              <Button href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <li key={item.label} className="border-t border-line pt-3">
                <p className="font-heading text-lg text-ink">{item.value}</p>
                <p className="mt-1 text-sm text-muted">{item.label}</p>
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          priority
          sizes="(min-width: 1024px) 32rem, 100vw"
          className="h-auto w-full rounded-2xl border border-line"
        />
      </Container>
    </section>
  );
}
