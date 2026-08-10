import type { ReactNode } from "react";
import { StarIcon, DotIcon } from "../../icons";
import "./list-item.css";

type ListItemProps = {
  variant?: "star" | "dot";
  children?: ReactNode;
};

export function ListItem({ variant = "star", children }: ListItemProps) {
  return (
    <div className={`otsukimi-list-item otsukimi-list-item-${variant}`}>
      {variant === "star" ? <StarIcon /> : <DotIcon />}

      <span>{children}</span>
    </div>
  );
}
