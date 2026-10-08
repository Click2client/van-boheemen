import Script from "next/script";

import { env } from "@/lib/env";

const gtmIdPattern = /^GTM-[A-Z0-9]+$/;

const consentDefault = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  functionality_storage: 'denied',
  personalization_storage: 'denied',
  security_storage: 'granted',
  wait_for_update: 500
});`;

function activeGtmId(): string | null {
  const id = env.NEXT_PUBLIC_GTM_ID;
  const allowed =
    env.VERCEL_ENV === "production" || env.NEXT_PUBLIC_ANALYTICS_DEBUG === "true";
  if (!allowed || !gtmIdPattern.test(id)) return null;
  return id;
}

export function GoogleTagManager() {
  const id = activeGtmId();
  if (!id) return null;

  const loader = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${id}');`;

  return (
    <>
      {/* Only rendered from the root layout. App Router has no pages/_document.js. */}
      {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
      <Script id="consent-mode-default" strategy="beforeInteractive">
        {consentDefault}
      </Script>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {loader}
      </Script>
    </>
  );
}

export function GoogleTagManagerNoScript() {
  const id = activeGtmId();
  if (!id) return null;

  return (
    <noscript>
      <iframe
        title="Google Tag Manager"
        src={`https://www.googletagmanager.com/ns.html?id=${id}`}
        className="hidden h-0 w-0"
      />
    </noscript>
  );
}
