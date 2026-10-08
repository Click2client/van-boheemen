import { CallButton } from "@/components/layout/CallProvider";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { PageHero } from "@/components/sections/PageHero";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { Steps } from "@/components/sections/Steps";
import { Container } from "@/components/ui/Container";
import { Pill, TextLink } from "@/components/ui/Pill";
import { ui } from "@/content/ui";
import { faqHeadingParts, relatedServices, type Service } from "@/content/services";

const outlineButton =
  "inline-flex h-[58px] items-center rounded-full border border-border-input bg-white px-6 text-base font-medium text-ink transition-colors hover:border-primary hover:text-primary";

export function ServiceDetail({ service }: { service: Service }) {
  const related = relatedServices(service);

  return (
    <>
      <PageHero
        crumbs={[
          { label: ui.homeLabel, href: "/" },
          { label: "Diensten", href: "/diensten" },
          { label: service.title, href: `/diensten/${service.slug}` },
        ]}
        eyebrow={`Dienst ${service.number}`}
        lines={service.headline}
        lead={service.lead}
        image={{ src: service.image, alt: service.imageAlt }}
        actions={
          <>
            <Pill href="/contact#formulier">Kennismaking plannen</Pill>
            <CallButton className={outlineButton}>Bel een vestiging</CallButton>
          </>
        }
      />
      <section>
        <Container className="grid items-start gap-12 py-[clamp(56px,7vw,112px)] pb-[clamp(72px,9vw,140px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr))] wide:gap-x-[72px]">
          <div data-reveal="fade" className="flex flex-col gap-[18px] wide:sticky wide:top-28 wide:self-start">
            <p className="text-[13px] font-semibold tracking-[0.1em] text-green uppercase">{service.does.label}</p>
            <h2 className="font-heading text-[clamp(36px,4.6vw,64px)] leading-[1.02] font-normal tracking-[-0.025em]">
              {service.does.heading.map((part, index) =>
                part.accent ? (
                  <em key={index} className="text-primary">
                    {part.text}
                  </em>
                ) : (
                  <span key={index}>{part.text}</span>
                ),
              )}
            </h2>
            {service.does.intro ? (
              <p className="max-w-[440px] leading-[1.65] text-text-2">{service.does.intro}</p>
            ) : null}
          </div>
          <ul className="border-t border-ink">
            {service.does.items.map((item, index) => (
              <li
                key={item}
                data-reveal="fade"
                data-delay={String(index * 70)}
                className="grid grid-cols-[40px_1fr] items-center gap-4 border-b border-border py-6"
              >
                <span className="inline-flex size-7 items-center justify-center rounded-full bg-tint-green text-[13px] text-green-deep">
                  ✓
                </span>
                <span className="font-heading text-[clamp(21px,1.9vw,26px)] leading-[1.2]">{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section className="bg-surface">
        <Container className="flex flex-col gap-[clamp(44px,6vw,80px)] py-[clamp(72px,9vw,130px)]">
          <SectionIntro label={service.steps.label} heading={service.steps.heading} intro={service.steps.intro} />
          <Steps items={service.steps.items} />
        </Container>
      </section>
      <section>
        <Container className="flex flex-col gap-[clamp(40px,5vw,64px)] py-[clamp(72px,9vw,130px)]">
          <SectionIntro label={service.audience.label} heading={service.audience.heading} intro={service.audience.intro} />
          <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr))]">
            {service.audience.items.map((item, index) => (
              <article
                key={item.title}
                data-reveal="fade"
                data-delay={String(index * 100)}
                className="flex flex-col gap-3.5 rounded-3xl border border-border bg-white p-[clamp(26px,3vw,36px)] transition duration-300 ease-draw hover:-translate-y-1 hover:border-track hover:shadow-[0_36px_60px_-40px_rgba(20,33,43,0.4)]"
              >
                <p className="text-[13px] text-text-3">{item.number}</p>
                <h3 className="font-heading text-[30px] leading-[1.1] tracking-[-0.01em]">{item.title}</h3>
                <p className="text-[15px] leading-relaxed text-text-2">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="border-t border-rule">
        <Container className="grid items-start gap-10 py-[clamp(72px,9vw,130px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,400px),1fr))] wide:gap-x-[72px]">
          <div data-reveal="fade" className="flex flex-col gap-[18px]">
            <p className="text-[13px] font-semibold tracking-[0.1em] text-green uppercase">Veelgestelde vragen</p>
            <h2 className="font-heading text-[clamp(36px,4.6vw,64px)] leading-[1.02] font-normal tracking-[-0.025em]">
              {faqHeadingParts.map((part, index) =>
                part.accent ? (
                  <em key={index} className="text-primary">
                    {part.text}
                  </em>
                ) : (
                  <span key={index}>{part.text}</span>
                ),
              )}
            </h2>
          </div>
          <FaqAccordion items={service.faqs} />
        </Container>
      </section>
      <section className="bg-surface">
        <Container className="flex flex-col gap-[clamp(40px,5vw,64px)] py-[clamp(72px,9vw,130px)]">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div data-reveal="fade" className="flex flex-col gap-[18px]">
              <p className="text-[13px] font-semibold tracking-[0.1em] text-green uppercase">Gerelateerd</p>
              <h2 className="font-heading text-[clamp(36px,4.6vw,64px)] leading-[1.02] font-normal tracking-[-0.025em]">
                Past hier <em className="text-primary">goed bij</em>
              </h2>
            </div>
            <TextLink href="/diensten">Alle diensten</TextLink>
          </div>
          <ServiceCards services={related} heading="h3" />
        </Container>
      </section>
    </>
  );
}
