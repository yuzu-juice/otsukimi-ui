import type { IconProps } from "./icon-props";

export function SparkleIcon({ title, ...props }: IconProps) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M12 4L14.5456 9.45442L20 12L14.5456 14.5456L12 20L9.45442 14.5456L4 12L9.45442 9.45442L12 4Z"
        fill="currentColor"
      />
    </svg>
  );
}
