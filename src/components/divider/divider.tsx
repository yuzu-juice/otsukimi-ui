import type { ComponentPropsWithRef } from "react";
import { cx } from "../../lib/cx";
import "./divider.css";

export type DividerProps = ComponentPropsWithRef<"hr"> & {
  variant?: "solid" | "dashed";
};

export function Divider({ variant = "solid", className, ref, ...props }: DividerProps) {
  return (
    <hr
      ref={ref}
      className={cx("otsukimi-divider", `otsukimi-divider-${variant}`, className)}
      {...props}
    />
  );
}
