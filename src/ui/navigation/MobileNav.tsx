import MobileNavItem from "./MobileNavItem";
import { items } from "../../data/navItems";

function MobileNav() {
  return (
    <div className="fixed right-2 bottom-4 left-2 z-60 flex h-16 items-center justify-between rounded-full bg-zinc-800 px-4 shadow shadow-orange-500 sm:px-8 lg:hidden">
      {items.map((item) => (
        <MobileNavItem
          name={item.name}
          icon={item.icon}
          path={item.path}
          key={item.name}
        />
      ))}
    </div>
  );
}

export default MobileNav;
