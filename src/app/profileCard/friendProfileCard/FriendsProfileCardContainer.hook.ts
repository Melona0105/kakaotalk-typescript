import useEscapeShortcut from "app/common/hooks/useEscapeShortcut";
import { useServiceContext } from "app/common/providers/ServiceProvider";
import { QUERY_KEYS } from "app/libs/reactQuery/queryKeys";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

function useFriendsProfileCardContainer() {
  const { friendService } = useServiceContext();
  const { friendId } = useParams();
  useEscapeShortcut();

  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEYS.FRIEND.GET_FRIEND, friendId],
    queryFn: async () => await friendService.getFriend(friendId!),
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
