import { useId, type ComponentPropsWithoutRef, type ReactNode, type Ref } from "react";
import { StarIcon, MoonIcon } from "../../icons";
import { cx } from "../../lib/cx";
import "./checkbox.css";

export type CheckboxProps = Omit<ComponentPropsWithoutRef<"input">, "type" | "className"> & {
  variant?: "star" | "moon";
  label?: ReactNode;
  className?: string;
  ref?: Ref<HTMLSpanElement>;
  inputRef?: Ref<HTMLInputElement>;
};

export function Checkbox({
  variant = "star",
  label,
  className,
  id,
  ref,
  inputRef,
  ...props
}: CheckboxProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const Icon = variant === "star" ? StarIcon : MoonIcon;

  return (
    <span ref={ref} className={cx("otsukimi-checkbox", `otsukimi-checkbox-${variant}`, className)}>
      <input
        id={inputId}
        type="checkbox"
        ref={inputRef}
        className="otsukimi-checkbox-input otsukimi-visually-hidden"
        {...props}
      />
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
