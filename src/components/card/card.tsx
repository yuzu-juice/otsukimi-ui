import type { HTMLAttributes } from "react";
import "./card.css";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ children, ...props }: CardProps) {
  return (
    <div className="otsukimi-card" {...props}>
      {children}
    </div>
  );
}
