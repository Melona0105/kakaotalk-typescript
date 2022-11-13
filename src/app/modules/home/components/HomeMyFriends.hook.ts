import { QUERY_KEYS } from "app/libs/reactQuery/queryKeys";
import { useProfileContext } from "app/modules/common/providers/ProfileProvider";
import { getSortedDataByUsernameKeyword } from "app/modules/common/utils/searchFunctions";
import friendApis from "data/apis/friendApis";
import { useQuery } from "react-query";

function useHomeMyFriends(searchKeyword: string) {
  const { userProfile } = useProfileContext();
  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEYS.FRIEND.GET_MY_FRIENDS, userProfile?.id],
    queryFn: async () => await friendApis.getMyFriends(),
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
