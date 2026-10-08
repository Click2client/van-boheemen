"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef } from "react";

import { submitContact } from "@/app/contact/actions";
import { TurnstileWidget } from "@/components/forms/TurnstileWidget";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { contactContent } from "@/content/contact";
import { initialContactState } from "@/lib/validation/contact";

type ContactFormProps = {
  siteKey: string;
  fallbackContact: string;
};

export function ContactForm({ siteKey, fallbackContact }: ContactFormProps) {
  const [state, formAction, pending] = useActionState(submitContact, initialContactState);
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLParagraphElement>(null);
  const form = contactContent.form;

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
      window.turnstile?.reset();
      statusRef.current?.focus();
    }

    if (state.status === "error") {
      const invalid = formRef.current?.querySelector<HTMLElement>("[aria-invalid='true']");
      if (invalid) invalid.focus();
      else statusRef.current?.focus();
    }
  }, [state]);

  return (
    <form
      ref={formRef}
      id="contactformulier"
      action={formAction}
      className="relative scroll-mt-24 rounded-2xl border border-line bg-surface p-5 sm:p-8"
      noValidate
    >
      <h2 className="font-heading text-2xl text-ink">{form.title}</h2>
      <div className="mt-6 grid gap-5">
        <Input
          id="naam"
          name="name"
          label={form.name}
          autoComplete="name"
          required
          error={state.fieldErrors.name}
        />
        <Input
          id="email"
          name="email"
          type="email"
          label={form.email}
          autoComplete="email"
          required
          error={state.fieldErrors.email}
        />
        <Input
          id="telefoon"
          name="phone"
          type="tel"
          label={form.phone}
          autoComplete="tel"
          error={state.fieldErrors.phone}
        />
        <Textarea
          id="bericht"
          name="message"
          label={form.message}
          required
          error={state.fieldErrors.message}
        />
      </div>
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">{form.honeypot}</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="mt-5">
        {siteKey ? (
          <TurnstileWidget siteKey={siteKey} />
        ) : (
          <p className="text-sm font-semibold text-danger">
            {form.turnstileNotReady} {fallbackContact}.
          </p>
        )}
      </div>
      <p ref={statusRef} tabIndex={-1} aria-live="polite" className="mt-4 text-sm font-semibold">
        {state.status === "success" ? (
          <span className="text-ink">{state.message}</span>
        ) : null}
        {state.status === "error" && state.message ? (
          <span className="text-danger">{state.message}</span>
        ) : null}
      </p>
      <div className="mt-4">
        <Button type="submit" disabled={pending}>
          {pending ? form.sending : form.submit}
        </Button>
      </div>
      <p className="mt-4 text-sm text-muted">
        {form.privacyText}{" "}
        <Link href="/privacy" className="font-semibold text-ink underline underline-offset-2">
          {form.privacyLink}
        </Link>
        .
      </p>
    </form>
  );
}
