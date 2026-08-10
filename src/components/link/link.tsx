import type { AnchorHTMLAttributes } from "react";
import { ArrowRightIcon } from "../../icons";
import { cx } from "../../lib/cx";
import "./link.css";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export function Link({ children, className, ...props }: LinkProps) {
  return (
    <a className={cx("otsukimi-link", className)} {...props}>
      <span>{children}</span>
      <ArrowRightIcon />
    </a>
  );
}
