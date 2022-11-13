import { QUERY_KEYS } from "app/libs/reactQuery/queryKeys";
import useEscapeShortcut from "app/modules/common/hooks/useEscapeShortcut";
import { useProfileContext } from "app/modules/common/providers/ProfileProvider";
import chattingRoomApis from "data/apis/chattingRoomApis";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

function useChattingRoomContainer() {
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
    queryFn: async () => await chattingRoomApis.getChattingRoomInfo(roomId!),
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
