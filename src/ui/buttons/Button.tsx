import type { MouseEventHandler, ReactNode } from "react";
import clsx from "clsx";

import ButtonOverlay from "./ButtonOverlay";

import type { ButtonVariation } from "../../utils/types";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  ariaLabel?: string;
  variation?: ButtonVariation;
}

function Button({
  children,
  type = "button",
  disabled = false,
  onClick,
  ariaLabel,
  variation = "primary",
}: ButtonProps) {
  const styles = clsx(
    "group relative flex items-center text-xl overflow-hidden rounded-full select-none font-medium capitalize",
    (variation === "primary" || variation === "danger") &&
      "gap-1 px-2 py-1 font-medium shadow-inner",
    (variation === "primary" || variation === "danger") &&
      (disabled
        ? "cursor-default opacity-50"
        : "transition-transform md:hover:rotate-4 md:cursor-pointer"),

    variation === "primary" && "shadow-orange-500",
    variation === "danger" && "shadow-red-500",
    variation === "logout" &&
      "gap-4 px-4 py-2.5 transition-colors md:cursor-pointer",
  );

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={styles}
    >
      {!disabled && <ButtonOverlay variation={variation} />}
      {children}
    </button>
  );
}

export default Button;
