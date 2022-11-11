import { useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import { PRIVATE_ROUTES } from "routes/utils/routename";
import { HEADER_IMAGE } from "../utils/homeConstants";

interface HeaderItemsType {
  id: number;
  src?: string;
  onClick: () => void;
}

function useInnerContainerHeader(onClearSearchKewordClick?: () => void) {
  const isHomePath = !!useMatch({ path: PRIVATE_ROUTES.HOME.path });
  const isChattingPath = !!useMatch({ path: PRIVATE_ROUTES.CHATTING.path });

  const index = isHomePath ? 0 : isChattingPath ? 1 : 2;

  const [showSearchInput, setShowSearchInput] = useState<boolean>(false);
  const navigate = useNavigate();
  const HEADER_FUNCTION = [
    { 0: handleShowSearchInput, 1: onAddFriendIconClick },
    { 0: () => console.log("search"), 1: () => console.log(2) },
    { 0: () => console.log("search"), 1: () => console.log(2) },
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

  const headerItems: HeaderItemsType[] = [
    {
      id: 0,
      src: HEADER_IMAGE[index][0],
      onClick: HEADER_FUNCTION[index][0],
    },
    {
      id: 1,
      src: HEADER_IMAGE[index][1],
      onClick: HEADER_FUNCTION[index][1],
    },
  ];

  return {
    models: {
      index,
      showSearchInput,
      headerItems,
    },
  };
}

export default useInnerContainerHeader;
