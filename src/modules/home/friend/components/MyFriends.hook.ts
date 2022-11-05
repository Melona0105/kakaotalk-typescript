import friendApis from "apis/friendApis";
import { QUERY_KEYS } from "libs/reactQuery/queryKeys";
import { useQuery } from "react-query";

function useMyFriends() {
  const { data, isLoading, error } = useQuery({
    queryKey: QUERY_KEYS.GET_MY_FRIENDS,
    queryFn: async () => await friendApis.getMyFriends(),
    staleTime: 500000,
  });

  return {
    models: {
      data,
      isLoading,
      error,
    },
  };
}

export default useMyFriends;
