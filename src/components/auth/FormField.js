import { useId } from "react";

export default function FormField({ label, ...inputProps }) {
  const id = useId();

  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-sm font-medium">
        {label}
      </label>
      <input id={id} className="input w-full text-sm" {...inputProps} />
    </div>
  );
}
