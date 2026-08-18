import type { ComponentPropsWithRef } from "react";
import { ArrowRightIcon } from "../../icons";
import { cx } from "../../lib/cx";
import "./link.css";

export type LinkProps = ComponentPropsWithRef<"a">;

export function Link({ children, className, ref, ...props }: LinkProps) {
  return (
    <a ref={ref} className={cx("otsukimi-link", className)} {...props}>
      <span>{children}</span>
      <ArrowRightIcon />
    </a>
  );
}
