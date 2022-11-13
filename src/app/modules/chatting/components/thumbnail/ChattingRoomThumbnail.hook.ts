import { QUERY_KEYS } from "app/libs/reactQuery/queryKeys";
import { RightClickMenuItemType } from "app/modules/common/components/RightClickMenu";
import useNavigateChattingRoomByFriendId from "app/modules/common/hooks/useNavigateChattingRoom";
import { useServiceContext } from "app/modules/common/providers/ServiceProvider";
import { Chatting } from "domain/entities/chattingEntity";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

function useChattingRoomThumbnail(roomData?: Chatting) {
  const { chattingRoomService } = useServiceContext();
  const client = useQueryClient();
  const { senderId, roomId } = roomData!;
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { navigateChattingRoom } = useNavigateChattingRoomByFriendId(senderId!);

  const [pointerLocate, setPointerLocate] = useState({
    clientX: 0,
    clientY: 0,
  });

  const leaveChattingRoom = useMutation({
    mutationFn: async () =>
      await chattingRoomService.leaveChattingRoom(roomId!),
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
