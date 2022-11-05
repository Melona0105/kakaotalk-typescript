import friendApis from "apis/friendApis";
import { QUERY_KEYS } from "libs/reactQuery/queryKeys";
import { useMutation, useQueryClient } from "react-query";

interface FriendItemsType {
  id: number;
  title: string;
  onClick: () => void;
}

function useFriendMenu(friendId: string) {
  const client = useQueryClient();

  const hideFriend = useMutation({
    mutationFn: async (friendId: string) =>
      await friendApis.hideFriend(friendId),
    onSuccess: async () =>
      await client.refetchQueries({ queryKey: QUERY_KEYS.GET_MY_FRIENDS }),
  });

  const blockFriend = useMutation({
    mutationFn: async (friendId: string) =>
      await friendApis.blockFriend(friendId),
    onSuccess: async () =>
      await client.refetchQueries({ queryKey: QUERY_KEYS.GET_MY_FRIENDS }),
  });

  const FRIEND_MENU_ITEMS: FriendItemsType[] = [
    { id: 0, title: "채팅하기", onClick: () => console.log(friendId) },
    { id: 1, title: "프로필 보기", onClick: () => console.log(friendId) },
    { id: 2, title: "숨김", onClick: () => hideFriend.mutate(friendId) },
    { id: 3, title: "차단", onClick: () => blockFriend.mutate(friendId) },
  ];

  return {
    models: {
      FRIEND_MENU_ITEMS,
    },
  };
}

export default useFriendMenu;
