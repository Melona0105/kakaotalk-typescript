import chatActive from "assets/icons/chat_active.png";
import chatInactive from "assets/icons/chat_inactive.png";
import etcActive from "assets/icons/etc_active.png";
import etcInactive from "assets/icons/etc_inactive.png";
import friendActive from "assets/icons/friend_active.png";
import friendInactive from "assets/icons/friend_inactive.png";
import noti from "assets/icons/noti.png";
import setting from "assets/icons/setting.png";
import { firebaseSignOut } from "libs/firebase/firebaseAuth";
import { RightClickMenuItemType } from "modules/common/components/RightClickMenu";
import { useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import { PRIVATE_ROUTES } from "routes/utils/routename";

interface NavigationMenu {
  id: number;
  src: string;
  inactiveSrc?: string;
  onClick?: (e: any) => void;
}

function useNavigationBar() {
  const isHomePath = !!useMatch({ path: PRIVATE_ROUTES.HOME.path });
  const isChattingPath = !!useMatch({ path: PRIVATE_ROUTES.CHATTING.path });
  const isViewMorePath = !!useMatch({ path: PRIVATE_ROUTES.VIEW_MORE.path });
  const navigate = useNavigate();
  const [showSettingModal, setShowSettingModal] = useState<boolean>(false);
  const [pointerLocate, setPointerLocate] = useState({
    clientX: 0,
    clientY: 0,
  });

  const navigationMenus: NavigationMenu[] = [
    {
      id: 0,
      src: isHomePath ? friendActive : friendInactive,
      onClick: () => navigate(PRIVATE_ROUTES.HOME.path),
    },
    {
      id: 1,
      src: isChattingPath ? chatActive : chatInactive,
      onClick: () => navigate(PRIVATE_ROUTES.CHATTING.path),
    },
    {
      id: 2,
      src: isViewMorePath ? etcActive : etcInactive,
      onClick: () => navigate(PRIVATE_ROUTES.VIEW_MORE.path),
    },
    { id: 3, src: setting, onClick: handleShowSettingModal },
  ];

  const SETTING_MODAL_ITEMS: RightClickMenuItemType[] = [
    {
      id: 0,
      title: "친구관리",
      onClick: () => navigate(PRIVATE_ROUTES.SETTING.path),
    },
    { id: 1, title: "로그아웃", onClick: onSignOutClick },
  ];

  function handleShowSettingModal(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    const { clientX, clientY } = e;
    setPointerLocate({ clientX, clientY });
    setShowSettingModal(!showSettingModal);
  }

  function onCloseModalClick() {
    setShowSettingModal(false);
  }

  async function onSignOutClick() {
    await firebaseSignOut();
  }

  return {
    models: {
      showSettingModal,
      navigationMenus,
      SETTING_MODAL_ITEMS,
      pointerLocate,
    },
    operations: {
      handleShowSettingModal,
      onCloseModalClick,
    },
  };
}

export default useNavigationBar;
