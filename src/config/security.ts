/**
 * Origins allowed in the Content Security Policy, grouped by directive.
 * Add a domain here when a new third-party script, image, connection, or frame is introduced.
 */
export const cspSources = {
  script: [
    "https://www.googletagmanager.com",
    "https://*.googletagmanager.com",
    "https://*.google-analytics.com",
    "https://*.analytics.google.com",
    "https://challenges.cloudflare.com",
    "https://cdn-cookieyes.com",
  ],
  connect: [
    "https://www.googletagmanager.com",
    "https://*.googletagmanager.com",
    "https://*.google-analytics.com",
    "https://*.analytics.google.com",
    "https://challenges.cloudflare.com",
    "https://cdn-cookieyes.com",
    "https://*.cookieyes.com",
  ],
  img: [
    "https://www.googletagmanager.com",
    "https://*.googletagmanager.com",
    "https://*.google-analytics.com",
    "https://*.analytics.google.com",
    "https://cdn-cookieyes.com",
    "https://images.pexels.com",
  ],
  frame: [
    "https://www.googletagmanager.com",
    "https://challenges.cloudflare.com",
    "https://maps.google.com",
    "https://www.google.com",
  ],
  style: [] as string[],
  font: [] as string[],
};
