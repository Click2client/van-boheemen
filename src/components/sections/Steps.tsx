import type { Step } from "@/content/shared";

type StepsProps = {
  items: Step[];
};

export function Steps({ items }: StepsProps) {
  return (
    <ol className="grid list-none gap-[clamp(28px,3vw,40px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr))]">
      {items.map((step, index) => (
        <li key={step.number} className="relative flex flex-col gap-4 pt-7">
          <span className="absolute inset-x-0 top-0 h-px bg-track" aria-hidden="true" />
          <span
            data-reveal="line"
            data-delay={String(index * 150)}
            className="absolute inset-x-0 -top-px h-[3px] origin-left bg-primary"
            aria-hidden="true"
          />
          <div data-reveal="fade" data-delay={String(index * 150)} className="flex flex-col gap-4">
            <p className="font-heading text-[clamp(64px,6vw,96px)] leading-[0.9] tracking-[-0.03em] text-number-blue italic">
              {step.number}
            </p>
            <h3 className="font-heading text-[26px] leading-[1.15]">{step.title}</h3>
            <p className="text-[15px] leading-relaxed text-text-2">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
