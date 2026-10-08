"use client";

import { useState } from "react";

import { reviews } from "@/content/shared";

type ReviewsProps = {
  label: string;
  note: string;
};

export function Reviews({ label, note }: ReviewsProps) {
  const [index, setIndex] = useState(0);
  const review = reviews[index];
  if (!review) return null;
  const counter = `${String(index + 1).padStart(2, "0")} / ${String(reviews.length).padStart(2, "0")}`;

  return (
    <section>
      <div className="mx-auto grid w-full max-w-[1320px] items-start gap-10 px-[clamp(20px,4vw,48px)] py-[clamp(72px,9vw,140px)] wide:grid-cols-[minmax(280px,0.7fr)_minmax(0,1.6fr)] wide:gap-x-[72px]">
        <div data-reveal="fade" className="flex flex-col gap-[18px]">
          <p className="text-[13px] font-semibold tracking-[0.1em] text-green uppercase">{label}</p>
          <p className="w-fit rounded-md bg-tint-green px-2.5 py-1.5 font-mono text-xs text-green">{note}</p>
          <div className="mt-3 flex items-center gap-2.5">
            <button
              type="button"
              aria-label="Vorige review"
              onClick={() => setIndex((value) => (value + reviews.length - 1) % reviews.length)}
              className="inline-flex size-12 items-center justify-center rounded-full border border-border-input bg-white text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Volgende review"
              onClick={() => setIndex((value) => (value + 1) % reviews.length)}
              className="inline-flex size-12 items-center justify-center rounded-full border border-border-input bg-white text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white"
            >
              →
            </button>
            <p className="ml-2 text-sm text-text-3 tabular-nums">{counter}</p>
          </div>
        </div>
        <figure data-reveal="fade" data-delay="120" className="min-w-0">
          <div key={index} className="panel-in flex flex-col gap-7">
            <blockquote className="font-heading text-[clamp(28px,3.4vw,48px)] leading-[1.18] tracking-[-0.015em] text-ink">
              <span className="text-logo-green">“</span>
              {review.quote}
              <span className="text-logo-green">”</span>
            </blockquote>
            <figcaption className="flex items-center gap-3.5 text-[15px] text-text-2">
              <span className="inline-block size-11 rounded-full bg-tint-blue" aria-hidden="true" />
              {review.who}
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}
