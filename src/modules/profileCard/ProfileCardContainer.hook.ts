import { QUERY_KEYS } from "libs/reactQuery/queryKeys";
import { useAuthContext } from "modules/common/providers/AuthProvider";
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import userService from "services/userService";
import { ProfileCardStateType } from "./ProfileCardContainer.interface";

function useProfileCardContainer() {
  const client = useQueryClient();
  const { userProfile } = useAuthContext();
  const [state, setState] = useState<ProfileCardStateType>({
    username: userProfile?.username,
    summary: userProfile?.summary,
  });
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [prevState, setPrevState] = useState<ProfileCardStateType>(state);

  const { mutate } = useMutation({
    mutationFn: async () => {
      const { username, summary } = state;
      userService.updateMyUserProfile({ username, summary });
    },
    onSuccess: () =>
      client.refetchQueries({ queryKey: [QUERY_KEYS.GET_MY_USER_PROFILE] }),
  });

  /**
   * 현재 로그인한 유저의 정보로 현재 상태를 바꿔줍니다.
   */
  useEffect(() => {
    if (userProfile) {
      setState({
        username: userProfile?.username,
        summary: userProfile?.summary,
      });
    }
  }, [userProfile]);

  /**
   * 프로필 수정 활성화
   */
  function activateEditMode() {
    // 활성화할경우, 현재 상태를 저장합니다.
    setPrevState(state);
    setIsEditMode(true);
  }

  /**
   * 프로필 수정 비활성화
   */
  function inActivateEditMode() {
    // 취소할경우 기존 상태로 변경합니다.
    setState(prevState);
    setIsEditMode(false);
  }

  /**
   * 저장
   */
  async function saveEditMode() {
    mutate();
    setIsEditMode(false);
  }

  function onTextCange(
    payload: Pick<ProfileCardStateType, "username" | "summary">
  ) {
    setState((prev) => ({ ...prev, ...payload }));
  }

  return {
    models: {
      state,
      isEditMode,
    },
    operations: {
      activateEditMode,
      inActivateEditMode,
      saveEditMode,
      onTextCange,
    },
  };
}

export default useProfileCardContainer;
