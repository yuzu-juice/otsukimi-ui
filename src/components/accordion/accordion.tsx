import type { HTMLAttributes } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "../../icons";
import "./accordion.css";

type AccordionProps = HTMLAttributes<HTMLDivElement> & {
  open?: boolean;
  title?: string;
};

export function Accordion({
  open = false,
  title = "よくある質問",
  children,
  ...props
}: AccordionProps) {
  return (
    <div className={`otsukimi-accordion ${open ? "otsukimi-accordion-open" : ""}`} {...props}>
      <div className="otsukimi-accordion-header">
        {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
        <span>{title}</span>
      </div>

      {open && <div className="otsukimi-accordion-content">{children}</div>}
    </div>
  );
}
