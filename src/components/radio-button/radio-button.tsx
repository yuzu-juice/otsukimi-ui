import { useId, type InputHTMLAttributes } from "react";
import "./radio-button.css";

type RadioButtonProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label?: string;
};

export function RadioButton({ label, ...props }: RadioButtonProps) {
  const id = useId();

  return (
    <span className="otsukimi-radio-button">
      <input
        id={id}
        type="radio"
        className="otsukimi-radio-input"
        aria-label={label ? undefined : "radio button"}
        {...props}
      />
      <label htmlFor={id} className="otsukimi-radio-circle" aria-hidden="true">
        <span className="otsukimi-radio-dot" />
      </label>
      {label && (
        <label htmlFor={id} className="otsukimi-radio-label">
          {label}
        </label>
      )}
    </span>
  );
}
