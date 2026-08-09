import type { AnchorHTMLAttributes } from "react";
import { ArrowRightIcon } from "../../icons";
import "./link.css";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export function Link({ children = "これはリンクです", ...props }: LinkProps) {
  return (
    <a className="otsukimi-link" {...props}>
      <span>{children}</span>
      <ArrowRightIcon />
    </a>
  );
}
