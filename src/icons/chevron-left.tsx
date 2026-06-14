import type { IconProps } from "./icon-props";

export function ChevronLeftIcon({ title, ...props }: IconProps) {
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
        transform="rotate(90 12 12)"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M5.29409 12.9271C4.46036 12.5902 4.46036 11.4098 5.29409 11.0729L16.6253 6.4934C17.2826 6.22774 18 6.71156 18 7.42055V16.5795C18 17.2884 17.2826 17.7723 16.6253 17.5066L5.29409 12.9271Z"
        fill="currentColor"
      />
    </svg>
  );
}
