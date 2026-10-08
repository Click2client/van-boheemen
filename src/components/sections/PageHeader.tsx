type PageHeaderProps = {
  title: string;
  intro: string;
};

export function PageHeader({ title, intro }: PageHeaderProps) {
  return (
    <header className="max-w-3xl">
      <h1 className="font-heading text-4xl leading-tight text-ink sm:text-5xl">{title}</h1>
      <p className="mt-4 text-lg text-text-2">{intro}</p>
    </header>
  );
}
