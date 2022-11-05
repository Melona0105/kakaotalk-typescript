import friendApis from "apis/friendApis";
import { QUERY_KEYS } from "libs/reactQuery/queryKeys";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

function useAddFriendSearchResult() {
  const client = useQueryClient();
  // 친구추가 상태를 관리하는 상태입니다.
  const [isAdded, setIsAdded] = useState(false);
  // 업데이트 중에 버튼 상태를 비활성화하기위한 상태입니다.
  const [isUpdating, setIsUpdating] = useState(false);

  const { mutate } = useMutation({
    mutationFn: async (friendId: string) => {
      setIsUpdating(true);
      await friendApis.addFriend(friendId);
    },
    // 뮤테이션에 성공하고나면, 업데이트 상태를 종료합니다.
    onSuccess: () => {
      setIsAdded(true);
      setIsUpdating(false);
      client.refetchQueries({ queryKey: [QUERY_KEYS.GET_MY_FRIENDS] });
    },
    onError: (err) => console.log(err),
  });

  async function onAddFriendClick(friendId: string) {
    if (!isUpdating) {
      mutate(friendId);
    }
  }

  return {
    models: {
      isAdded,
    },
    operations: {
      onAddFriendClick,
    },
  };
}

export default useAddFriendSearchResult;
