import { useLocation } from "react-router";

function HeaderTitle() {
  const { pathname } = useLocation();

  return (
    <h2 className="hidden text-3xl font-semibold capitalize lg:block">
      {pathname.replace("/", "")}
    </h2>
  );
}

export default HeaderTitle;
