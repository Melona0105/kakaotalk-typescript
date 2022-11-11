import friendApis from "apis/friendApis";
import { QUERY_KEYS } from "libs/reactQuery/queryKeys";
import { useAuthContext } from "modules/common/providers/AuthProvider";
import { getSortedDataByUsernameKeyword } from "modules/common/utils/searchFunctions";
import { useQuery } from "react-query";

function useHomeMyFriends(searchKeyword: string) {
  const { userProfile } = useAuthContext();
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
