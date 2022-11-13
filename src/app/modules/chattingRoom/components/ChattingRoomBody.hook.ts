import { QUERY_KEYS } from "app/libs/reactQuery/queryKeys";
import { useServiceContext } from "app/modules/common/providers/ServiceProvider";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

function useChattingRoomBody() {
  const { chattingService } = useServiceContext();
  const { roomId } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEYS.CHATTING.GET_CHATTING_MESSAGES, roomId],
    queryFn: async () => await chattingService.getChattings(roomId!),
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
