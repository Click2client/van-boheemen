import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center rounded-full font-medium whitespace-nowrap transition-[gap,background-color,border-color,color,box-shadow] duration-300 ease-draw";

const variants = {
  primary:
    "h-[58px] gap-4 bg-primary pr-2 pl-[26px] text-base text-white shadow-[0_18px_30px_-16px_rgba(31,78,121,0.6)] hover:gap-6 hover:bg-primary-hover",
  header:
    "h-[46px] gap-3 bg-primary pr-2 pl-5 text-[15px] text-white hover:gap-[18px] hover:bg-primary-hover",
  dark: "h-16 gap-[18px] bg-ink pr-2.5 pl-7 text-base text-white hover:gap-7 hover:bg-primary",
  outline:
    "h-[58px] border border-border-input bg-white px-6 text-base text-ink hover:border-primary hover:text-primary",
  phone: "h-[52px] bg-primary px-[22px] text-white hover:bg-primary-hover",
  route:
    "h-[52px] gap-2.5 border border-border-input px-[22px] text-ink hover:gap-4 hover:border-primary hover:text-primary",
};

type PillProps = {
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  href?: string;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  "data-call-trigger"?: string;
};

function arrow(variant: keyof typeof variants) {
  if (variant === "outline" || variant === "phone" || variant === "route") return null;
  const chip =
    variant === "dark"
      ? "size-11 bg-logo-green text-ink"
      : variant === "header"
        ? "size-8 bg-white/14 text-white"
        : "size-[42px] bg-white text-primary";
  return (
    <span className={`inline-flex items-center justify-center rounded-full text-sm ${chip}`} aria-hidden="true">
      →
    </span>
  );
}

export function Pill({
  children,
  variant = "primary",
  className = "",
  href,
  external,
  type = "button",
  disabled,
  onClick,
  ...rest
}: PillProps) {
  const classNameFull = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {arrow(variant)}
      {variant === "route" ? <span aria-hidden="true">↗</span> : null}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} className={classNameFull} target="_blank" rel="noopener noreferrer">
          {content}
          <span className="sr-only"> opent in een nieuw venster</span>
        </a>
      );
    }
    return (
      <Link href={href} className={classNameFull}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classNameFull} disabled={disabled} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}

type TextLinkProps = {
  href: string;
  children: ReactNode;
  light?: boolean;
};

export function TextLink({ href, children, light = false }: TextLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex w-fit items-center gap-2.5 border-b pb-[3px] font-medium transition-[gap,border-color] duration-300 ease-draw hover:gap-4 ${
        light
          ? "border-white/35 text-white hover:border-white"
          : "border-track text-primary hover:border-primary"
      }`}
    >
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}
