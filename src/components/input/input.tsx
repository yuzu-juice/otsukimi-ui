import type { InputHTMLAttributes } from "react";
import { cx } from "../../lib/cx";
import "./input.css";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  state?: "default" | "focus" | "disabled";
};

export function Input({
  state = "default",
  placeholder = "テキストを入力してね",
  className,
  ...props
}: InputProps) {
  return (
    <input
      className={cx("otsukimi-input", `otsukimi-input-${state}`, className)}
      placeholder={placeholder}
      disabled={state === "disabled" || props.disabled}
      {...props}
    />
  );
}
