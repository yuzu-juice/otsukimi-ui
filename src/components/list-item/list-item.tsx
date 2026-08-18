import type { ComponentPropsWithRef } from "react";
import { StarIcon, DotIcon } from "../../icons";
import { cx } from "../../lib/cx";
import "./list-item.css";

export type ListItemProps = ComponentPropsWithRef<"li"> & {
  variant?: "star" | "dot";
};

export function ListItem({ variant = "star", className, children, ref, ...props }: ListItemProps) {
  return (
    <li
      ref={ref}
      className={cx("otsukimi-list-item", `otsukimi-list-item-${variant}`, className)}
      {...props}
    >
      {variant === "star" ? <StarIcon /> : <DotIcon />}

      <span>{children}</span>
    </li>
  );
}
