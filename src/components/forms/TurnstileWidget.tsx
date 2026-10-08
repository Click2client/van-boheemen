"use client";

import Script from "next/script";
import { useId } from "react";

type TurnstileApi = {
  render: (element: HTMLElement, options: { sitekey: string }) => string;
  reset: (widgetId?: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

type TurnstileWidgetProps = {
  siteKey: string;
};

export function TurnstileWidget({ siteKey }: TurnstileWidgetProps) {
  const reactId = useId().replace(/:/g, "");
  const elementId = `turnstile-${reactId}`;

  if (!siteKey) return null;

  return (
    <div>
      <div id={elementId} className="min-h-16" />
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={() => {
          const element = document.getElementById(elementId);
          if (!element || !window.turnstile || element.dataset.rendered === "true") return;
          window.turnstile.render(element, { sitekey: siteKey });
          element.dataset.rendered = "true";
        }}
      />
    </div>
  );
}
