import { useState } from "react";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/16/solid";
import Button from "../../ui/buttons/Button";
import Overlay from "../../ui/common/Overlay";
import ActionButtons from "../../ui/buttons/ActionButtons";
// import ActionButtons from "../../ui/common/ActionButtons";

function Logout() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  function handleLogout() {
    // TODO
    console.log("Logout...");
    setIsOpen(false);
  }

  return (
    <>
      <Button onClick={handleOpen} variation="logout" ariaLabel="Log out">
        <ArrowRightStartOnRectangleIcon className="size-6" />
        <span>logout</span>
      </Button>
      {isOpen && (
        <Overlay onClose={handleClose}>
          <ActionButtons
            confirmText="logout"
            message="Are you sure?"
            variation="danger"
            loadingText="Logging out ..."
            onCancel={handleClose}
            onConfirm={handleLogout}
            // TODO
            isLoading={false}
          />
        </Overlay>
      )}
    </>
  );
}

export default Logout;
