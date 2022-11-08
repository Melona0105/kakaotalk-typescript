import { ChangeEvent, useState } from "react";

function useFriendContainer() {
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

export default useFriendContainer;
