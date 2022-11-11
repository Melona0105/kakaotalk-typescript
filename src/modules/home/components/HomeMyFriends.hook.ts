import friendApis from "apis/friendApis";
import { QUERY_KEYS } from "libs/reactQuery/queryKeys";
import { useAuthContext } from "modules/common/providers/AuthProvider";
import getStringBySearchKeyword from "modules/common/utils/getStringBySearchKeyword";
import { useQuery } from "react-query";

function useHomeMyFriends(searchKeyword: string) {
  const { userProfile } = useAuthContext();
  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEYS.FRIEND.GET_MY_FRIENDS, userProfile?.id],
    queryFn: async () => await friendApis.getMyFriends(),
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

export default useHomeMyFriends;
