import { QUERY_KEYS } from "app/libs/reactQuery/queryKeys";
import { useProfileContext } from "app/modules/common/providers/ProfileProvider";
import friendApis from "data/apis/friendApis";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

function useAddFriendSearchResult() {
  const { userProfile } = useProfileContext();
  const client = useQueryClient();
  // 업데이트 중에 버튼 상태를 비활성화하기위한 상태입니다.
  const [isUpdating, setIsUpdating] = useState(false);

  const { mutate } = useMutation({
    mutationFn: async (friend_id: string) => {
      setIsUpdating(true);
      await friendApis.addFriend(friend_id);
    },
    // 뮤테이션에 성공하고나면, 업데이트 상태를 종료합니다.
    onSuccess: () => {
      setIsUpdating(false);
      client.refetchQueries({
        queryKey: [QUERY_KEYS.FRIEND.GET_MY_FRIENDS, userProfile?.id],
      });
      client.refetchQueries({
        queryKey: [QUERY_KEYS.PROFILE.GET_USER_PROFILE, userProfile?.id],
      });
    },
    onError: (err) => console.log(err),
  });

  async function onAddFriendClick(friend_id: string) {
    if (!isUpdating) {
      mutate(friend_id);
    }
  }

  return {
    operations: {
      onAddFriendClick,
    },
  };
}

export default useAddFriendSearchResult;
