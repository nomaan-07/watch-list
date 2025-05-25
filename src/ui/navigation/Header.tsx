import AddButton from "../buttons/AddButton";
import HeaderTitle from "../layout/HeaderTitle";
import Logo from "./Logo";

function Header() {
  return (
    <header className="fixed top-4 right-2 left-2 z-60 flex h-16 items-center justify-between rounded-full bg-zinc-800 px-4 shadow shadow-orange-500 sm:px-8 lg:right-4 lg:left-78 lg:h-20 lg:px-12">
      <Logo className="lg:hidden" />
      <HeaderTitle />
      <AddButton />
    </header>
  );
}

export default Header;
