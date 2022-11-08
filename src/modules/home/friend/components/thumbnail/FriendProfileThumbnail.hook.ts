import friendApis from "apis/friendApis";
import { QUERY_KEYS } from "libs/reactQuery/queryKeys";
import { RightClickMenuItemType } from "modules/common/components/RightClickMenu";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useMatch, useNavigate } from "react-router-dom";
import { PRIVATE_ROUTES } from "routes/utils/routename";

function useFriendProfileThumbnail(
  friendId: string,
  showManagementMenu: boolean
) {
  const navigate = useNavigate();
  const HIDDEN_FRIEND_PATH =
    PRIVATE_ROUTES.SETTING.path +
    "/" +
    PRIVATE_ROUTES.SETTING.children![1].path;

  const isHiddenFreindPath = useMatch({ path: HIDDEN_FRIEND_PATH });

  const client = useQueryClient();
  const [pointerLocate, setPointerLocate] = useState({
    clientX: 0,
    clientY: 0,
  });
  const [showMenu, setShowMenu] = useState<boolean>(false);

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }

  function onFriendClick() {
    navigate(PRIVATE_ROUTES.PROFILE_CARD.path + `/${friendId}`);
  }

  function onContenxtMunu(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const { clientX, clientY } = e;
    e.preventDefault();
    setPointerLocate({ clientX, clientY });
    handleShowMenu();
  }

  const hideFriend = useMutation({
    mutationFn: async () => await friendApis.hideFriend(friendId),
    onSuccess: async () =>
      await client.refetchQueries({ queryKey: QUERY_KEYS.GET_MY_FRIENDS }),
  });

  const blockFriend = useMutation({
    mutationFn: async () => await friendApis.blockFriend(friendId),
    onSuccess: async () =>
      await client.refetchQueries({ queryKey: QUERY_KEYS.GET_MY_FRIENDS }),
  });

  const rollbackFriend = useMutation({
    mutationFn: async () => await friendApis.rollbackFriend(friendId),
    onSuccess: async () => {
      await client.refetchQueries({ queryKey: QUERY_KEYS.GET_MY_FRIENDS });
      await client.refetchQueries({
        queryKey: QUERY_KEYS.GET_MY_HIDEEN_FRIENDS,
      });
      await client.refetchQueries({
        queryKey: QUERY_KEYS.GET_MY_BLOCKED_FRIENDS,
      });
    },
  });

  const deleteFriend = useMutation({
    mutationFn: async () => await friendApis.delteFriend(friendId),
    onSuccess: async () => {
      await client.refetchQueries({ queryKey: QUERY_KEYS.GET_MY_FRIENDS });
      await client.refetchQueries({
        queryKey: QUERY_KEYS.GET_MY_HIDEEN_FRIENDS,
      });
      await client.refetchQueries({
        queryKey: QUERY_KEYS.GET_MY_BLOCKED_FRIENDS,
      });
    },
  });

  const FRIEND_MENU_ITEMS: RightClickMenuItemType[] = [
    { id: 0, title: "채팅하기", onClick: () => console.log(friendId) },
    { id: 1, title: "프로필 보기", onClick: onFriendClick },
    { id: 2, title: "숨김", onClick: () => hideFriend.mutate() },
    { id: 3, title: "차단", onClick: () => blockFriend.mutate() },
  ];

  const FRIEND_MANAGEMENT_MENU_ITEMS: RightClickMenuItemType[] = [
    {
      id: 0,
      title: isHiddenFreindPath ? "숨김 해제" : "차단 해제",
      onClick: () => rollbackFriend.mutate(),
    },
    { id: 1, title: "삭제", onClick: () => deleteFriend.mutate() },
  ];

  return {
    models: {
      showMenu,
      pointerLocate,
      FRIEND_MENU_ITEMS: showManagementMenu
        ? FRIEND_MANAGEMENT_MENU_ITEMS
        : FRIEND_MENU_ITEMS,
    },
    operations: {
      handleShowMenu,
      onContenxtMunu,
      onFriendClick,
    },
  };
}

export default useFriendProfileThumbnail;
