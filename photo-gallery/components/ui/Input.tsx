import { forwardRef, type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  rightElement?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, rightElement, className = "", id, ...props },
  ref,
) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <label htmlFor={inputId} className="text-body-bold text-gray-900">
          {label}
        </label>
        {rightElement}
      </div>
      <input
        ref={ref}
        id={inputId}
        className={`
            w-full h-[44px] px-4 text-body
            bg-white text-gray-900
            border border-[#9CA3AF] rounded-lg
            outline-none transition-colors
            focus:border-brand-blue focus:ring-2 focus:ring-brand-blue
            placeholder:text-gray-400
            disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
            ${error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}
            ${className}
          `}
        {...props}
      />
      {error && <p className="mt-1 text-small text-red-500">{error}</p>}
    </div>
  );
});
