import { useServiceContext } from "app/common/providers/ServiceProvider";
import { QUERY_KEYS } from "app/libs/reactQuery/queryKeys";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useQuery } from "react-query";

function useAddFriendBody() {
  const { friendService } = useServiceContext();
  // 검색어의 상태를 관리합니다.
  const [keyword, setKeyword] = useState<string>("");
  // 검색 결과를 보여주는 여부를 관리합니다.
  const [showResult, setShowResult] = useState<boolean>(false);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [QUERY_KEYS.PROFILE.GET_USER_PROFILE, keyword],
    queryFn: async () => await friendService.getFriendByEmail(keyword),
    enabled: false,
    onSuccess: () => setShowResult(true),
  });

  function onKeywordChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setKeyword(value);
  }

  function onClearInputClick() {
    setKeyword("");
  }

  async function onKeyDown({ key }: KeyboardEvent<HTMLInputElement>) {
    if (keyword && key === "Enter") {
      refetch();
    }
  }

  return {
    models: {
      data,
      isLoading,
      error,
      keyword,
      showResult,
    },
    operations: {
      onKeywordChange,
      onClearInputClick,
      onKeyDown,
    },
  };
}

export default useAddFriendBody;
