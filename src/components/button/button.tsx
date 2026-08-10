import type { ButtonHTMLAttributes } from "react";
import { MoonIcon } from "../../icons";
import { cx } from "../../lib/cx";
import "./button.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "moon" | "transparent";
};

export function Button({ variant = "default", children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cx(
        "otsukimi-button",
        variant !== "default" && `otsukimi-button-${variant}`,
        className
      )}
      {...props}
    >
      {variant === "moon" && <MoonIcon aria-hidden="true" />}
      {children}
    </button>
  );
}
