import chattingRoomApis from "apis/chattingRoomApis";
import { QUERY_KEYS } from "libs/reactQuery/queryKeys";
import useGobackWhenESCPress from "modules/common/hooks/useGobackWhenESCPress";
import { useAuthContext } from "modules/common/providers/AuthProvider";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

function useChattingRoomContainer() {
  const { userProfile } = useAuthContext();
  const { room_id } = useParams();
  useGobackWhenESCPress();

  // 룸 아이디를 바탕으로 룸 정보를 쿼리합니다.
  const { data, isLoading, isError } = useQuery({
    queryKey: [
      QUERY_KEYS.CHATTING.GET_CHATTING_ROOM_INFO,
      room_id,
      userProfile?.id,
    ],
    queryFn: async () => await chattingRoomApis.getChattingRoomInfo(room_id!),
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
