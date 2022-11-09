import friendApis from "apis/friendApis";
import { QUERY_KEYS } from "libs/reactQuery/queryKeys";
import getStringBySearchKeyword from "modules/common/utils/getStringBySearchKeyword";
import { useQuery } from "react-query";

function useMyFriends(searchKeyword: string) {
  const { data, isLoading, error } = useQuery({
    queryKey: QUERY_KEYS.GET_MY_FRIENDS,
    queryFn: async () => await friendApis.getMyFriends(),
    staleTime: 500000,
    retry: false,
  });

  function getSortedData() {
    if (searchKeyword) {
      const newData = data?.filter(
        (friend) =>
          getStringBySearchKeyword(friend.username, searchKeyword) && friend
      );

      return newData;
    } else return data;
  }

  return {
    models: {
      data: getSortedData(),
      isLoading,
      error,
    },
  };
}

export default useMyFriends;
