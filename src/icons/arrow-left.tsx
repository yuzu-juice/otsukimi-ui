import type { IconProps } from "./icon-props";

export function ArrowLeftIcon({ title, ...props }: IconProps) {
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
        d="M20 13C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11V12V13ZM3.29289 11.2929C2.90237 11.6834 2.90237 12.3166 3.29289 12.7071L9.65685 19.0711C10.0474 19.4616 10.6805 19.4616 11.0711 19.0711C11.4616 18.6805 11.4616 18.0474 11.0711 17.6569L5.41421 12L11.0711 6.34315C11.4616 5.95262 11.4616 5.31946 11.0711 4.92893C10.6805 4.53841 10.0474 4.53841 9.65685 4.92893L3.29289 11.2929ZM20 12V11H4V12V13H20V12Z"
        fill="currentColor"
      />
    </svg>
  );
}
