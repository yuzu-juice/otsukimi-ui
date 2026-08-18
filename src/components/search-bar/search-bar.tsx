import { useState, type ComponentPropsWithRef, type ReactNode } from "react";
import { cx } from "../../lib/cx";
import { Button } from "../button/button";
import "./search-bar.css";

export type SearchBarProps = Omit<ComponentPropsWithRef<"form">, "onSubmit" | "onChange"> & {
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  buttonLabel: ReactNode;
  searchLabel: string;
  inputProps?: Omit<
    ComponentPropsWithRef<"input">,
    "type" | "aria-label" | "value" | "defaultValue" | "onChange" | "placeholder"
  >;
  buttonProps?: Omit<ComponentPropsWithRef<"button">, "type" | "children">;
};

export function SearchBar({
  placeholder,
  value,
  defaultValue,
  onChange,
  onSearch,
  buttonLabel,
  searchLabel,
  inputProps,
  buttonProps,
  className,
  ref,
  ...props
}: SearchBarProps) {
  const [internal, setInternal] = useState(defaultValue);
  const current = (value !== undefined ? value : internal) ?? "";
  const { className: inputClassName, ...restInputProps } = inputProps ?? {};
  const { className: buttonClassName, ...restButtonProps } = buttonProps ?? {};

  const handleChange = (next: string) => {
    if (value === undefined) setInternal(next);
    onChange?.(next);
  };

  return (
    <form
      ref={ref}
      className={cx("otsukimi-search-bar", className)}
      onSubmit={(e) => {
        e.preventDefault();
        onSearch?.(current.trim());
      }}
      {...props}
    >
      <input
        {...restInputProps}
        type="search"
        className="otsukimi-search-bar-input otsukimi-field"
        placeholder={placeholder}
        aria-label={searchLabel}
        value={current}
        onChange={(e) => handleChange(e.target.value)}
      />
      <Button
        {...restButtonProps}
        type="submit"
        className={cx("otsukimi-search-bar-button", buttonClassName)}
      >
        {buttonLabel}
      </Button>
    </form>
  );
}
