import { useProfileContext } from "app//common/providers/ProfileProvider";
import useEscapeShortcut from "app/common/hooks/useEscapeShortcut";
import { QUERY_KEYS } from "app/libs/reactQuery/queryKeys";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useServiceContext } from "../common/providers/ServiceProvider";

function useChattingRoomContainer() {
  const { chattingRoomService } = useServiceContext();
  const { userProfile } = useProfileContext();
  const { roomId } = useParams();
  useEscapeShortcut();

  // 룸 아이디를 바탕으로 룸 정보를 쿼리합니다.
  const { data, isLoading, isError } = useQuery({
    queryKey: [
      QUERY_KEYS.CHATTING.GET_CHATTING_ROOM_INFO,
      roomId,
      userProfile?.id,
    ],
    queryFn: async () => await chattingRoomService.getChattingRoomInfo(roomId!),
  });

  return {
    models: {
      data,
      isLoading,
      isError,
    },
  };
}

export default useChattingRoomContainer;
