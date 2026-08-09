import { StarIcon, MoonIcon } from "../../icons";
import "./checkbox.css";

type CheckboxProps = {
  state?: "unchecked" | "star-checked" | "moon-checked";
  label?: string;
};

export function Checkbox({ state = "unchecked", label }: CheckboxProps) {
  const checked = state !== "unchecked";

  const defaultLabel = state === "unchecked" ? "チェックしていない" : "チェックしている";

  return (
    <label className="otsukimi-checkbox">
      <span className={`otsukimi-checkbox-box otsukimi-checkbox-${state}`} aria-hidden="true">
        {state === "star-checked" && <StarIcon />}
        {state === "moon-checked" && <MoonIcon />}
      </span>

      <span className="otsukimi-checkbox-label">{label ?? defaultLabel}</span>

      <input type="checkbox" checked={checked} readOnly hidden />
    </label>
  );
}
