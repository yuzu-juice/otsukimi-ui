import { useState, type FormHTMLAttributes, type InputHTMLAttributes } from "react";
import { cx } from "../../lib/cx";
import "./search-bar.css";

type SearchBarProps = Omit<FormHTMLAttributes<HTMLFormElement>, "onSubmit" | "onChange"> & {
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  buttonLabel?: string;
  searchLabel?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
};

export function SearchBar({
  placeholder,
  value,
  defaultValue,
  onChange,
  onSearch,
  buttonLabel,
  searchLabel,
  className,
  inputProps,
  ...props
}: SearchBarProps) {
  const [internal, setInternal] = useState(defaultValue);
  const current = (value !== undefined ? value : internal) ?? "";

  const handleChange = (next: string) => {
    if (value === undefined) setInternal(next);
    onChange?.(next);
  };

  return (
    <form
      className={cx("otsukimi-search-bar", className)}
      onSubmit={(e) => {
        e.preventDefault();
        onSearch?.(current.trim());
      }}
      {...props}
    >
      <input
        type="search"
        className="otsukimi-search-bar-input"
        placeholder={placeholder}
        aria-label={searchLabel}
        {...inputProps}
        value={current}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button type="submit" className="otsukimi-search-bar-button">
        {buttonLabel}
      </button>
    </form>
  );
}
