import { useState } from "react";

function useFriendProfileThumbnail() {
  const [pointerLocate, setPointerLocate] = useState({
    clientX: 0,
    clientY: 0,
  });
  const [showMenu, setShowMenu] = useState<boolean>(false);

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }

  function onContenxtMunu(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const { clientX, clientY } = e;
    e.preventDefault();
    setPointerLocate({ clientX, clientY });
    handleShowMenu();
  }

  return {
    models: {
      showMenu,
      pointerLocate,
    },
    operations: {
      handleShowMenu,
      onContenxtMunu,
    },
  };
}

export default useFriendProfileThumbnail;
