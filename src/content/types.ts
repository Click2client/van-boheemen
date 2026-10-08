export type PageMeta = {
  title: string;
  description: string;
};

export type CtaLink = {
  label: string;
  href: string;
};

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Highlight = {
  value: string;
  label: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  intro: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
  highlights: Highlight[];
  image: ImageAsset;
};

export type ServiceItem = {
  title: string;
  description: string;
};

export type ServicesContent = {
  title: string;
  intro: string;
  items: ServiceItem[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqContent = {
  title: string;
  intro: string;
  items: FaqItem[];
};

export type CtaContent = {
  title: string;
  text: string;
  cta: CtaLink;
};

export type ProseSection = {
  heading: string;
  paragraphs: string[];
};

export type LegalSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type LegalNotice = {
  title: string;
  text: string;
};
