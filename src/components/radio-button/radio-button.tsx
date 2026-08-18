import { useId, type ComponentPropsWithoutRef, type ReactNode, type Ref } from "react";
import { cx } from "../../lib/cx";
import "./radio-button.css";

export type RadioButtonProps = Omit<ComponentPropsWithoutRef<"input">, "type" | "className"> & {
  label?: ReactNode;
  className?: string;
  ref?: Ref<HTMLSpanElement>;
  inputRef?: Ref<HTMLInputElement>;
};

export function RadioButton({ label, className, id, ref, inputRef, ...props }: RadioButtonProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <span ref={ref} className={cx("otsukimi-radio-button", className)}>
      <input
        id={inputId}
        type="radio"
        ref={inputRef}
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
