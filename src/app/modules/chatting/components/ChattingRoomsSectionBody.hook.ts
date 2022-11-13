import { QUERY_KEYS } from "app/libs/reactQuery/queryKeys";
import { useProfileContext } from "app/modules/common/providers/ProfileProvider";
import { useServiceContext } from "app/modules/common/providers/ServiceProvider";
import { getSortedDataByUsernameKeyword } from "app/modules/common/utils/searchFunctions";
import { useQuery } from "react-query";

function useChattingRoomsSectionBody(searchKeyword: string) {
  const { chattingRoomService } = useServiceContext();
  const { userProfile } = useProfileContext();
  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEYS.CHATTING.GET_MY_CHATTING_ROOMS, userProfile?.id],
    queryFn: async () => await chattingRoomService.getMyChattingRooms(),
  });

  return {
    models: {
      data: getSortedDataByUsernameKeyword(data, searchKeyword),
      isLoading,
      isError,
    },
  };
}

export default useChattingRoomsSectionBody;
