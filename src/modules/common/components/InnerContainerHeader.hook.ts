import { KeyboardEvent, useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import { PRIVATE_ROUTES } from "routes/utils/routename";
import { HEADER_IMAGE } from "../../home/common/utils/homeConstants";

interface HeaderItemsType {
  id: number;
  src?: string;
  onClick?: () => void;
}

function useInnerContainerHeader(onClearSearchKewordClick?: () => void) {
  const isHomePath = !!useMatch({ path: PRIVATE_ROUTES.HOME.path });
  const isChattingPath = !!useMatch({ path: PRIVATE_ROUTES.CHATTING.path });

  const index = isHomePath ? 0 : isChattingPath ? 1 : 2;

  const [showSearchInput, setShowSearchInput] = useState<boolean>(false);
  const navigate = useNavigate();
  const headerFunctions = [
    { 0: handleShowSearchInput, 1: onAddFriendIconClick },
    { 0: handleShowSearchInput, 1: () => console.log(2) },
    { 0: undefined, 1: undefined },
  ];

  function handleShowSearchInput() {
    if (showSearchInput) {
      onClearSearchKewordClick && onClearSearchKewordClick();
    }
    setShowSearchInput(!showSearchInput);
  }

  function onAddFriendIconClick() {
    navigate(PRIVATE_ROUTES.ADD_FRIEND.path);
  }

  function onESCKeyPress(e: KeyboardEvent<HTMLInputElement>) {
    const { key } = e;

    if (key === "Escape") {
      onClearSearchKewordClick && onClearSearchKewordClick();
      setShowSearchInput(false);
    }
  }

  const headerItems: HeaderItemsType[] = [
    {
      id: 0,
      src: HEADER_IMAGE[index][0],
      onClick: headerFunctions[index][0],
    },
    {
      id: 1,
      src: HEADER_IMAGE[index][1],
      onClick: headerFunctions[index][1],
    },
  ];

  return {
    models: {
      index,
      showSearchInput,
      headerItems,
    },
    operations: {
      onESCKeyPress,
    },
  };
}

export default useInnerContainerHeader;
