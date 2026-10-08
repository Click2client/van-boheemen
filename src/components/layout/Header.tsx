"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

import { Container } from "@/components/ui/Container";
import { site, type NavItem } from "@/config/site";
import { ui } from "@/content/ui";

export function Header() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const menuId = useId();
  const shouldFocusPanel = useRef(false);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenPath(null);
        buttonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;
      const items = panelRef.current.querySelectorAll<HTMLElement>("a");
      const first = items[0];
      const last = items[items.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (open && shouldFocusPanel.current) {
      shouldFocusPanel.current = false;
      panelRef.current?.querySelector("a")?.focus();
    }
  }, [open]);

  function toggleMenu() {
    if (open) {
      setOpenPath(null);
      buttonRef.current?.focus();
      return;
    }
    shouldFocusPanel.current = true;
    setOpenPath(pathname);
  }

  return (
    <header className="sticky top-0 z-40 border-t-4 border-t-accent border-b border-b-line bg-surface">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="font-heading text-lg font-semibold text-ink sm:text-xl">
          {site.name}
        </Link>
        <nav aria-label={ui.mainNav} className="hidden md:block">
          <ul className="flex items-center gap-1">
            {site.navigation.map((item) => (
              <li key={item.href}>
                <NavAnchor item={item} pathname={pathname} />
              </li>
            ))}
          </ul>
        </nav>
        <button
          ref={buttonRef}
          type="button"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-line px-4 text-sm font-semibold text-ink md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={toggleMenu}
        >
          {open ? ui.closeMenu : ui.openMenu}
        </button>
      </Container>
      {open ? (
        <nav
          ref={panelRef}
          id={menuId}
          aria-label={ui.mobileNav}
          className="absolute inset-x-0 top-full border-b border-line bg-surface md:hidden"
        >
          <ul className="mx-auto w-full max-w-6xl px-4 py-2 sm:px-6">
            {site.navigation.map((item) => (
              <li key={item.href}>
                <NavAnchor item={item} pathname={pathname} mobile />
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

function NavAnchor({
  item,
  pathname,
  mobile = false,
}: {
  item: NavItem;
  pathname: string;
  mobile?: boolean;
}) {
  const current = pathname === item.href;
  const className = mobile
    ? "flex min-h-11 items-center text-base font-semibold text-ink aria-[current=page]:text-accent"
    : "inline-flex min-h-11 items-center px-3 text-base font-semibold text-ink aria-[current=page]:text-accent aria-[current=page]:underline";

  return (
    <Link
      href={item.href}
      aria-current={current ? "page" : undefined}
      className={className}
    >
      {item.label}
    </Link>
  );
}
