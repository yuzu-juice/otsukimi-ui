import "./divider.css";

type DividerProps = {
  variant?: "solid" | "dashed";
};

export function Divider({ variant = "solid" }: DividerProps) {
  return <div className={`otsukimi-divider otsukimi-divider-${variant}`} />;
}
