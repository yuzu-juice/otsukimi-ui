import type { InputHTMLAttributes } from "react";
import { cx } from "../../lib/cx";
import "./input.css";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return <input className={cx("otsukimi-input", className)} {...props} />;
}
