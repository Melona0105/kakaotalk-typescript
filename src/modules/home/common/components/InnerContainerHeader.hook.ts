import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PRIVATE_ROUTES } from "routes/utils/routename";
import { HEADER_IMAGE } from "../utils/homeConstants";

interface HeaderItemsType {
  id: number;
  src?: string;
  onClick: () => void;
}

function useInnerContainerHeader(tabIndex: number) {
  const [showSearchInput, setShowSearchInput] = useState<boolean>(false);
  const navigate = useNavigate();
  const HEADER_FUNCTION = [
    { 0: handleShowSearchInput, 1: onAddFriendIconClick },
    { 0: () => console.log("search"), 1: () => console.log(2) },
    { 0: () => console.log("search"), 1: () => console.log(2) },
  ];

  function handleShowSearchInput() {
    setShowSearchInput(!showSearchInput);
  }

  function onAddFriendIconClick() {
    navigate(PRIVATE_ROUTES.ADD_FRIEND.path);
  }

  const headerItems: HeaderItemsType[] = [
    {
      id: 0,
      src: HEADER_IMAGE[tabIndex][0],
      onClick: HEADER_FUNCTION[tabIndex][0],
    },
    {
      id: 1,
      src: HEADER_IMAGE[tabIndex][1],
      onClick: HEADER_FUNCTION[tabIndex][1],
    },
  ];

  return {
    models: {
      showSearchInput,
      headerItems,
    },
  };
}

export default useInnerContainerHeader;
