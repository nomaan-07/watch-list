import { useLocation, useNavigate } from "react-router";
import Button from "./Button";
import { MinusIcon, PlusIcon } from "@heroicons/react/16/solid";

const ADD_PAGE_URL = "/add";

function AddButton() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function handleClick() {
    navigate(ADD_PAGE_URL);
  }

  if (pathname === ADD_PAGE_URL)
    return <p className="text-xl text-orange-500">Add a new show</p>;

  return (
    <Button onClick={handleClick} ariaLabel="Add a new show">
      <span className="xs:block hidden shrink-0">Add Show</span>
      <div className="relative size-6">
        <PlusIcon className="absolute inset-0 transition-opacity group-hover:opacity-0" />
        <MinusIcon className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
    </Button>
  );
}

export default AddButton;
