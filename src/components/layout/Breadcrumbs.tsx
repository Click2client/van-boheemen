import Link from "next/link";

import { JsonLd } from "@/components/seo/JsonLd";
import { ui } from "@/content/ui";
import { breadcrumbJsonLd } from "@/lib/seo";
import type { NavItem } from "@/config/site";

type BreadcrumbsProps = {
  items: NavItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <>
      <nav aria-label={ui.breadcrumbLabel}>
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
          {items.map((item, index) => {
            const isCurrent = index === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-2">
                {index > 0 ? <span aria-hidden="true">/</span> : null}
                {isCurrent ? (
                  <span aria-current="page" className="font-semibold text-ink">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="underline underline-offset-2">
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbJsonLd(items)} />
    </>
  );
}
