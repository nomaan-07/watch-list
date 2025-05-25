import type { JSX } from "react";
import { NavLink } from "react-router";

interface MobileNavItemProps {
  name: string;
  icon: JSX.Element;
  path: string;
}

function MobileNavItem({ name, icon, path }: MobileNavItemProps) {
  return (
    <NavLink
      to={path}
      className="mobile-nav-link xs:text-sm flex flex-col items-center justify-center rounded-4xl text-center text-xs capitalize"
    >
      {icon}
      <span>{name}</span>
    </NavLink>
  );
}

export default MobileNavItem;
