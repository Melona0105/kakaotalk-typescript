import { QUERY_KEYS } from "app/libs/reactQuery/queryKeys";
import socket from "app/libs/webSocket/webSocket.config";
import { useProfileContext } from "app/modules/common/providers/ProfileProvider";
import { useEffect } from "react";
import { useQueryClient } from "react-query";

function useRouteContainer() {
  const client = useQueryClient();
  const { userProfile } = useProfileContext();

  useEffect(() => {
    socket.on("message_send", () => {
      client.refetchQueries({
        queryKey: [QUERY_KEYS.CHATTING.GET_MY_CHATTING_ROOMS, userProfile?.id],
      });
    });
  }, [client, userProfile?.id]);
}

export default useRouteContainer;
