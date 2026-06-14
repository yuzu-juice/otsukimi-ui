import type { IconProps } from "./icon-props";

export function ArrowUpIcon({ title, ...props }: IconProps) {
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
        d="M11 20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20H12H11ZM12.7071 3.29289C12.3166 2.90237 11.6834 2.90237 11.2929 3.29289L4.92893 9.65685C4.53841 10.0474 4.53841 10.6805 4.92893 11.0711C5.31946 11.4616 5.95262 11.4616 6.34315 11.0711L12 5.41421L17.6569 11.0711C18.0474 11.4616 18.6805 11.4616 19.0711 11.0711C19.4616 10.6805 19.4616 10.0474 19.0711 9.65685L12.7071 3.29289ZM12 20H13V4H12H11V20H12Z"
        fill="currentColor"
      />
    </svg>
  );
}
