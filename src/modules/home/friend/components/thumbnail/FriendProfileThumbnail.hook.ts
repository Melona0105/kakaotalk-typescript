import friendApis from "apis/friendApis";
import { QUERY_KEYS } from "libs/reactQuery/queryKeys";
import { RightClickMenuItemType } from "modules/common/components/RightClickMenu";
import useNavigateChattingRoomByFriendId from "modules/home/common/hooks/useNavigateChattingRoom";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useMatch, useNavigate } from "react-router-dom";
import { PRIVATE_ROUTES } from "routes/utils/routename";

function useFriendProfileThumbnail(
  friendId: string,
  showManagementMenu: boolean
) {
  // 더블클릭을 감지하기위한 값입니다.
  let timer: any = 0;
  let delay = 200;
  let prevent = false;

  const navigate = useNavigate();

  const { navigateChattingRoom } = useNavigateChattingRoomByFriendId(friendId);

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

  /**
   * 클릭할경우, 친구의 프로필로 이동합니다.
   */
  function onFriendClick() {
    timer = setTimeout(() => {
      if (!prevent) {
        navigate(PRIVATE_ROUTES.PROFILE_CARD.path + `/${friendId}`);
      }
      prevent = false;
    }, delay);
  }

  /**
   * 더블클릭할 경우, 친구와의 채팅으로 이동합니다.
   */
  function onFriendDoubleClick() {
    clearTimeout(timer);
    prevent = true;
    navigateChattingRoom();
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
      await client.refetchQueries({
        queryKey: QUERY_KEYS.FRIEND.GET_MY_FRIENDS,
      }),
  });

  const blockFriend = useMutation({
    mutationFn: async () => await friendApis.blockFriend(friendId),
    onSuccess: async () =>
      await client.refetchQueries({
        queryKey: QUERY_KEYS.FRIEND.GET_MY_FRIENDS,
      }),
  });

  const rollbackFriend = useMutation({
    mutationFn: async () => await friendApis.rollbackFriend(friendId),
    onSuccess: async () => {
      await client.refetchQueries({
        queryKey: QUERY_KEYS.FRIEND.GET_MY_FRIENDS,
      });
      await client.refetchQueries({
        queryKey: QUERY_KEYS.FRIEND.GET_MY_HIDEEN_FRIENDS,
      });
      await client.refetchQueries({
        queryKey: QUERY_KEYS.FRIEND.GET_MY_BLOCKED_FRIENDS,
      });
    },
  });

  const deleteFriend = useMutation({
    mutationFn: async () => await friendApis.delteFriend(friendId),
    onSuccess: async () => {
      await client.refetchQueries({
        queryKey: QUERY_KEYS.FRIEND.GET_MY_FRIENDS,
      });
      await client.refetchQueries({
        queryKey: QUERY_KEYS.FRIEND.GET_MY_HIDEEN_FRIENDS,
      });
      await client.refetchQueries({
        queryKey: QUERY_KEYS.FRIEND.GET_MY_BLOCKED_FRIENDS,
      });
    },
  });

  const friendMenuItems: RightClickMenuItemType[] = [
    {
      id: 0,
      title: "채팅하기",
      onClick: async () => navigateChattingRoom(),
    },
    { id: 1, title: "프로필 보기", onClick: onFriendClick },
    { id: 2, title: "숨김", onClick: () => hideFriend.mutate() },
    { id: 3, title: "차단", onClick: () => blockFriend.mutate() },
  ];

  const friendManagementMenuItems: RightClickMenuItemType[] = [
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
      friendMenuItems: showManagementMenu
        ? friendManagementMenuItems
        : friendMenuItems,
    },
    operations: {
      handleShowMenu,
      onContenxtMunu,
      onFriendClick,
      onFriendDoubleClick,
    },
  };
}

export default useFriendProfileThumbnail;
