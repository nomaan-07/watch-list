import Logout from "../../features/authentication/Logout";
import UserProfile from "../../features/authentication/UserProfile";
import Logo from "./Logo";
import MainNav from "./MainNav";

function Sidebar() {
  return (
    <aside className="fixed top-4 bottom-4 left-4 hidden w-70 flex-col justify-between gap-y-12 overflow-y-auto rounded-4xl bg-zinc-800 p-8 shadow shadow-orange-500 lg:flex">
      <Logo />
      <UserProfile />
      <MainNav />
      <Logout />
    </aside>
  );
}

export default Sidebar;
