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

export async function submitContact(
  _previous: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const form = contactContent.form;
  const fallback = contactFallback();

  if (readString(formData, "website").trim() !== "") {
    return { status: "success", message: form.success, fieldErrors: {} };
  }

  const parsed = contactSchema.safeParse({
    name: readString(formData, "name"),
    email: readString(formData, "email"),
    phone: readString(formData, "phone"),
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
    return { status: "error", message: form.invalid, fieldErrors };
  }

  if (!isTurnstileConfigured()) {
    return {
      status: "error",
      message: `${form.turnstileNotReady} ${fallback}.`,
      fieldErrors: {},
    };
  }

  const token = readString(formData, "cf-turnstile-response");
  if (!token) {
    return { status: "error", message: form.turnstileMissing, fieldErrors: {} };
  }

  const headerStore = await headers();
  const remoteIp = headerStore.get("x-forwarded-for")?.split(",")[0]?.trim();
  const turnstileOk = await verifyTurnstile(token, remoteIp);
  if (!turnstileOk) {
    return { status: "error", message: form.turnstileFailed, fieldErrors: {} };
  }

  if (!isMailConfigured()) {
    return {
      status: "error",
      message: `${form.notConfigured} ${fallback}.`,
      fieldErrors: {},
    };
  }

  const result = await sendContactEmail(parsed.data);
  if (!result.ok) {
    return {
      status: "error",
      message: `${form.sendFailed} ${fallback}.`,
      fieldErrors: {},
    };
  }

  return { status: "success", message: form.success, fieldErrors: {} };
}

function isContactField(value: string): value is ContactField {
  return value === "name" || value === "email" || value === "phone" || value === "message";
}
