import type { ButtonHTMLAttributes } from "react";
import { MoonIcon } from "../../icons";
import { cx } from "../../lib/cx";
import "./button.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  state?: "default" | "focus" | "disabled" | "transparent" | "moon" | "moon-focus";
};

export function Button({
  state = "default",
  children = "ボタン",
  className,
  ...props
}: ButtonProps) {
  const hasMoon = state === "moon" || state === "moon-focus";

  return (
    <button
      className={cx("otsukimi-button", `otsukimi-button-${state}`, className)}
      disabled={state === "disabled" || props.disabled}
      {...props}
    >
      {hasMoon && <MoonIcon aria-hidden="true" />}
      {children}
    </button>
  );
}
