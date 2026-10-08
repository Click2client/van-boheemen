import type { PageMeta } from "@/content/types";
import type { TextPart } from "@/content/shared";

export const dienstenContent = {
  metadata: {
    title: "Diensten voor administratie en aangifte",
    description:
      "Van scannen en boeken tot jaarrekening, belastingaangifte en loonadministratie. Voor ondernemers en particulieren in Leidschendam en Den Haag.",
  } satisfies PageMeta,
  eyebrow: "Diensten",
  breadcrumb: "Diensten",
  headline: [
    { text: "Van losse bonnetjes" },
    { text: "tot jaarrekening", accent: true },
  ] satisfies TextPart[],
  lead: "Hoe uw administratie er ook uitziet — een schoenendoos of keurige mappen — wij nemen het werk uit handen. Voor ondernemers én particulieren.",
  individuals: {
    label: "Particulieren",
    heading: [
      { text: "Ook zonder eigen bedrijf " },
      { text: "bent u welkom", accent: true },
    ] satisfies TextPart[],
    text: "Wij verzorgen uw aangifte inkomstenbelasting en kijken wat er voor u mogelijk is. Persoonlijk, op kantoor of telefonisch.",
    link: "Aangifte voor particulieren",
    href: "/diensten/aangifte-particulieren",
  },
};
