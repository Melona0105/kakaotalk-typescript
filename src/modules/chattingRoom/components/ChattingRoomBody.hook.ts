import chattingApis from "apis/chattingAPis";
import { QUERY_KEYS } from "libs/reactQuery/queryKeys";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

function useChattingRoomBody() {
  const { roomId } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEYS.CHATTING.GET_CHAATING_MESSAGES, roomId],
    queryFn: async () => await chattingApis.getChattings(roomId!),
  });

  return {
    models: {
      data,
      isLoading,
      isError,
    },
  };
}

export default useChattingRoomBody;
