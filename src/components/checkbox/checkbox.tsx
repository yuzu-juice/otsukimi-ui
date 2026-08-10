import { useId, type InputHTMLAttributes } from "react";
import { StarIcon, MoonIcon } from "../../icons";
import { cx } from "../../lib/cx";
import "./checkbox.css";

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  variant?: "star" | "moon";
  label?: string;
};

export function Checkbox({ variant = "star", label, className, id, ...props }: CheckboxProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const Icon = variant === "star" ? StarIcon : MoonIcon;

  return (
    <span className={cx("otsukimi-checkbox", `otsukimi-checkbox-${variant}`, className)}>
      <input id={inputId} type="checkbox" className="otsukimi-checkbox-input" {...props} />
      <label htmlFor={inputId} className="otsukimi-checkbox-box" aria-hidden="true">
        <Icon className="otsukimi-checkbox-icon" />
      </label>
      {label && (
        <label htmlFor={inputId} className="otsukimi-checkbox-label">
          {label}
        </label>
      )}
    </span>
  );
}
