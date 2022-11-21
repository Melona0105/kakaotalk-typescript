import { ChangeEvent, useState } from "react";

/**
 * 검색어의 상태를 관리하는 훅입니다.
 */
function useManageSearch() {
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  function onSearchKeywordChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchKeyword(e.target.value);
  }

  function onClearSearchKewordClick() {
    setSearchKeyword("");
  }

  return {
    models: {
      searchKeyword,
    },
    operations: {
      onSearchKeywordChange,
      onClearSearchKewordClick,
    },
  };
}

export default useManageSearch;
