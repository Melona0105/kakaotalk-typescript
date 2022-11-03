import { useRef } from "react";
import { ProfileCardStateType } from "../ProfileCardContainer.interface";

function useProfileBody(
  onTextCange: (
    payload: Pick<ProfileCardStateType, "username" | "summary">
  ) => void,
  username?: string,
  summary?: string
) {
  const imageInputRef = useRef<HTMLInputElement>(null);

  const PROFILE_ITEMS = [
    {
      id: 0,
      value: username,
      placeholder: "",
      onChange: (text: string) => onTextCange({ username: text }),
    },
    {
      id: 1,
      value: summary,
      placeholder: "상태메시지를 입력해 주세요.",
      onChange: (text: string) => onTextCange({ summary: text }),
    },
  ];

  /**
   * 이미지를 클릭하면 input창을 활성화하는 함수입니다.
   */
  function onImageInputClick() {
    if (imageInputRef.current) {
      imageInputRef.current?.click();
    }
  }

  return {
    refs: {
      imageInputRef,
    },
    models: {
      PROFILE_ITEMS,
    },
    operations: {
      onImageInputClick,
    },
  };
}

export default useProfileBody;
