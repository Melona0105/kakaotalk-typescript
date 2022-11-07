import friendApis from "apis/friendApis";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

function useFriendsProfileCardContainer() {
  const { friendId } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await friendApis.getFriend(friendId!),
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
