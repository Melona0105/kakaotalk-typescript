import { PRIVATE_ROUTES } from "app/routes/utils/routename";
import chattingCreateIcon from "assets/icons/chatting_create.png";
import friendAddIcon from "assets/icons/friend_add.png";
import searchIcon from "assets/icons/friend_search.png";
import { KeyboardEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface HeaderItemsType {
  [key: string]: { id: number; src: string; onClick: () => void }[];
}

function useInnerContainerHeader(onClearSearchKewordClick?: () => void) {
  const { pathname } = useLocation();

  // 검색창의 on/off를 관리하는 상태입니다.
  const [showSearchInput, setShowSearchInput] = useState<boolean>(false);

  const navigate = useNavigate();

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

  const headerItems: HeaderItemsType = {
    [PRIVATE_ROUTES.HOME.path]: [
      { id: 0, src: searchIcon, onClick: handleShowSearchInput },
      { id: 1, src: friendAddIcon, onClick: onAddFriendIconClick },
    ],
    [PRIVATE_ROUTES.CHATTING.path]: [
      { id: 0, src: searchIcon, onClick: handleShowSearchInput },
      {
        id: 1,
        src: chattingCreateIcon,
        onClick: () => navigate(PRIVATE_ROUTES.CREATE_NEW_CHATTING.path),
      },
    ],
  };

  return {
    models: {
      showSearchInput,
      headerItems: headerItems[pathname],
    },
    operations: {
      onESCKeyPress,
    },
  };
}

export default useInnerContainerHeader;
