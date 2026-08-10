import { useState, type FormHTMLAttributes } from "react";
import { cx } from "../../lib/cx";
import "./search-bar.css";

type SearchBarProps = Omit<FormHTMLAttributes<HTMLFormElement>, "onSubmit" | "onChange"> & {
  placeholder?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  buttonLabel?: string;
  searchLabel?: string;
};

export function SearchBar({
  placeholder = "検索したいことを入力するよ",
  defaultValue = "",
  onChange,
  onSearch,
  buttonLabel = "検索",
  searchLabel = "検索",
  className,
  ...props
}: SearchBarProps) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (next: string) => {
    setValue(next);
    onChange?.(next);
  };

  return (
    <form
      className={cx("otsukimi-search-bar", className)}
      onSubmit={(e) => {
        e.preventDefault();
        onSearch?.(value.trim());
      }}
      {...props}
    >
      <input
        type="search"
        className="otsukimi-search-bar-input"
        placeholder={placeholder}
        aria-label={searchLabel}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button type="submit" className="otsukimi-search-bar-button">
        {buttonLabel}
      </button>
    </form>
  );
}
