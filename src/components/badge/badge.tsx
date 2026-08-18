import type { ComponentPropsWithRef } from "react";
import { cx } from "../../lib/cx";
import "./badge.css";

export type BadgeProps = ComponentPropsWithRef<"span"> & {
  variant?: "default" | "primary" | "moonlight" | "accent-soft";
};

export function Badge({ variant = "default", children, className, ref, ...props }: BadgeProps) {
  return (
    <span
      ref={ref}
      className={cx("otsukimi-badge", `otsukimi-badge-${variant}`, className)}
      {...props}
    >
      {children}
    </span>
  );
}
