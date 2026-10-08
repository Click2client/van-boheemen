"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

import { flowLabels } from "@/content/shared";

function subscribeReducedMotion(onChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function FlowCard({ title, label }: { title: string; label: string }) {
  const reduceMotion = useSyncExternalStore(subscribeReducedMotion, prefersReducedMotion, () => false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      if (document.visibilityState !== "visible") return;
      setStep((value) => (value + 1) % 6);
    }, 1300);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const doneUntil = reduceMotion ? 4 : Math.min(step, 4);

  return (
    <div
      data-reveal="fade"
      data-delay="1100"
      className="absolute bottom-[-36px] left-0 w-[min(320px,82%)] wide:-left-9"
    >
      <div className="flex flex-col gap-3.5 rounded-[20px] border border-border bg-white px-5 py-[18px] shadow-[0_30px_60px_-28px_rgba(20,33,43,0.35)]">
        <div className="flex flex-col gap-0.5">
          <p className="font-heading text-[19px] whitespace-nowrap">{title}</p>
          <p className="text-[11px] font-semibold tracking-[0.08em] text-green uppercase">{label}</p>
        </div>
        <div className="h-[3px] overflow-hidden rounded-[3px] bg-[#EEF2F5]">
          <div
            className={`h-full bg-green transition-[width] duration-700 ease-draw ${
              ["w-0", "w-1/4", "w-1/2", "w-3/4", "w-full"][doneUntil]
            }`}
          />
        </div>
        <ul className="flex flex-col gap-[9px]">
          {flowLabels.map((item, index) => {
            const done = index < doneUntil;
            return (
              <li
                key={item}
                className={`flex items-center gap-2.5 text-sm transition-colors duration-300 ${done ? "text-ink" : "text-text-3"}`}
              >
                <span
                  className={`inline-flex size-4 shrink-0 items-center justify-center rounded-full border-[1.5px] text-[10px] text-white transition-colors ${
                    done ? "border-green bg-green" : "border-track bg-transparent"
                  }`}
                  aria-hidden="true"
                >
                  ✓
                </span>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
