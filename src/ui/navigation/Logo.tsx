import clsx from "clsx";

interface LogoProps {
  className?: string;
}

function Logo({ className = "" }: LogoProps) {
  const styles = clsx(
    "font-Bungee-Spice flex items-center gap-2 text-4xl",
    className,
  );

  return <h1 className={styles}>WatchList</h1>;
}

export default Logo;
