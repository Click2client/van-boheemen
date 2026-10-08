import type { ReactNode } from "react";

import { RichHeading } from "@/components/ui/RichHeading";
import type { TextPart } from "@/content/shared";

type SectionIntroProps = {
  label: string;
  heading: TextPart[];
  intro?: string;
  extra?: ReactNode;
  id?: string;
  light?: boolean;
};

export function SectionIntro({ label, heading, intro, extra, id, light = false }: SectionIntroProps) {
  return (
    <div
      id={id}
      className="grid items-end gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr))] wide:gap-x-[72px]"
    >
      <div data-reveal="fade" className="flex flex-col gap-[18px]">
        <p className={`text-[13px] font-semibold tracking-[0.1em] uppercase ${light ? "text-sky" : "text-green"}`}>
          {label}
        </p>
        <RichHeading parts={heading} accentClassName={light ? "text-green-soft" : "text-primary"} />
      </div>
      {intro || extra ? (
        <div data-reveal="fade" data-delay="120" className="flex max-w-[440px] flex-col gap-5">
          {intro ? (
            <p className={`text-[17px] leading-[1.65] ${light ? "text-on-dark" : "text-text-2"}`}>{intro}</p>
          ) : null}
          {extra}
        </div>
      ) : null}
    </div>
  );
}
