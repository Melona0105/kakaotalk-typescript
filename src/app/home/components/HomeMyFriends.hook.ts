import { useProfileContext } from "app//common/providers/ProfileProvider";
import { getSortedDataByUsernameKeyword } from "app//common/utils/searchFunctions";
import { useServiceContext } from "app/common/providers/ServiceProvider";
import { QUERY_KEYS } from "app/libs/reactQuery/queryKeys";
import { useQuery } from "react-query";

function useHomeMyFriends(searchKeyword: string) {
  const { userProfile } = useProfileContext();
  const { friendService } = useServiceContext();
  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEYS.FRIEND.GET_MY_FRIENDS, userProfile?.id],
    queryFn: async () => await friendService.getMyFriends(),
  });

  return {
    models: {
      data: getSortedDataByUsernameKeyword(data, searchKeyword),
      isLoading,
      error,
    },
  };
}

export default useHomeMyFriends;
