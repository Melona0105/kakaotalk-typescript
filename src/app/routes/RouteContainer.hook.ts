import { useProfileContext } from "app//common/providers/ProfileProvider";
import socket from "app//libs/webSocket/webSocket.config";
import { useEffect } from "react";
import { useQueryClient } from "react-query";
import { QUERY_KEYS } from "../libs/reactQuery/queryKeys";


/**
 * websocket을 활성화하는 커스텀 훅입니다.
 * 채팅룸의 데이터를 새로 받아옵니다.
 */
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
