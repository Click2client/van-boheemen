import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`h-full rounded-2xl border border-line bg-surface p-6 ${className}`}>
      {children}
    </div>
  );
}
