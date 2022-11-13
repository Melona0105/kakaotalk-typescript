import useEscapeShortcut from "app/modules/common/hooks/useEscapeShortcut";
import { PRIVATE_ROUTES } from "app/routes/utils/routename";
import chattingRoomApis from "data/apis/chattingRoomApis";
import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

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
    onSuccess: ({ roomId }) =>
      navigate(PRIVATE_ROUTES.CHATTING_ROOM.path + `/${roomId}`, {
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
