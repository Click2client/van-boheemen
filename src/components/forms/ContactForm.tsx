"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef, useState } from "react";

import { submitContact } from "@/app/contact/actions";
import { TurnstileWidget } from "@/components/forms/TurnstileWidget";
import { Input } from "@/components/ui/Input";
import { Pill } from "@/components/ui/Pill";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { site } from "@/config/site";
import { contactContent } from "@/content/contact";
import { locationChoices, subjectChoices } from "@/content/services";
import { initialContactState } from "@/lib/validation/contact";

type ContactFormProps = {
  siteKey: string;
  fallbackContact: string;
};

export function ContactForm({ siteKey, fallbackContact }: ContactFormProps) {
  const [state, formAction, pending] = useActionState(submitContact, initialContactState);
  const [ticket, setTicket] = useState(1);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const statusRef = useRef<HTMLParagraphElement>(null);
  const form = contactContent.form;
  const showSuccess = state.status === "success" && state.ticket === ticket;

  useEffect(() => {
    if (showSuccess) successRef.current?.focus();
  }, [showSuccess]);

  useEffect(() => {
    if (state.status !== "error" || state.ticket !== ticket) return;
    const invalid = formRef.current?.querySelector<HTMLElement>("[aria-invalid='true']");
    if (invalid) invalid.focus();
    else statusRef.current?.focus();
  }, [state, ticket]);

  if (showSuccess) {
    return (
      <div className="flex min-h-[360px] flex-col justify-center gap-[18px] py-6">
        <span className="inline-flex size-14 items-center justify-center rounded-full bg-tint-green text-[22px] text-green-deep">
          ✓
        </span>
        <h3
          ref={successRef}
          tabIndex={-1}
          className="font-heading text-[clamp(30px,3vw,40px)] leading-[1.1] font-normal tracking-[-0.02em] outline-none"
        >
          {form.successTitle} <em className="text-primary">{form.successAccent}</em>
        </h3>
        <p className="max-w-[440px] leading-[1.65] text-text-2">
          {form.successText}{" "}
          {site.offices.map((office, index) => (
            <span key={office.city}>
              {index > 0 ? " of " : ""}
              {office.city}{" "}
              <a className="font-medium text-primary" href={office.phoneTel}>
                {office.phoneDisplay}
              </a>
            </span>
          ))}
          .
        </p>
        <button
          type="button"
          onClick={() => setTicket((value) => value + 1)}
          className="w-fit border-b border-track pb-[3px] text-[15px] font-medium text-primary"
        >
          {form.again}
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} action={formAction} className="flex flex-col gap-[22px]" noValidate>
      <input type="hidden" name="ticket" value={ticket} />
      <div className="grid gap-[18px] [grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))]">
        <Input id="naam" name="name" label={form.name} hint={form.nameHint} autoComplete="name" required error={state.fieldErrors.name} />
        <Input id="bedrijf" name="company" label={form.company} hint={form.companyHint} autoComplete="organization" error={state.fieldErrors.company} />
        <Input id="email" name="email" type="email" label={form.email} hint={form.emailHint} autoComplete="email" required error={state.fieldErrors.email} />
        <Input id="telefoon" name="phone" type="tel" label={form.phone} autoComplete="tel" error={state.fieldErrors.phone} />
      </div>
      <fieldset
        className="flex flex-col gap-2 outline-none"
        tabIndex={state.fieldErrors.location ? -1 : undefined}
        aria-invalid={state.fieldErrors.location ? true : undefined}
        aria-describedby={state.fieldErrors.location ? "vestiging-fout" : undefined}
      >
        <legend className="text-sm font-medium text-ink">{form.location}</legend>
        <div className="flex flex-wrap gap-2">
          {locationChoices.map((choice) => (
            <label key={choice} className="relative">
              <input
                type="radio"
                name="location"
                value={choice}
                defaultChecked={choice === "Maakt niet uit"}
                className="peer absolute inset-0 cursor-pointer opacity-0"
              />
              <span className="inline-flex h-[46px] items-center rounded-full border border-border-input bg-white px-5 text-[15px] font-medium text-ink peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-3 peer-focus-visible:outline-primary">
                {choice}
              </span>
            </label>
          ))}
        </div>
        {state.fieldErrors.location ? (
          <p id="vestiging-fout" className="text-sm font-semibold text-danger">
            {state.fieldErrors.location}
          </p>
        ) : null}
      </fieldset>
      <Select id="onderwerp" name="subject" label={form.subject} options={subjectChoices} error={state.fieldErrors.subject} />
      <Textarea
        id="bericht"
        name="message"
        label={form.message}
        placeholder={form.messagePlaceholder}
        error={state.fieldErrors.message}
      />
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">{form.honeypot}</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      {siteKey ? (
        <TurnstileWidget siteKey={siteKey} />
      ) : (
        <p className="text-sm font-semibold text-danger">
          {form.turnstileNotReady} {fallbackContact}.
        </p>
      )}
      <p ref={statusRef} tabIndex={-1} aria-live="polite" className="text-sm font-semibold outline-none">
        {state.status === "error" && state.message ? <span className="text-danger">{state.message}</span> : null}
      </p>
      <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
        <p className="max-w-[280px] text-[13px] leading-normal text-text-3">
          {form.privacy}{" "}
          <Link href="/privacy" className="font-medium text-primary underline underline-offset-2">
            {form.privacyLink}
          </Link>
          .
        </p>
        <Pill type="submit" disabled={pending}>
          {pending ? form.sending : form.submit}
        </Pill>
      </div>
    </form>
  );
}
