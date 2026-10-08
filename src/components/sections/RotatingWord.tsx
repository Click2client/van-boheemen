"use client";

import { useEffect, useRef, useState } from "react";

type RotatingWordProps = {
  words: string[];
};

export function RotatingWord({ words }: RotatingWordProps) {
  const [index, setIndex] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const first = useRef(true);
  const word = words[index] ?? words[0] ?? "";

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => {
      if (document.visibilityState !== "visible") return;
      setIndex((value) => (value + 1) % words.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, [words.length]);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !ref.current || document.visibilityState !== "visible") return;
    ref.current.animate(
      [
        { transform: "translateY(105%)", opacity: 0 },
        { transform: "none", opacity: 1 },
      ],
      { duration: 900, easing: "cubic-bezier(.16, 1, .3, 1)" },
    );
  }, [index]);

  return (
    <span className="inline-block overflow-hidden pr-[0.08em] align-bottom text-primary italic">
      <span ref={ref} className="inline-block">
        {word}
      </span>
    </span>
  );
}
