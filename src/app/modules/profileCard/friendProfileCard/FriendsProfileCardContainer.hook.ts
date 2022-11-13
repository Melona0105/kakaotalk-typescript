import { QUERY_KEYS } from "app/libs/reactQuery/queryKeys";
import useEscapeShortcut from "app/modules/common/hooks/useEscapeShortcut";
import { useServiceContext } from "app/modules/common/providers/ServiceProvider";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

function useFriendsProfileCardContainer() {
  const { friendService } = useServiceContext();
  const { friend_id } = useParams();
  useEscapeShortcut();

  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEYS.FRIEND.GET_FRIEND, friend_id],
    queryFn: async () => await friendService.getFriend(friend_id!),
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
