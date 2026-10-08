import "server-only";

import { env } from "@/lib/env";

type SiteverifyResponse = {
  success?: boolean;
};

export async function verifyTurnstile(
  token: string,
  remoteIp?: string,
): Promise<boolean> {
  if (!env.TURNSTILE_SECRET_KEY || token.trim() === "") return false;

  const body = new URLSearchParams();
  body.set("secret", env.TURNSTILE_SECRET_KEY);
  body.set("response", token);
  if (remoteIp) body.set("remoteip", remoteIp);

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body,
    },
  );

  if (!response.ok) return false;

  const data = (await response.json()) as SiteverifyResponse;
  return data.success === true;
}
