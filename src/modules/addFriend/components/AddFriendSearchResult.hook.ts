import friendApis from "apis/friendApis";
import { QUERY_KEYS } from "libs/reactQuery/queryKeys";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

function useAddFriendSearchResult() {
  const client = useQueryClient();
  // 업데이트 중에 버튼 상태를 비활성화하기위한 상태입니다.
  const [isUpdating, setIsUpdating] = useState(false);

  const { mutate } = useMutation({
    mutationFn: async (friendId: string) => {
      setIsUpdating(true);
      await friendApis.addFriend(friendId);
    },
    // 뮤테이션에 성공하고나면, 업데이트 상태를 종료합니다.
    onSuccess: () => {
      setIsUpdating(false);
      client.refetchQueries({ queryKey: QUERY_KEYS.GET_MY_FRIENDS });
      client.refetchQueries({ queryKey: QUERY_KEYS.GET_USER_PROFILE });
    },
    onError: (err) => console.log(err),
  });

  async function onAddFriendClick(friendId: string) {
    if (!isUpdating) {
      mutate(friendId);
    }
  }

  return {
    operations: {
      onAddFriendClick,
    },
  };
}

export default useAddFriendSearchResult;
