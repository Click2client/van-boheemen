import type { MetadataRoute } from "next";

import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return site.pages.map((page) => ({
    url: new URL(page.path, site.url).toString(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
