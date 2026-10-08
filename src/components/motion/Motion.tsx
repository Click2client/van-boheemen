"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const ease = "cubic-bezier(.16, 1, .3, 1)";

const keyframes: Record<"fade" | "rise" | "mask" | "line" | "vline", Keyframe[]> = {
  fade: [
    { opacity: 0, transform: "translateY(32px)" },
    { opacity: 1, transform: "none" },
  ],
  rise: [{ transform: "translateY(108%)" }, { transform: "none" }],
  mask: [
    { clipPath: "inset(100% 0 0 0 round 28px)", transform: "scale(1.06)" },
    { clipPath: "inset(0 0 0 0 round 28px)", transform: "none" },
  ],
  line: [{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }],
  vline: [{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }],
};

const duration: Record<keyof typeof keyframes, number> = {
  fade: 1000,
  rise: 1100,
  mask: 1500,
  line: 1400,
  vline: 1800,
};

function isKind(value: string): value is keyof typeof keyframes {
  return value in keyframes;
}

function watchTarget(element: HTMLElement, name: keyof typeof keyframes) {
  if ((name === "rise" || name === "line" || name === "vline") && element.parentElement) {
    return element.parentElement;
  }
  return element;
}

function isOnScreen(element: Element) {
  const box = element.getBoundingClientRect();
  return box.top < window.innerHeight && box.bottom > 0;
}

export function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const setLoops = (running: boolean) => {
      document.documentElement.classList.toggle("animations-paused", !running);
    };
    const onVisibility = () => {
      setLoops(document.visibilityState === "visible" && !reduce);
    };
    onVisibility();
    document.addEventListener("visibilitychange", onVisibility);

    if (reduce) {
      return () => document.removeEventListener("visibilitychange", onVisibility);
    }

    const running = new WeakMap<Element, Animation>();
    let observer: IntersectionObserver | undefined;
    let safety: number | undefined;
    let started = false;

    const init = () => {
      if (started || document.visibilityState !== "visible") return;
      started = true;
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            running.get(entry.target)?.play();
            observer?.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -6% 0px" },
      );

      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
        const kind = element.dataset.reveal ?? "fade";
        const name = isKind(kind) ? kind : "fade";
        if (name === "line") element.classList.add("origin-left");
        if (name === "vline") element.classList.add("origin-top");
        const animation = element.animate(keyframes[name], {
          duration: duration[name],
          delay: Number(element.dataset.delay ?? 0),
          easing: ease,
          fill: "backwards",
        });
        const watch = watchTarget(element, name);
        running.set(element, animation);
        running.set(watch, animation);
        if (isOnScreen(watch)) return;
        animation.pause();
        observer?.observe(watch);
      });

      safety = window.setTimeout(() => {
        document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
          const animation = running.get(element);
          if (!animation || animation.playState !== "paused") return;
          const kind = element.dataset.reveal ?? "fade";
          const name = isKind(kind) ? kind : "fade";
          if (isOnScreen(watchTarget(element, name))) animation.play();
        });
      }, 1600);
    };

    init();
    document.addEventListener("visibilitychange", init);

    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      document.removeEventListener("visibilitychange", init);
      observer?.disconnect();
      if (safety) window.clearTimeout(safety);
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
        running.get(element)?.cancel();
      });
    };
  }, [pathname]);

  return null;
}
