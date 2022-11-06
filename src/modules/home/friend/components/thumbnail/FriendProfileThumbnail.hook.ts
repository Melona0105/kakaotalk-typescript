import friendApis from "apis/friendApis";
import { QUERY_KEYS } from "libs/reactQuery/queryKeys";
import { RightClickMenuItemType } from "modules/common/components/RightClickMenu";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

function useFriendProfileThumbnail(friendId: string) {
  const client = useQueryClient();
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

  const hideFriend = useMutation({
    mutationFn: async (friendId: string) =>
      await friendApis.hideFriend(friendId),
    onSuccess: async () =>
      await client.refetchQueries({ queryKey: QUERY_KEYS.GET_MY_FRIENDS }),
  });

  const blockFriend = useMutation({
    mutationFn: async (friendId: string) =>
      await friendApis.blockFriend(friendId),
    onSuccess: async () =>
      await client.refetchQueries({ queryKey: QUERY_KEYS.GET_MY_FRIENDS }),
  });

  const FRIEND_MENU_ITEMS: RightClickMenuItemType[] = [
    { id: 0, title: "채팅하기", onClick: () => console.log(friendId) },
    { id: 1, title: "프로필 보기", onClick: () => console.log(friendId) },
    { id: 2, title: "숨김", onClick: () => hideFriend.mutate(friendId) },
    { id: 3, title: "차단", onClick: () => blockFriend.mutate(friendId) },
  ];

  return {
    models: {
      showMenu,
      pointerLocate,
      FRIEND_MENU_ITEMS,
    },
    operations: {
      handleShowMenu,
      onContenxtMunu,
    },
  };
}

export default useFriendProfileThumbnail;
