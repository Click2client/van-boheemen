import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CtaBand } from "@/components/sections/CtaBand";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { JsonLd } from "@/components/seo/JsonLd";
import { getService, services } from "@/content/services";
import { createMetadata, faqJsonLd, servicesJsonLd } from "@/lib/seo";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return createMetadata({
    title: service.metadata.title,
    description: service.metadata.description,
    path: `/diensten/${service.slug}`,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <ServiceDetail service={service} />
      <CtaBand />
      <JsonLd
        data={servicesJsonLd([{ title: service.title, description: service.lead }])}
      />
      <JsonLd
        data={faqJsonLd(service.faqs.map((item) => ({ question: item.question, answer: item.answer })))}
      />
    </>
  );
}
