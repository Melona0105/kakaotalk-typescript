import { useNavigate } from "react-router-dom";
import { PRIVATE_ROUTES } from "routes/utils/routename";
import { HEADER_IMAGE } from "../utils/homeConstants";

interface HeaderItemsType {
  id: number;
  src?: string;
  onClick: () => void;
}

function useInnerContainerHeader(tabIndex: number) {
  const navigate = useNavigate();
  const HEADER_FUNCTION = [
    { 0: onFriendSearchClick, 1: onAddFriendIconClick },
    { 0: () => console.log("search"), 1: () => console.log(2) },
    { 0: () => console.log("search"), 1: () => console.log(2) },
  ];

  function onFriendSearchClick() {
    console.log("friend");
  }

  function onAddFriendIconClick() {
    navigate(PRIVATE_ROUTES.ADD_FRIEND.path);
  }

  const HEADER_ITEMS: HeaderItemsType[] = [
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
      HEADER_ITEMS,
    },
  };
}

export default useInnerContainerHeader;
