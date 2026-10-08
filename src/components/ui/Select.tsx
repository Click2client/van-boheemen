type SelectProps = {
  id: string;
  name: string;
  label: string;
  options: readonly string[];
  error?: string;
};

export function Select({ id, name, label, options, error }: SelectProps) {
  const errorId = `${id}-fout`;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          name={name}
          defaultValue={options[0]}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className="h-14 w-full appearance-none rounded-[14px] border border-border-input bg-white px-[18px] pr-12 text-base text-ink transition-[border-color,box-shadow] duration-200 outline-none focus-visible:border-primary focus-visible:shadow-[0_0_0_4px_rgba(31,78,121,0.12)] aria-[invalid=true]:border-danger"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-[22px] size-1.5 -translate-y-1/2 rotate-45 border-r border-b border-ink"
        />
      </div>
      {error ? (
        <p id={errorId} className="text-sm font-semibold text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
