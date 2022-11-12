import chattingRoomApis from "apis/chattingRoomApis";
import useEscapeShortcut from "modules/common/hooks/useEscapeShortcut";
import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { PRIVATE_ROUTES } from "routes/utils/routename";

function useCreateChattingContainer() {
  const navigate = useNavigate();
  const [selectedFriendId, setSelectedFriendId] = useState<string>("");
  useEscapeShortcut();

  function onFriendSelect(friendId: string) {
    setSelectedFriendId(friendId);
  }

  const { refetch } = useQuery({
    queryFn: async () =>
      await chattingRoomApis.getChattingRoom(selectedFriendId),
    enabled: false,
    onSuccess: ({ room_id }) =>
      navigate(PRIVATE_ROUTES.CHATTING_ROOM.path + `/${room_id}`, {
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
