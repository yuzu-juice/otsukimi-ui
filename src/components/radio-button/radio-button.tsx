import { useId, type InputHTMLAttributes } from "react";
import { cx } from "../../lib/cx";
import "./radio-button.css";

type RadioButtonProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label?: string;
};

export function RadioButton({ label, className, id, ...props }: RadioButtonProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <span className={cx("otsukimi-radio-button", className)}>
      <input
        id={inputId}
        type="radio"
        className="otsukimi-radio-input otsukimi-visually-hidden"
        {...props}
      />
      <label htmlFor={inputId} className="otsukimi-radio-circle" aria-hidden="true">
        <span className="otsukimi-radio-dot" />
      </label>
      {label && (
        <label htmlFor={inputId} className="otsukimi-radio-label">
          {label}
        </label>
      )}
    </span>
  );
}
