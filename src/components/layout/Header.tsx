"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

import { useCall } from "@/components/layout/CallProvider";
import { Container } from "@/components/ui/Container";
import { OpenStatus, StatusDot } from "@/components/ui/OpenStatus";
import { Pill } from "@/components/ui/Pill";
import { site } from "@/config/site";
import { ui } from "@/content/ui";

export function Header() {
  const pathname = usePathname();
  const { open: callOpen, toggle, close } = useCall();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const menuOpen = menuPath === pathname;
  const menuId = useId();
  const callId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const callRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const shouldFocusMenu = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    close();
  }, [pathname, close]);

  useEffect(() => {
    if (!callOpen) return;
    function onPointerDown(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (callRef.current?.contains(target)) return;
      if (target.closest("[data-call-trigger]")) return;
      close();
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [callOpen, close]);

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuPath(null);
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
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen && shouldFocusMenu.current) {
      shouldFocusMenu.current = false;
      panelRef.current?.querySelector("a")?.focus();
    }
  }, [menuOpen]);

  function toggleMenu() {
    close();
    if (menuOpen) {
      setMenuPath(null);
      buttonRef.current?.focus();
      return;
    }
    shouldFocusMenu.current = true;
    setMenuPath(pathname);
  }

  function openCall() {
    setMenuPath(null);
    toggle();
  }

  const solid = scrolled || menuOpen || callOpen;

  return (
    <header
      ref={headerRef}
      data-scrolled={solid ? "" : undefined}
      className="group sticky top-0 z-50 border-b border-transparent bg-transparent transition-[background-color,border-color,height] duration-300 data-[scrolled]:border-rule data-[scrolled]:bg-page/90 data-[scrolled]:backdrop-blur-[16px]"
    >
      <Container className="flex h-[88px] items-center justify-between gap-6 transition-[height] duration-300 group-data-[scrolled]:h-[72px]">
        <Link href="/" className="shrink-0">
          <Image
            src={site.logo}
            alt={site.legalName}
            width={site.logoWidth}
            height={site.logoHeight}
            priority
            className="h-[54px] w-auto mix-blend-multiply transition-[height] duration-300 group-data-[scrolled]:h-[46px]"
          />
        </Link>
        <nav aria-label={ui.mainNav} className="hidden wide:block">
          <ul className="flex items-center gap-1.5 text-[15px] font-medium">
            {site.navigation.map((item) => {
              const current =
                item.href === "/diensten"
                  ? pathname.startsWith("/diensten")
                  : pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className="rounded-full px-3.5 py-2 text-ink transition-colors duration-200 hover:bg-tint-nav hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="relative flex items-center gap-2.5">
          <button
            type="button"
            data-call-trigger=""
            aria-expanded={callOpen}
            aria-controls={callId}
            onClick={openCall}
            className="inline-flex h-[46px] items-center gap-2.5 rounded-full border border-border-input bg-white px-[18px] text-[15px] font-medium whitespace-nowrap text-ink transition-colors duration-200 hover:border-primary hover:text-primary"
          >
            <StatusDot />
            Bel ons
          </button>
          <Pill href="/contact#formulier" variant="header" className="hidden wide:inline-flex">
            Kennismaking plannen
          </Pill>
          <button
            ref={buttonRef}
            type="button"
            className="inline-flex size-[46px] flex-col items-center justify-center gap-[5px] rounded-full border border-border-input bg-white wide:hidden"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            onClick={toggleMenu}
          >
            <span className="sr-only">{menuOpen ? ui.closeMenu : ui.openMenu}</span>
            <span
              aria-hidden="true"
              className={`block h-px w-4 bg-ink transition-transform duration-300 ${menuOpen ? "translate-y-[3.25px] rotate-45" : ""}`}
            />
            <span
              aria-hidden="true"
              className={`block h-px w-4 bg-ink transition-transform duration-300 ${menuOpen ? "-translate-y-[3.25px] -rotate-45" : ""}`}
            />
          </button>
          {callOpen ? (
            <div
              ref={callRef}
              id={callId}
              role="dialog"
              aria-label="Bel een vestiging"
              className="absolute top-[58px] right-0 z-50 flex w-[min(320px,calc(100vw-40px))] flex-col gap-0.5 rounded-[18px] border border-border bg-white p-2 shadow-[0_30px_60px_-24px_rgba(20,33,43,0.28)]"
            >
              <p className="px-3.5 pt-3 pb-1.5 text-[13px] text-text-3">Welke vestiging wilt u bellen?</p>
              {site.offices.map((office) => (
                <a
                  key={office.city}
                  href={office.phoneTel}
                  className="flex items-center justify-between rounded-xl px-3.5 py-3.5 text-ink transition-colors hover:bg-surface"
                >
                  <span className="flex flex-col gap-0.5">
                    <span className="text-xs font-semibold tracking-[0.08em] text-text-3 uppercase">
                      {office.city}
                    </span>
                    <span className="text-lg font-semibold">{office.phoneDisplay}</span>
                  </span>
                  <span className="inline-flex size-9 items-center justify-center rounded-full bg-primary text-white" aria-hidden="true">
                    →
                  </span>
                </a>
              ))}
              <p className="mt-1 flex items-center gap-2 border-t border-tint-nav px-3.5 py-3 text-[13px] text-text-2">
                <OpenStatus variant="inline" />
                <span aria-hidden="true">· {site.openingHours}</span>
              </p>
            </div>
          ) : null}
        </div>
      </Container>
      {menuOpen ? (
        <nav
          ref={panelRef}
          id={menuId}
          aria-label={ui.mobileNav}
          className="flex h-[calc(100dvh-72px)] flex-col border-t border-border bg-page px-5 pt-2 pb-6 wide:hidden"
        >
          {site.mobileNavigation.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuPath(null)}
              className="flex items-baseline justify-between border-b border-rule px-1 py-[18px] font-heading text-[32px] leading-[1.1] text-ink"
            >
              <span>{item.label}</span>
              <span className="font-sans text-[13px] text-text-3">
                {String(index + 1).padStart(2, "0")}
              </span>
            </Link>
          ))}
          <Link
            href="/contact#formulier"
            onClick={() => setMenuPath(null)}
            className="mt-auto inline-flex h-14 items-center justify-center rounded-full bg-primary font-medium text-white"
          >
            Kennismaking plannen →
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
