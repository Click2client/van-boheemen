"use client";

import { useEffect, useState } from "react";

import { site } from "@/config/site";
import { isOpenNow } from "@/lib/opening-hours";

type OpenStatusProps = {
  variant?: "pill" | "quiet" | "inline";
};

export function OpenStatus({ variant = "pill" }: OpenStatusProps) {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const update = () => setOpen(isOpenNow());
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  const label = open === null ? site.openingHours : open ? "Nu geopend" : "Nu gesloten";
  const dot = open ? "bg-green" : "bg-footer-muted";

  if (variant === "inline") {
    return (
      <span className="inline-flex items-center gap-2">
        <span className={`size-1.5 rounded-full ${dot}`} aria-hidden="true" />
        {label}
        {open !== null ? <span className="sr-only">, {site.openingHours}</span> : null}
      </span>
    );
  }

  if (variant === "quiet") {
    return (
      <span className="inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1.5 text-[13px] text-text-2">
        <span className={`size-1.5 rounded-full ${dot}`} aria-hidden="true" />
        {label}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-1.5 text-sm text-text-2">
      <span className={`size-[7px] rounded-full ${dot}`} aria-hidden="true" />
      {label}
    </span>
  );
}

export function StatusDot() {
  return (
    <span className="relative inline-block size-2" aria-hidden="true">
      <span data-loop className="pulse-ring absolute inset-0 rounded-full bg-green" />
      <span className="absolute inset-0 rounded-full bg-green" />
    </span>
  );
}
