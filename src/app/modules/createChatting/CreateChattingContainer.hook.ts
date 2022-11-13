import useEscapeShortcut from "app/modules/common/hooks/useEscapeShortcut";
import { PRIVATE_ROUTES } from "app/routes/utils/routename";
import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useServiceContext } from "../common/providers/ServiceProvider";

function useCreateChattingContainer() {
  const { chattingRoomService } = useServiceContext();
  const navigate = useNavigate();
  const [selectedFriendId, setSelectedFriendId] = useState<string>("");
  useEscapeShortcut();

  function onFriendSelect(friendId: string) {
    setSelectedFriendId(friendId);
  }

  const { refetch } = useQuery({
    queryFn: async () =>
      await chattingRoomService.getChattingRoom(selectedFriendId),
    enabled: false,
    onSuccess: ({ id }) =>
      navigate(PRIVATE_ROUTES.CHATTING_ROOM.path + `/${id}`, {
        replace: true,
      }),
  });

  async function onCreateChattingRoomClick() {
    if (selectedFriendId) {
      await refetch();
    }
  }

  return {
    models: {
      selectedFriendId,
    },
    operations: {
      onFriendSelect,
      onCreateChattingRoomClick,
    },
  };
}

export default useCreateChattingContainer;
