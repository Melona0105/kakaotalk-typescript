import { QUERY_KEYS } from "app/libs/reactQuery/queryKeys";
import { PRIVATE_ROUTES } from "app/routes/utils/routename";
import chattingRoomApis from "data/apis/chattingRoomApis";
import { useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

/**
 * friendId를 받아서 채팅방으로 연결시켜주는 커스텀 훅입니다.
 */
function useNavigateChattingRoomByFriendId(firendId: string) {
  const navigate = useNavigate();
  const client = useQueryClient();

  const { refetch } = useQuery({
    queryKey: [QUERY_KEYS.CHATTING.GET_CHATTING_ROOM_ID, firendId],

    queryFn: async ({ queryKey }) =>
      await chattingRoomApis.getChattingRoom(queryKey[1]),

    // 쿼리에 성공하고나면, 채팅방들을 최신화해줍니다.
    onSuccess: async ({ room_id }) => {
      await client.refetchQueries({
        queryKey: QUERY_KEYS.CHATTING.GET_MY_CHATTING_ROOMS,
      });
      navigate(PRIVATE_ROUTES.CHATTING_ROOM.path + `/${room_id}`);
    },
    enabled: false,
  });

  return {
    navigateChattingRoom: refetch,
  };
}

export default useNavigateChattingRoomByFriendId;
