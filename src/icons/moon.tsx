import type { IconProps } from "./icon-props";

export function MoonIcon({ title, ...props }: IconProps) {
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
        d="M16.4639 2C19.6527 3.67121 21.83 7.0105 21.8301 10.8604C21.8301 16.3831 17.3527 20.8601 11.83 20.8604C6.93308 20.8604 2.86065 17.3402 2 12.6924C3.64816 14.7799 6.19929 16.121 9.06543 16.1211C14.036 16.1211 18.0654 12.0917 18.0654 7.12109C18.0654 5.21769 17.4722 3.45395 16.4639 2Z"
        fill="currentColor"
      />
    </svg>
  );
}
