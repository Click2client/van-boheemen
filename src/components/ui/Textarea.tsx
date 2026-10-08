type TextareaProps = {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  rows?: number;
};

export function Textarea({
  id,
  name,
  label,
  placeholder,
  required = false,
  error,
  rows = 5,
}: TextareaProps) {
  const errorId = `${id}-fout`;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        placeholder={placeholder}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className="w-full resize-y rounded-[14px] border border-border-input bg-white px-[18px] py-4 text-base leading-normal text-ink transition-[border-color,box-shadow] duration-200 outline-none focus-visible:border-primary focus-visible:shadow-[0_0_0_4px_rgba(31,78,121,0.12)] aria-[invalid=true]:border-danger"
      />
      {error ? (
        <p id={errorId} className="text-sm font-semibold text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
