import type { ComponentPropsWithRef } from "react";
import { MoonIcon } from "../../icons";
import { cx } from "../../lib/cx";
import "./button.css";

export type ButtonProps = ComponentPropsWithRef<"button"> & {
  variant?: "default" | "moon" | "transparent";
};

export function Button({ variant = "default", children, className, ref, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      ref={ref}
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
