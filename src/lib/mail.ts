import "server-only";

import { Resend } from "resend";

import { contactLine } from "@/config/site";
import { env, isMailConfigured } from "@/lib/env";

export type ContactMessage = {
  name: string;
  company: string;
  email: string;
  phone: string;
  location: string;
  subject: string;
  message: string;
};

export type SendResult =
  | { ok: true }
  | { ok: false; reason: "not_configured" | "send_failed" };

export async function sendContactEmail(
  input: ContactMessage,
): Promise<SendResult> {
  if (!isMailConfigured()) return { ok: false, reason: "not_configured" };

  const safeName = input.name.replace(/[\r\n]+/g, " ").slice(0, 80);
  const text = [
    `Naam: ${input.name}`,
    `Bedrijf: ${input.company || "-"}`,
    `E-mail: ${input.email}`,
    `Telefoon: ${input.phone || "-"}`,
    `Vestiging: ${input.location}`,
    `Onderwerp: ${input.subject}`,
    "",
    input.message || "-",
  ].join("\n");

  try {
    const resend = new Resend(env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: env.CONTACT_FROM_EMAIL,
      to: env.CONTACT_TO_EMAIL,
      replyTo: input.email,
      subject: `Kennismaking: ${safeName}`,
      text,
    });

    if (error) return { ok: false, reason: "send_failed" };
    return { ok: true };
  } catch {
    return { ok: false, reason: "send_failed" };
  }
}

export function contactFallback(): string {
  return contactLine();
}
