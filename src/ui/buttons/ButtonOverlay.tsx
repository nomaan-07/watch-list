import clsx from "clsx";

interface ButtonOverlayProps {
  variation?: "normal" | "menu";
}
function ButtonOverlay({ variation = "normal" }: ButtonOverlayProps) {
  const styles = clsx(
    "absolute top-0 bottom-0 left-0 -z-10 w-0 rounded-full bg-orange-500 transition-all group-hover:w-full",
    variation === "menu" && "delay-75 duration-200",
  );

  return <div className={styles}></div>;
}

export default ButtonOverlay;
