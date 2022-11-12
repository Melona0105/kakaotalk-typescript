import friendApis from "apis/friendApis";
import { QUERY_KEYS } from "libs/reactQuery/queryKeys";
import { getSortedDataByUsernameKeyword } from "modules/common/utils/searchFunctions";
import { useQuery } from "react-query";

function useCreateChattingFriends(searchKeyword: string) {
  const { data, isLoading, isError } = useQuery({
    queryKey: QUERY_KEYS.FRIEND.GET_MY_FRIENDS,
    queryFn: async () => await friendApis.getMyFriends(),
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
