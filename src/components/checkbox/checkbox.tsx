import { useId, type InputHTMLAttributes } from "react";
import { StarIcon, MoonIcon } from "../../icons";
import { cx } from "../../lib/cx";
import "./checkbox.css";

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  variant?: "star" | "moon";
  label?: string;
};

export function Checkbox({ variant = "star", label, className, ...props }: CheckboxProps) {
  const id = useId();
  const Icon = variant === "star" ? StarIcon : MoonIcon;

  return (
    <span className={`otsukimi-checkbox otsukimi-checkbox-${variant}`}>
      <input
        id={id}
        type="checkbox"
        className={cx("otsukimi-checkbox-input", className)}
        aria-label={label ? undefined : "checkbox"}
        {...props}
      />
      <label htmlFor={id} className="otsukimi-checkbox-box" aria-hidden="true">
        <Icon className="otsukimi-checkbox-icon" />
      </label>
      {label && (
        <label htmlFor={id} className="otsukimi-checkbox-label">
          {label}
        </label>
      )}
    </span>
  );
}
