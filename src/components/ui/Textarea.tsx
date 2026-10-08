type TextareaProps = {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  error?: string;
  defaultValue?: string;
  rows?: number;
};

export function Textarea({
  id,
  name,
  label,
  required = false,
  error,
  defaultValue,
  rows = 6,
}: TextareaProps) {
  const errorId = `${id}-fout`;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-ink">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        required={required}
        defaultValue={defaultValue}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={`rounded-lg border bg-surface px-3 py-2 text-base text-ink ${
          error ? "border-danger" : "border-line"
        }`}
      />
      {error ? (
        <p id={errorId} className="text-sm font-semibold text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
