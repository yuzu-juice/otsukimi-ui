import type { IconProps } from "./icon-props";

export function ChevronRightIcon({ title, ...props }: IconProps) {
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
      <circle
        cx="12"
        cy="12"
        r="11"
        transform="rotate(-90 12 12)"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M18.7059 11.0729C19.5396 11.4098 19.5396 12.5902 18.7059 12.9271L7.3747 17.5066C6.71737 17.7723 6 17.2884 6 16.5795V7.42055C6 6.71156 6.71737 6.22774 7.3747 6.4934L18.7059 11.0729Z"
        fill="currentColor"
      />
    </svg>
  );
}
