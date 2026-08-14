"use client";

import { useField } from "formik";

interface FormTextareaProps {
  name: string;
  label: string;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
}

export default function FormTextarea({
  name,
  label,
  placeholder,
  rows = 4,
  disabled = false,
}: FormTextareaProps) {
  const [field, meta] = useField(name);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-semibold text-on-surface">
        {label}
      </label>

      <textarea
        {...field}
        id={name}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        className={`w-full bg-surface-container-lowest border rounded-lg py-3 px-4 text-sm text-on-surface placeholder:text-on-surface-variant outline-none transition duration-150 ${
          meta.touched && meta.error
            ? "border-red-400 focus:ring-red-100"
            : "border-outline-variant focus:border-primary focus:ring-primary/10"
        }`}
      />

      {meta.touched && meta.error && <p className="text-red-500 text-xs">{meta.error}</p>}
    </div>
  );
}
