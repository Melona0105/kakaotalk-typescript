import { QUERY_KEYS } from "app/libs/reactQuery/queryKeys";
import { RightClickMenuItemType } from "app/modules/common/components/RightClickMenu";
import useNavigateChattingRoomByFriendId from "app/modules/common/hooks/useNavigateChattingRoom";
import { useAuthContext } from "app/modules/common/providers/AuthProvider";
import { PRIVATE_ROUTES } from "app/routes/utils/routename";
import friendApis from "data/apis/friendApis";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useMatch, useNavigate } from "react-router-dom";

function useFriendProfileThumbnail(
  friend_id: string,
  showManagementMenu: boolean,
  onFriendSelect?: (friendId: string) => void
) {
  const { userProfile } = useAuthContext();
  // 더블클릭을 감지하기위한 값입니다.
  let timer: any = 0;
  let delay = 200;
  let prevent = false;

  const navigate = useNavigate();

  const { navigateChattingRoom } = useNavigateChattingRoomByFriendId(friend_id);

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
   * 클릭할경우 작동하는 함수입니다.
   * 1.selectbox가 활성화 되어있지않을 경우 친구의 프로필로 이동합니다.
   * 2. 활성화 되어있을 경우에는 체크박스를 on/off합니다.
   */
  function onFriendClick() {
    if (!onFriendSelect) {
      timer = setTimeout(() => {
        if (!prevent) {
          navigate(PRIVATE_ROUTES.PROFILE_CARD.path + `/${friend_id}`);
        }
        prevent = false;
      }, delay);
    } else {
      onFriendSelect(friend_id);
    }
  }

  /**
   * 더블클릭할 경우, 친구와의 채팅으로 이동합니다.
   */
  function onFriendDoubleClick() {
    if (!onFriendSelect) {
      clearTimeout(timer);
      prevent = true;
      navigateChattingRoom();
    }
  }

  function onContextMenu(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!onFriendSelect) {
      const { clientX, clientY } = e;
      e.preventDefault();
      setPointerLocate({ clientX, clientY });
      handleShowMenu();
    }
  }

  const hideFriend = useMutation({
    mutationFn: async () => await friendApis.hideFriend(friend_id),
    onSuccess: async () => {
      await client.refetchQueries({
        queryKey: [QUERY_KEYS.FRIEND.GET_MY_FRIENDS, userProfile?.id],
      });
      await client.refetchQueries({
        queryKey: [QUERY_KEYS.FRIEND.GET_MY_HIDEEN_FRIENDS, userProfile?.id],
      });
    },
  });

  const blockFriend = useMutation({
    mutationFn: async () => await friendApis.blockFriend(friend_id),
    onSuccess: async () => {
      await client.refetchQueries({
        queryKey: [QUERY_KEYS.FRIEND.GET_MY_FRIENDS, userProfile?.id],
      });
      await client.refetchQueries({
        queryKey: [QUERY_KEYS.FRIEND.GET_MY_BLOCKED_FRIENDS, userProfile?.id],
      });
    },
  });

  const rollbackFriend = useMutation({
    mutationFn: async () => await friendApis.rollbackFriend(friend_id),
    onSuccess: async () => {
      await client.refetchQueries({
        queryKey: [QUERY_KEYS.FRIEND.GET_MY_FRIENDS, userProfile?.id],
      });
      await client.refetchQueries({
        queryKey: [QUERY_KEYS.FRIEND.GET_MY_HIDEEN_FRIENDS, userProfile?.id],
      });
      await client.refetchQueries({
        queryKey: [QUERY_KEYS.FRIEND.GET_MY_BLOCKED_FRIENDS, userProfile?.id],
      });
    },
  });

  const deleteFriend = useMutation({
    mutationFn: async () => await friendApis.delteFriend(friend_id),
    onSuccess: async () => {
      await client.refetchQueries({
        queryKey: [QUERY_KEYS.FRIEND.GET_MY_FRIENDS, userProfile?.id],
      });
      await client.refetchQueries({
        queryKey: [QUERY_KEYS.FRIEND.GET_MY_HIDEEN_FRIENDS, userProfile?.id],
      });
      await client.refetchQueries({
        queryKey: [QUERY_KEYS.FRIEND.GET_MY_BLOCKED_FRIENDS, userProfile?.id],
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
      onContextMenu,
      onFriendClick,
      onFriendDoubleClick,
    },
  };
}

export default useFriendProfileThumbnail;
