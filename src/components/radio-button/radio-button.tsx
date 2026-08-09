import "./radio-button.css";

type RadioButtonProps = {
  state?: "unchecked" | "checked";
  label?: string;
};

export function RadioButton({ state = "unchecked", label }: RadioButtonProps) {
  return (
    <label className="otsukimi-radio-button">
      <span className={`otsukimi-radio-circle otsukimi-radio-${state}`} aria-hidden="true">
        {state === "checked" && <span className="otsukimi-radio-dot" />}
      </span>

      <span className="otsukimi-radio-label">
        {label ?? (state === "checked" ? "チェックしている" : "チェックしていない")}
      </span>
    </label>
  );
}
