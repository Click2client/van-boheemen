const fieldClass =
  "h-14 w-full rounded-[14px] border border-border-input bg-white px-[18px] text-base text-ink transition-[border-color,box-shadow] duration-200 outline-none focus-visible:border-primary focus-visible:shadow-[0_0_0_4px_rgba(31,78,121,0.12)] aria-[invalid=true]:border-danger";

type InputProps = {
  id: string;
  name: string;
  label: string;
  hint?: string;
  type?: "text" | "email" | "tel";
  autoComplete?: string;
  required?: boolean;
  error?: string;
};

export function Input({
  id,
  name,
  label,
  hint,
  type = "text",
  autoComplete,
  required = false,
  error,
}: InputProps) {
  const errorId = `${id}-fout`;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}{" "}
        {hint ? <span className="font-normal text-text-3">{hint}</span> : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        inputMode={type === "email" ? "email" : type === "tel" ? "tel" : undefined}
        autoComplete={autoComplete}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={fieldClass}
      />
      {error ? (
        <p id={errorId} className="text-sm font-semibold text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export { fieldClass };
