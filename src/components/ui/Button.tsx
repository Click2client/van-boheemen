import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "accent";

const variantClass: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
  secondary: "border border-line bg-surface text-ink hover:border-accent",
  accent: "bg-accent text-accent-foreground hover:bg-accent-hover",
};

const baseClass =
  "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2 text-center text-base font-semibold motion-safe:transition-colors disabled:cursor-not-allowed disabled:opacity-60";

type ButtonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<"button">, "className" | "children">;

type ButtonLinkProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
  href: string;
};

export function Button(props: ButtonProps | ButtonLinkProps) {
  if ("href" in props) {
    const className = `${baseClass} ${variantClass[props.variant ?? "primary"]} ${props.className ?? ""}`;
    return (
      <Link href={props.href} className={className}>
        {props.children}
      </Link>
    );
  }

  const { variant = "primary", className: extra = "", children, ...rest } = props;
  const className = `${baseClass} ${variantClass[variant]} ${extra}`;

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}
