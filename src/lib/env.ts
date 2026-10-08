import "server-only";

import { z } from "zod";

const optionalUrl = z
  .string()
  .trim()
  .refine((value) => {
    if (value === "") return true;
    try {
      const url = new URL(value);
      return url.protocol === "https:" || url.protocol === "http:";
    } catch {
      return false;
    }
  }, "Use a valid URL, for example https://www.voorbeeldbedrijf.nl");

const optionalEmail = z
  .string()
  .trim()
  .refine((value) => value === "" || z.email().safeParse(value).success, {
    message: "Use a valid email address.",
  });

const schema = z.object({
  NEXT_PUBLIC_SITE_URL: optionalUrl,
  NEXT_PUBLIC_GTM_ID: z.string().trim(),
  NEXT_PUBLIC_ANALYTICS_DEBUG: z.string().trim(),
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: z.string().trim(),
  TURNSTILE_SECRET_KEY: z.string().trim(),
  RESEND_API_KEY: z.string().trim(),
  CONTACT_FROM_EMAIL: optionalEmail,
  CONTACT_TO_EMAIL: optionalEmail,
  VERCEL_ENV: z.string().trim().optional(),
  NODE_ENV: z.enum(["development", "test", "production"]).optional(),
});

function read(name: string): string {
  return process.env[name] ?? "";
}

function loadEnv() {
  const parsed = schema.safeParse({
    NEXT_PUBLIC_SITE_URL: read("NEXT_PUBLIC_SITE_URL"),
    NEXT_PUBLIC_GTM_ID: read("NEXT_PUBLIC_GTM_ID"),
    NEXT_PUBLIC_ANALYTICS_DEBUG: read("NEXT_PUBLIC_ANALYTICS_DEBUG"),
    NEXT_PUBLIC_TURNSTILE_SITE_KEY: read("NEXT_PUBLIC_TURNSTILE_SITE_KEY"),
    TURNSTILE_SECRET_KEY: read("TURNSTILE_SECRET_KEY"),
    RESEND_API_KEY: read("RESEND_API_KEY"),
    CONTACT_FROM_EMAIL: read("CONTACT_FROM_EMAIL"),
    CONTACT_TO_EMAIL: read("CONTACT_TO_EMAIL"),
    VERCEL_ENV: process.env.VERCEL_ENV,
    NODE_ENV: process.env.NODE_ENV,
  });

  if (!parsed.success) {
    const details = parsed.error.issues
      .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
      .join(" ");
    throw new Error(`Environment variables are invalid. ${details}`);
  }

  return parsed.data;
}

export const env = loadEnv();

export function isMailConfigured(): boolean {
  return Boolean(
    env.RESEND_API_KEY && env.CONTACT_FROM_EMAIL && env.CONTACT_TO_EMAIL,
  );
}

export function isTurnstileConfigured(): boolean {
  return Boolean(env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && env.TURNSTILE_SECRET_KEY);
}
