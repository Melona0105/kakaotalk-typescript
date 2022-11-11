import chattingApis from "apis/chattingAPis";
import { QUERY_KEYS } from "libs/reactQuery/queryKeys";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

function useChattingRoomBody() {
  const { room_id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEYS.CHATTING.GET_CHATTING_MESSAGES, room_id],
    queryFn: async () => await chattingApis.getChattings(room_id!),
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
