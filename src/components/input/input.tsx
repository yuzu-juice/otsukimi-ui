import type { InputHTMLAttributes } from "react";
import "./input.css";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  state?: "default" | "focus" | "disabled";
};

export function Input({
  state = "default",
  placeholder = "テキストを入力してね",
  ...props
}: InputProps) {
  return (
    <input
      className={`otsukimi-input otsukimi-input-${state}`}
      placeholder={placeholder}
      disabled={state === "disabled" || props.disabled}
      {...props}
    />
  );
}
