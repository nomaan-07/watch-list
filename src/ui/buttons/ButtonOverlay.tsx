import clsx from "clsx";
import type { ButtonVariation } from "../../utils/types";

interface ButtonOverlayProps {
  variation?: ButtonVariation | "menu";
}
function ButtonOverlay({ variation = "primary" }: ButtonOverlayProps) {
  const styles = clsx(
    "absolute top-0 bottom-0 left-0 -z-10 w-0 rounded-full transition-all group-hover:w-full",
    (variation === "menu" || variation === "logout") && "delay-75 duration-200",
    (variation === "primary" || variation === "menu") && "bg-orange-500",
    variation === "logout" && "bg-red-800",
    variation === "danger" && "bg-red-500",
  );

  return <div className={styles}></div>;
}

export default ButtonOverlay;
