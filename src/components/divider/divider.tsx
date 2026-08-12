import type { HTMLAttributes } from "react";
import { cx } from "../../lib/cx";
import "./divider.css";

type DividerProps = HTMLAttributes<HTMLHRElement> & {
  variant?: "solid" | "dashed";
};

export function Divider({ variant = "solid", className, ...props }: DividerProps) {
  return (
    <hr className={cx("otsukimi-divider", `otsukimi-divider-${variant}`, className)} {...props} />
  );
}
