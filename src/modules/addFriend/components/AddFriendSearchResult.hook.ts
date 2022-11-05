import friendApis from "apis/friendApis";
import { useState } from "react";

function useAddFriendSearchResult() {
  // 친구추가 상태를 관리하는 상태입니다.
  const [isAdded, setIsAdded] = useState(false);
  // 업데이트 중에 버튼 상태를 비활성화하기위한 상태입니다.
  const [isUpdating, setIsUpdating] = useState(false);

  async function onAddFriendClick(friendId: string) {
    if (!isUpdating) {
      setIsUpdating(true);
      await friendApis.addFriend(friendId);
      setIsAdded(true);
      setIsUpdating(false);
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
