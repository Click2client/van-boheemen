"use client";

import { useId, useState } from "react";

import type { ServiceFaq } from "@/content/services";

type FaqAccordionProps = {
  items: ServiceFaq[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [open, setOpen] = useState(0);
  const baseId = useId();

  return (
    <div data-reveal="fade" data-delay="120" className="border-t border-ink">
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `${baseId}-${index}`;
        return (
          <div key={item.question} className="border-b border-border">
            <h3>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-5 py-[26px] text-left text-ink"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : index)}
              >
                <span className="font-heading text-[clamp(21px,1.9vw,26px)] leading-[1.2]">{item.question}</span>
                <span
                  className={`inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-border-input text-lg transition-colors ${
                    isOpen ? "border-primary bg-primary text-white" : "bg-white text-ink"
                  }`}
                  aria-hidden="true"
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div id={panelId} hidden={!isOpen}>
              <p className="max-w-[620px] pr-16 pb-7 leading-[1.65] text-text-2">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
