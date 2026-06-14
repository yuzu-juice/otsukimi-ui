import type { IconProps } from "./icon-props";

export function ChevronUpIcon({ title, ...props }: IconProps) {
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
        transform="rotate(180 12 12)"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M11.0729 5.29409C11.4098 4.46036 12.5902 4.46036 12.9271 5.29409L17.5066 16.6253C17.7723 17.2826 17.2884 18 16.5795 18H7.42055C6.71156 18 6.22774 17.2826 6.4934 16.6253L11.0729 5.29409Z"
        fill="currentColor"
      />
    </svg>
  );
}
