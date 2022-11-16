import { QUERY_KEYS } from "app/libs/reactQuery/queryKeys";
import { RightClickMenuItemType } from "app/modules/common/components/RightClickMenu";
import useNavigateChattingRoomByFriendId from "app/modules/common/hooks/useNavigateChattingRoom";
import { useServiceContext } from "app/modules/common/providers/ServiceProvider";
import { Chatting } from "domain/entities/chattingEntity";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

function useChattingRoomThumbnail(roomData?: Chatting) {
  const client = useQueryClient();
  const { chattingRoomService } = useServiceContext();
  const { senderId, roomId } = roomData!;

  // 더블클릭을 감지하기위한 값입니다.
  let timer: any = 0;
  let delay = 200;
  let prevent = false;

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

  function onChattingRoomClick() {
    // 더블클릭을 진행하는 딜레이동안 doubleClick이벤트가 일어난다면 실행하지않습니다.
    timer = setTimeout(() => {
      if (!prevent) {
        navigateChattingRoom();
      }
      prevent = false;
    }, delay);
  }

  function onChattingRoomDoubleClick() {
    clearTimeout(timer);
    prevent = true;
    navigateChattingRoom();
  }

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
      handleShowMenu,
      onContextMenu,
      onChattingRoomClick,
      onChattingRoomDoubleClick,
    },
  };
}

export default useChattingRoomThumbnail;
