import { ProfileCardStateType } from "../ProfileCardContainer.interface";

function useProfileBody(
  onTextCange: (
    payload: Pick<ProfileCardStateType, "username" | "summary">
  ) => void,
  username?: string,
  summary?: string
) {
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

  return {
    models: {
      PROFILE_ITEMS,
    },
  };
}

export default useProfileBody;
