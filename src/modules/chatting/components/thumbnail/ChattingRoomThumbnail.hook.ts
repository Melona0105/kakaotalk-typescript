import chattingRoomApis from "apis/chattingRoomApis";
import { ChattingRoomType } from "apis/interfaces/apiInterface";
import { QUERY_KEYS } from "libs/reactQuery/queryKeys";
import { RightClickMenuItemType } from "modules/common/components/RightClickMenu";
import useNavigateChattingRoomByFriendId from "modules/common/hooks/useNavigateChattingRoom";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

function useChattingRoomThumbnail(roomData?: ChattingRoomType) {
  const client = useQueryClient();
  const { user_id, room_id } = roomData!;

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { navigateChattingRoom } = useNavigateChattingRoomByFriendId(user_id!);

  const [pointerLocate, setPointerLocate] = useState({
    clientX: 0,
    clientY: 0,
  });

  const leaveChattingRoom = useMutation({
    mutationFn: async () => await chattingRoomApis.leaveChattingRoom(room_id!),
    onSuccess: async () =>
      await client.resetQueries({
        queryKey: QUERY_KEYS.CHATTING.GET_MY_CHATTING_ROOMS,
      }),
  });

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }

  const friendMenuItems: RightClickMenuItemType[] = [
    {
      id: 0,
      title: "채팅방 열기",
      onClick: () => navigateChattingRoom(),
    },
    {
      id: 1,
      title: "채팅방 나가기",
      onClick: () => leaveChattingRoom.mutate(),
    },
  ];

  function onContextMenu(e: React.MouseEvent) {
    const { clientX, clientY } = e;
    e.preventDefault();
    setPointerLocate({ clientX, clientY });
    handleShowMenu();
  }

  return {
    models: {
      showMenu,
      pointerLocate,
      friendMenuItems,
    },
    operations: {
      navigateChattingRoom,
      handleShowMenu,
      onContextMenu,
    },
  };
}

export default useChattingRoomThumbnail;
