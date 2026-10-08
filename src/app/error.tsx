"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { errorContent } from "@/content/error";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error.digest ?? "page-error");
  }, [error]);

  return (
    <Container className="py-20 sm:py-28">
      <div className="max-w-xl">
        <h1 className="font-heading text-4xl text-ink">{errorContent.heading}</h1>
        <p className="mt-4 text-lg text-text-2">{errorContent.intro}</p>
        {error.digest ? (
          <p className="mt-4 text-sm text-text-2">
            {errorContent.reference}: {error.digest}
          </p>
        ) : null}
        <div className="mt-8">
          <Button type="button" onClick={() => reset()}>
            {errorContent.retry}
          </Button>
        </div>
      </div>
    </Container>
  );
}
