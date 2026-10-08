"use server";

import "server-only";

import { headers } from "next/headers";

import { contactContent } from "@/content/contact";
import { contactFallback, sendContactEmail } from "@/lib/mail";
import { isMailConfigured, isTurnstileConfigured } from "@/lib/env";
import { verifyTurnstile } from "@/lib/turnstile";
import {
  contactSchema,
  type ContactField,
  type ContactFormState,
} from "@/lib/validation/contact";

function readString(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

function readTicket(formData: FormData): number {
  const ticket = Number(readString(formData, "ticket"));
  return Number.isFinite(ticket) ? ticket : 0;
}

export async function submitContact(
  _previous: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const form = contactContent.form;
  const fallback = contactFallback();
  const ticket = readTicket(formData);
  const reply = (state: Omit<ContactFormState, "ticket">): ContactFormState => ({ ...state, ticket });

  if (readString(formData, "website").trim() !== "") {
    return reply({ status: "success", message: `${form.successTitle} ${form.successAccent}`, fieldErrors: {} });
  }

  const parsed = contactSchema.safeParse({
    name: readString(formData, "name"),
    company: readString(formData, "company"),
    email: readString(formData, "email"),
    phone: readString(formData, "phone"),
    location: readString(formData, "location"),
    subject: readString(formData, "subject"),
    message: readString(formData, "message"),
  });

  if (!parsed.success) {
    const fieldErrors: ContactFormState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && isContactField(key) && !fieldErrors[key]) {
        fieldErrors[key] = issue.message;
      }
    }
    return reply({ status: "error", message: form.invalid, fieldErrors });
  }

  if (!isTurnstileConfigured()) {
    return reply({
      status: "error",
      message: `${form.turnstileNotReady} ${fallback}.`,
      fieldErrors: {},
    });
  }

  const token = readString(formData, "cf-turnstile-response");
  if (!token) {
    return reply({ status: "error", message: form.turnstileMissing, fieldErrors: {} });
  }

  const headerStore = await headers();
  const remoteIp = headerStore.get("x-forwarded-for")?.split(",")[0]?.trim();
  const turnstileOk = await verifyTurnstile(token, remoteIp);
  if (!turnstileOk) {
    return reply({ status: "error", message: form.turnstileFailed, fieldErrors: {} });
  }

  if (!isMailConfigured()) {
    return reply({
      status: "error",
      message: `${form.notConfigured} ${fallback}.`,
      fieldErrors: {},
    });
  }

  const result = await sendContactEmail(parsed.data);
  if (!result.ok) {
    return reply({
      status: "error",
      message: `${form.sendFailed} ${fallback}.`,
      fieldErrors: {},
    });
  }

  return reply({ status: "success", message: `${form.successTitle} ${form.successAccent}`, fieldErrors: {} });
}

function isContactField(value: string): value is ContactField {
  return (
    value === "name" ||
    value === "company" ||
    value === "email" ||
    value === "phone" ||
    value === "location" ||
    value === "subject" ||
    value === "message"
  );
}
