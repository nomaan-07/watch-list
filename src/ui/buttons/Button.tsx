import type { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  ariaLabel?: string;
}

function Button({
  children,
  type = "button",
  disabled = false,
  onClick,
  ariaLabel,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className="group relative flex items-center gap-1 overflow-hidden rounded-full border border-orange-500 px-2 py-1 font-medium transition-transform md:cursor-pointer md:hover:rotate-4"
    >
      <div className="absolute top-0 bottom-0 left-0 -z-10 w-0 rounded-full bg-orange-500 transition-all group-hover:w-full"></div>
      {children}
    </button>
  );
}

export default Button;
