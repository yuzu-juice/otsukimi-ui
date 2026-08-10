import type { HTMLAttributes } from "react";
import { cx } from "../../lib/cx";
import "./badge.css";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "primary" | "moonlight" | "accent-soft";
};

export function Badge({ variant = "default", children, className, ...props }: BadgeProps) {
  return (
    <span className={cx("otsukimi-badge", `otsukimi-badge-${variant}`, className)} {...props}>
      {children}
    </span>
  );
}
