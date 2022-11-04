import { ChangeEvent, useState } from "react";

function useAddFriendBody() {
  const [keyword, setKeyword] = useState<string>("");

  function onKeywordChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setKeyword(value);
  }

  function onClearInputClick() {
    setKeyword("");
  }

  return {
    models: {
      keyword,
    },
    operations: {
      onKeywordChange,
      onClearInputClick,
    },
  };
}

export default useAddFriendBody;
