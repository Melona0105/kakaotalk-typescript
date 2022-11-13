import { QUERY_KEYS } from "app/libs/reactQuery/queryKeys";
import useEscapeShortcut from "app/modules/common/hooks/useEscapeShortcut";
import { useAuthContext } from "app/modules/common/providers/AuthProvider";
import { PRIVATE_ROUTES } from "app/routes/utils/routename";
import friendApis from "data/apis/friendApis";
import { useQuery } from "react-query";
import { useMatch } from "react-router-dom";

function useManagementFriendContainer() {
  const { userProfile } = useAuthContext();
  useEscapeShortcut();

  const HIDDEN_FRIEND_PATH =
    PRIVATE_ROUTES.SETTING.path +
    "/" +
    PRIVATE_ROUTES.SETTING.children![1].path;

  const isHiddenFreindPath = !!useMatch({ path: HIDDEN_FRIEND_PATH });

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
