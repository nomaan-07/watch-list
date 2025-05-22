import type { MouseEventHandler, ReactNode } from "react";
import ButtonOverlay from "./ButtonOverlay";

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
      className="group relative flex items-center gap-1 overflow-hidden rounded-full border-orange-500 px-2 py-1 font-medium shadow-inner shadow-orange-500 transition-transform md:cursor-pointer md:hover:rotate-4"
    >
      <ButtonOverlay />
      {children}
    </button>
  );
}

export default Button;
