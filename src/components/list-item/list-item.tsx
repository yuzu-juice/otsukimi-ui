import { StarIcon, DotIcon } from "../../icons";
import "./list-item.css";

type ListItemProps = {
  variant?: "star" | "dot";
  children?: string;
};

export function ListItem({ variant = "star", children = "生命" }: ListItemProps) {
  return (
    <div className={`otsukimi-list-item otsukimi-list-item-${variant}`}>
      {variant === "star" ? <StarIcon /> : <DotIcon />}

      <span>{children}</span>
    </div>
  );
}
