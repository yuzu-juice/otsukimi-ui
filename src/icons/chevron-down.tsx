import type { IconProps } from "./icon-props";

export function ChevronDownIcon({ title, ...props }: IconProps) {
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
      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12.9271 18.7059C12.5902 19.5396 11.4098 19.5396 11.0729 18.7059L6.4934 7.3747C6.22774 6.71737 6.71156 6 7.42055 6H16.5795C17.2884 6 17.7723 6.71737 17.5066 7.3747L12.9271 18.7059Z"
        fill="currentColor"
      />
    </svg>
  );
}
