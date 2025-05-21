import AddButton from "../buttons/AddButton";
import HeaderTitle from "../layout/HeaderTitle";
import Logo from "./Logo";

function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-60 flex h-14 items-center justify-between bg-zinc-800 px-4 sm:px-8 lg:left-70 lg:h-20 lg:px-12 lg:py-4">
      <Logo className="lg:hidden" />
      <HeaderTitle />
      <AddButton />
    </header>
  );
}

export default Header;
