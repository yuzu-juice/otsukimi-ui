import type { LiHTMLAttributes } from "react";
import { StarIcon, DotIcon } from "../../icons";
import { cx } from "../../lib/cx";
import "./list-item.css";

type ListItemProps = LiHTMLAttributes<HTMLLIElement> & {
  variant?: "star" | "dot";
};

export function ListItem({ variant = "star", className, children, ...props }: ListItemProps) {
  return (
    <li className={cx("otsukimi-list-item", `otsukimi-list-item-${variant}`, className)} {...props}>
      {variant === "star" ? <StarIcon /> : <DotIcon />}

      <span>{children}</span>
    </li>
  );
}
