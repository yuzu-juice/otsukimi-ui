import type { ComponentPropsWithRef } from "react";
import { cx } from "../../lib/cx";
import "./card.css";

export type CardProps = ComponentPropsWithRef<"div">;

export function Card({ children, className, ref, ...props }: CardProps) {
  return (
    <div ref={ref} className={cx("otsukimi-card", className)} {...props}>
      {children}
    </div>
  );
}
