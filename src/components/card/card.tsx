import type { HTMLAttributes } from "react";
import { cx } from "../../lib/cx";
import "./card.css";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div className={cx("otsukimi-card", className)} {...props}>
      {children}
    </div>
  );
}
