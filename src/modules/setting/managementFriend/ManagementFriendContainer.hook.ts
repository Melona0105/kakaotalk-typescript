import friendApis from "apis/friendApis";
import { QUERY_KEYS } from "libs/reactQuery/queryKeys";
import { useQuery } from "react-query";
import { useMatch } from "react-router-dom";
import { PRIVATE_ROUTES } from "routes/utils/routename";

function useManagementFriendContainer() {
  const HIDDEN_FRIEND_PATH =
    PRIVATE_ROUTES.SETTING.path +
    "/" +
    PRIVATE_ROUTES.SETTING.children![1].path;

  const isHiddenFreindPath = useMatch({ path: HIDDEN_FRIEND_PATH });

  const getMyHiddenFriends = useQuery({
    queryKey: QUERY_KEYS.GET_MY_HIDEEN_FRIENDS,
    queryFn: async () => await friendApis.getMyHiddenFriends(),
    enabled: !!isHiddenFreindPath,
    retry: false,
  });

  const getMyBlockedFriends = useQuery({
    queryKey: QUERY_KEYS.GET_MY_BLOCKED_FRIENDS,
    queryFn: async () => await friendApis.getMyBlockedFriends(),
    enabled: !isHiddenFreindPath,
    retry: false,
  });

  return {
    models: {
      isHiddenFreindPath,
      data: isHiddenFreindPath
        ? getMyHiddenFriends?.data
        : getMyBlockedFriends?.data,
    },
  };
}

export default useManagementFriendContainer;
