import friendApis from "apis/friendApis";
import { QUERY_KEYS } from "libs/reactQuery/queryKeys";
import { useAuthContext } from "modules/common/providers/AuthProvider";
import { useQuery } from "react-query";
import { useMatch } from "react-router-dom";
import { PRIVATE_ROUTES } from "routes/utils/routename";

function useManagementFriendContainer() {
  const { userProfile } = useAuthContext();
  const HIDDEN_FRIEND_PATH =
    PRIVATE_ROUTES.SETTING.path +
    "/" +
    PRIVATE_ROUTES.SETTING.children![1].path;

  const isHiddenFreindPath = !!useMatch({ path: HIDDEN_FRIEND_PATH });
  console.log(isHiddenFreindPath);

  const getMyHiddenFriends = useQuery({
    queryKey: [QUERY_KEYS.FRIEND.GET_MY_HIDEEN_FRIENDS, userProfile?.id],
    queryFn: async () => await friendApis.getMyHiddenFriends(),
  });

  const getMyBlockedFriends = useQuery({
    queryKey: [QUERY_KEYS.FRIEND.GET_MY_BLOCKED_FRIENDS, userProfile?.id],
    queryFn: async () => await friendApis.getMyBlockedFriends(),
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
