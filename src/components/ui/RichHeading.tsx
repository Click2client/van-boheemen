import type { TextPart } from "@/content/shared";

const headingClass =
  "font-heading text-[clamp(36px,4.6vw,64px)] leading-[1.02] font-normal tracking-[-0.025em]";

type RichHeadingProps = {
  parts: TextPart[];
  as?: "h1" | "h2" | "h3";
  className?: string;
  accentClassName?: string;
  id?: string;
};

export function RichHeading({
  parts,
  as: Tag = "h2",
  className = headingClass,
  accentClassName = "text-primary",
  id,
}: RichHeadingProps) {
  return (
    <Tag id={id} className={className}>
      {parts.map((part, index) =>
        part.accent ? (
          <em key={index} className={accentClassName}>
            {part.text}
          </em>
        ) : (
          <span key={index}>{part.text}</span>
        ),
      )}
    </Tag>
  );
}

type RiseHeadingProps = {
  lines: TextPart[];
  className?: string;
};

export function RiseHeading({ lines, className }: RiseHeadingProps) {
  return (
    <h1
      className={`font-heading text-[clamp(46px,6.4vw,96px)] leading-[0.96] font-normal tracking-[-0.04em] text-ink ${className ?? ""}`}
    >
      {lines.map((line, index) => (
        <span key={index} className="block overflow-hidden pb-[0.08em]">
          <span data-reveal="rise" data-delay={String(100 + index * 110)} className="block">
            {line.accent ? <em className="text-primary">{line.text}</em> : line.text}
          </span>
        </span>
      ))}
    </h1>
  );
}
