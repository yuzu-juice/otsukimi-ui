import type { ComponentPropsWithRef } from "react";
import { cx } from "../../lib/cx";
import "./input.css";

export type InputProps = ComponentPropsWithRef<"input">;

export function Input({ className, ref, ...props }: InputProps) {
  return (
    <input ref={ref} className={cx("otsukimi-input", "otsukimi-field", className)} {...props} />
  );
}
