import { marqueeItems } from "@/content/shared";

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="overflow-hidden border-y border-rule bg-white py-[22px]">
      <div data-loop className="marquee-track flex w-max font-heading text-[clamp(22px,2.4vw,32px)] text-ink italic">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className={`flex items-center gap-10 pr-10 ${index >= marqueeItems.length ? "marquee-copy" : ""}`}
          >
            {item}
            <span className="inline-block size-2 rounded-full bg-logo-green" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
