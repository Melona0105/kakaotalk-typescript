import chattingRoomApis from "apis/chattingRoomApis";
import { QUERY_KEYS } from "libs/reactQuery/queryKeys";
import { useAuthContext } from "modules/common/providers/AuthProvider";
import { useQuery } from "react-query";

function useChattingRoomsSectionBody() {
  const { userProfile } = useAuthContext();
  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEYS.CHATTING.GET_MY_CHATTING_ROOMS, userProfile?.id],
    queryFn: async () => await chattingRoomApis.getMyChattingRooms(),
  });

  return {
    models: {
      data,
      isLoading,
      isError,
    },
  };
}

export default useChattingRoomsSectionBody;
