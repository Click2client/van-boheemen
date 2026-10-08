type InputProps = {
  id: string;
  name: string;
  label: string;
  type?: "text" | "email" | "tel";
  autoComplete?: string;
  required?: boolean;
  error?: string;
  defaultValue?: string;
};

export function Input({
  id,
  name,
  label,
  type = "text",
  autoComplete,
  required = false,
  error,
  defaultValue,
}: InputProps) {
  const errorId = `${id}-fout`;
  const inputMode = type === "email" ? "email" : type === "tel" ? "tel" : undefined;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-ink">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        required={required}
        defaultValue={defaultValue}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={`min-h-11 rounded-lg border bg-surface px-3 text-base text-ink ${
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
