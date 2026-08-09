import type { HTMLAttributes } from "react";
import "./badge.css";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "primary" | "moonlight" | "accent-soft";
};

export function Badge({ variant = "default", children = "New", ...props }: BadgeProps) {
  return (
    <span className={`otsukimi-badge otsukimi-badge-${variant}`} {...props}>
      {children}
    </span>
  );
}
