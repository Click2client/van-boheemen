import type { Metadata } from "next";
import { Instrument_Sans, Newsreader } from "next/font/google";

import {
  GoogleTagManager,
  GoogleTagManagerNoScript,
} from "@/components/analytics/GoogleTagManager";
import { CallProvider } from "@/components/layout/CallProvider";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/layout/SkipLink";
import { Motion } from "@/components/motion/Motion";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/config/site";
import { getSiteUrl, organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import "./globals.css";

const instrument = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    locale: "nl_NL",
    type: "website",
    siteName: site.name,
    title: site.name,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: site.verification.google,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nl" className={`${instrument.variable} ${newsreader.variable} h-full`}>
      <body className="flex min-h-full flex-col overflow-x-clip bg-page font-sans text-[17px] leading-[1.55] text-ink antialiased">
        <GoogleTagManagerNoScript />
        <SkipLink />
        <CallProvider>
          <Header />
          <main id="main" tabIndex={-1} className="flex-1 scroll-mt-24 outline-none">
            {children}
          </main>
          <Footer />
        </CallProvider>
        <Motion />
        <GoogleTagManager />
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
      </body>
    </html>
  );
}
