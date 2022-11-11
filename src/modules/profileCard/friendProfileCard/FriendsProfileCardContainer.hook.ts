import friendApis from "apis/friendApis";
import { QUERY_KEYS } from "libs/reactQuery/queryKeys";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

function useFriendsProfileCardContainer() {
  const { friend_id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEYS.FRIEND.GET_FRIEND, friend_id],
    queryFn: async () => await friendApis.getFriend(friend_id!),
  });

  return {
    models: {
      data,
      isLoading,
      isError,
    },
  };
}

export default useFriendsProfileCardContainer;
