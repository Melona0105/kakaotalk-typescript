import { useServiceContext } from "app/common/providers/ServiceProvider";
import { QUERY_KEYS } from "app/libs/reactQuery/queryKeys";
import { useEffect, useRef } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

function useChattingRoomBody() {
  const chattingRoomRef = useRef<HTMLDivElement>(null);
  const { chattingService } = useServiceContext();
  const { roomId } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEYS.CHATTING.GET_CHATTING_MESSAGES, roomId],
    queryFn: async () => await chattingService.getChattings(roomId!),
  });

  useEffect(() => {
    if (chattingRoomRef) {
      chattingRoomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [data]);

  return {
    refs: {
      chattingRoomRef,
    },
    models: {
      data,
      isLoading,
      isError,
    },
  };
}

export default useChattingRoomBody;
