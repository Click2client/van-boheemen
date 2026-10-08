import type { Metadata } from "next";

import { CallToAction } from "@/components/sections/CallToAction";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { homeContent } from "@/content/home";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: homeContent.metadata.title,
  description: homeContent.metadata.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero {...homeContent.hero} />
      <Services {...homeContent.services} />
      <Faq {...homeContent.faq} />
      <CallToAction {...homeContent.cta} />
    </>
  );
}
