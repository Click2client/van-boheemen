import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { site } from "@/config/site";
import { ctaContent } from "@/content/shared";

export function CtaBand() {
  return (
    <section className="overflow-hidden bg-tint-green" aria-labelledby="kennismaken">
      <Container className="flex flex-col gap-[clamp(40px,5vw,64px)] py-[clamp(80px,10vw,160px)]">
        <h2
          id="kennismaken"
          className="font-heading text-[clamp(48px,9vw,148px)] leading-[0.95] font-normal tracking-[-0.04em] text-ink"
        >
          {ctaContent.lines.map((line, index) => (
            <span key={line.text} className="block overflow-hidden pb-[0.06em]">
              <span data-reveal="rise" data-delay={index === 0 ? "0" : "120"} className="block">
                {line.accent ? <em className="text-green-deep">{line.text}</em> : line.text}
              </span>
            </span>
          ))}
        </h2>
        <div className="grid items-end gap-8 border-t border-ink/18 pt-8 [grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr))]">
          <p data-reveal="fade" className="max-w-[420px] text-lg leading-relaxed text-cta-text">
            {ctaContent.text}
          </p>
          {site.offices.map((office, index) => (
            <a
              key={office.city}
              data-reveal="fade"
              data-delay={String(100 + index * 60)}
              href={office.phoneTel}
              className="flex flex-col gap-1 text-ink"
            >
              <span className="text-xs font-semibold tracking-[0.08em] text-text-2 uppercase">{office.city}</span>
              <span className="font-heading text-[clamp(26px,2.4vw,34px)] tracking-[-0.01em]">
                {office.phoneDisplay}
              </span>
            </a>
          ))}
          <div data-reveal="fade" data-delay="220">
            <Pill href={ctaContent.href} variant="dark">
              {ctaContent.button}
            </Pill>
          </div>
        </div>
      </Container>
    </section>
  );
}
