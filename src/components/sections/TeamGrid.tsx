import Image from "next/image";

import type { Person } from "@/content/shared";

type TeamGridProps = {
  people: Person[];
  stagger?: boolean;
  roleSuffix?: string;
};

export function TeamGrid({ people, stagger = false, roleSuffix }: TeamGridProps) {
  if (stagger) {
    return (
      <div className="flex gap-5 overflow-x-auto px-[clamp(20px,4vw,48px)] pb-2 [scrollbar-width:none] -mx-[clamp(20px,4vw,48px)]">
        {people.map((person, index) => (
          <figure
            key={person.image}
            data-reveal="fade"
            data-delay={String(index * 100)}
            className={`flex w-[clamp(240px,22.5%,300px)] shrink-0 flex-col gap-3.5 ${
              index % 2 === 1 ? "wide:mt-12" : ""
            }`}
          >
            <Portrait person={person} />
            <Caption person={person} roleSuffix={roleSuffix} />
          </figure>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-x-[clamp(20px,2vw,28px)] gap-y-[clamp(28px,3vw,40px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr))]">
      {people.map((person, index) => (
        <figure key={person.image} data-reveal="fade" data-delay={String(index * 100)} className="flex flex-col gap-4">
          <Portrait person={person} zoom />
          <Caption person={person} roleSuffix={roleSuffix} large />
        </figure>
      ))}
    </div>
  );
}

function Portrait({ person, zoom = false }: { person: Person; zoom?: boolean }) {
  return (
    <div className="relative aspect-[3/4] overflow-hidden rounded-[22px] bg-[#E4ECF2]">
      <Image
        src={person.image}
        alt={person.alt}
        fill
        sizes="300px"
        className={`object-cover ${zoom ? "transition-transform duration-1000 ease-draw hover:scale-105" : "transition-transform duration-700 ease-draw hover:scale-[1.04]"}`}
      />
    </div>
  );
}

function Caption({
  person,
  roleSuffix,
  large = false,
}: {
  person: Person;
  roleSuffix?: string;
  large?: boolean;
}) {
  return (
    <figcaption className="flex flex-col gap-0.5">
      <span className={`font-heading ${large ? "text-2xl leading-[1.1]" : "text-[21px]"}`}>{person.name}</span>
      <span className="text-sm text-text-3">
        {person.role}
        {roleSuffix ? ` · ${roleSuffix}` : ""}
      </span>
    </figcaption>
  );
}
