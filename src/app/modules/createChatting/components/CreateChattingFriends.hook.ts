import { QUERY_KEYS } from "app/libs/reactQuery/queryKeys";
import { useProfileContext } from "app/modules/common/providers/ProfileProvider";
import { useServiceContext } from "app/modules/common/providers/ServiceProvider";
import { getSortedDataByUsernameKeyword } from "app/modules/common/utils/searchFunctions";
import { useQuery } from "react-query";

function useCreateChattingFriends(searchKeyword: string) {
  const { userProfile } = useProfileContext();
  const { friendService } = useServiceContext();

  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEYS.FRIEND.GET_MY_FRIENDS, userProfile?.id],
    queryFn: async () => await friendService.getMyFriends(),
  });

  return {
    models: {
      data: getSortedDataByUsernameKeyword(data, searchKeyword),
      isLoading,
      isError,
    },
  };
}

export default useCreateChattingFriends;
