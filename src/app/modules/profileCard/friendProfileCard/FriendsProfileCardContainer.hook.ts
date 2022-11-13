import { QUERY_KEYS } from "app/libs/reactQuery/queryKeys";
import useEscapeShortcut from "app/modules/common/hooks/useEscapeShortcut";
import { useServiceContext } from "app/modules/common/providers/ServiceProvider";
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
