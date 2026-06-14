import type { IconProps } from "./icon-props";

export function ArrowDownIcon({ title, ...props }: IconProps) {
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
        d="M13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4H12H13ZM11.2929 20.7071C11.6834 21.0976 12.3166 21.0976 12.7071 20.7071L19.0711 14.3431C19.4616 13.9526 19.4616 13.3195 19.0711 12.9289C18.6805 12.5384 18.0474 12.5384 17.6569 12.9289L12 18.5858L6.34315 12.9289C5.95262 12.5384 5.31946 12.5384 4.92893 12.9289C4.53841 13.3195 4.53841 13.9526 4.92893 14.3431L11.2929 20.7071ZM12 4H11V20H12H13V4H12Z"
        fill="currentColor"
      />
    </svg>
  );
}
