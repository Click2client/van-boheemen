import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { notFoundContent } from "@/content/not-found";

export default function NotFound() {
  return (
    <Container className="py-20 sm:py-28">
      <div className="max-w-xl">
        <p className="text-sm font-semibold tracking-[0.14em] text-accent uppercase">404</p>
        <h1 className="mt-3 font-heading text-4xl text-ink">{notFoundContent.heading}</h1>
        <p className="mt-4 text-lg text-muted">{notFoundContent.intro}</p>
        <div className="mt-8">
          <Button href="/">{notFoundContent.homeLink}</Button>
        </div>
      </div>
    </Container>
  );
}
