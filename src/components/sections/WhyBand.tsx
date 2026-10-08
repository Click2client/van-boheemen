import { Container } from "@/components/ui/Container";
import { RichHeading } from "@/components/ui/RichHeading";
import { whyStatement, reasons } from "@/content/shared";

type WhyBandProps = {
  label: string;
};

export function WhyBand({ label }: WhyBandProps) {
  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <div
        aria-hidden="true"
        data-loop
        className="drift-a pointer-events-none absolute -top-[18vw] -right-[12vw] size-[46vw] rounded-full border border-sky/22"
      />
      <div
        aria-hidden="true"
        data-loop
        className="drift-b pointer-events-none absolute -top-[10vw] -right-[4vw] size-[30vw] rounded-full border border-logo-green/28"
      />
      <Container className="relative flex flex-col gap-[clamp(48px,6vw,88px)] py-[clamp(80px,10vw,150px)]">
        <div data-reveal="fade" className="flex max-w-[1040px] flex-col gap-6">
          <p className="text-[13px] font-semibold tracking-[0.1em] text-sky uppercase">{label}</p>
          <RichHeading
            parts={whyStatement}
            accentClassName="text-green-soft"
            className="font-heading text-[clamp(34px,4.8vw,68px)] leading-[1.06] font-normal tracking-[-0.025em]"
          />
        </div>
        <div className="grid gap-x-10 border-t border-white/20 [grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr))]">
          {reasons.map((reason, index) => (
            <div
              key={reason.number}
              data-reveal="fade"
              data-delay={String(index * 100)}
              className="flex flex-col gap-3 border-b border-white/20 py-7"
            >
              <p className="text-[13px] text-sky tabular-nums">{reason.number}</p>
              <h3 className="font-heading text-[28px] leading-[1.1]">{reason.title}</h3>
              <p className="text-[15px] leading-relaxed text-on-dark">{reason.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
