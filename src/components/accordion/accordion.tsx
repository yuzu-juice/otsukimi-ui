import { useId, useState, type ComponentPropsWithRef, type ReactNode } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "../../icons";
import { cx } from "../../lib/cx";
import "./accordion.css";

export type AccordionProps = Omit<ComponentPropsWithRef<"div">, "onToggle" | "title"> & {
  open?: boolean;
  defaultOpen?: boolean;
  onToggle?: (open: boolean) => void;
  title: ReactNode;
};

export function Accordion({
  open,
  defaultOpen = false,
  onToggle,
  title,
  children,
  className,
  ref,
  ...props
}: AccordionProps) {
  const id = useId();
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isOpen = open !== undefined ? open : internalOpen;

  const toggle = () => {
    const next = !isOpen;
    if (open === undefined) setInternalOpen(next);
    onToggle?.(next);
  };

  return (
    <div
      ref={ref}
      className={cx("otsukimi-accordion", isOpen && "otsukimi-accordion-open", className)}
      {...props}
    >
      <button
        type="button"
        id={`${id}-header`}
        className="otsukimi-accordion-header"
        aria-expanded={isOpen}
        aria-controls={`${id}-panel`}
        onClick={toggle}
      >
        {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        <span>{title}</span>
      </button>

      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-header`}
        className="otsukimi-accordion-content"
        hidden={!isOpen}
      >
        {children}
      </div>
    </div>
  );
}
