import type { JSX } from "react";
import { Link, useLocation } from "react-router";
import clsx from "clsx";
import ButtonOverlay from "../buttons/ButtonOverlay";

interface NavItemProps {
  name: string;
  icon: JSX.Element;
  path: string;
}

function NavItem({ name, icon, path }: NavItemProps) {
  const { pathname: currentPath } = useLocation();
  const isCurrentPath = path === currentPath;

  const styles = clsx(
    "group relative flex items-center gap-4 rounded-full px-4 py-2.5 text-xl font-medium capitalize select-none",
    isCurrentPath
      ? "shadow-inner shadow-orange-500 pointer-events-none"
      : "transition-colors",
  );

  return (
    <Link to={path} className={styles}>
      {icon}
      <span>{name}</span>
      {!isCurrentPath && <ButtonOverlay variation="menu" />}
    </Link>
  );
}

export default NavItem;
