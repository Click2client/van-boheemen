import type { MetadataRoute } from "next";

import { site } from "@/config/site";
import { env } from "@/lib/env";

export default function robots(): MetadataRoute.Robots {
  if (env.VERCEL_ENV !== "production") {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", site.url).toString(),
    host: site.url,
  };
}
