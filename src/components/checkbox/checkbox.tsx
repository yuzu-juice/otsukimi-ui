import { useId, type InputHTMLAttributes } from "react";
import { StarIcon, MoonIcon } from "../../icons";
import "./checkbox.css";

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  variant?: "star" | "moon";
  label?: string;
};

export function Checkbox({ variant = "star", label, ...props }: CheckboxProps) {
  const id = useId();

  return (
    <span className={`otsukimi-checkbox otsukimi-checkbox-${variant}`}>
      <input
        id={id}
        type="checkbox"
        className="otsukimi-checkbox-input"
        aria-label={label ? undefined : "checkbox"}
        {...props}
      />
      <label htmlFor={id} className="otsukimi-checkbox-box" aria-hidden="true">
        <StarIcon className="otsukimi-checkbox-icon-star" />
        <MoonIcon className="otsukimi-checkbox-icon-moon" />
      </label>
      {label && (
        <label htmlFor={id} className="otsukimi-checkbox-label">
          {label}
        </label>
      )}
    </span>
  );
}
