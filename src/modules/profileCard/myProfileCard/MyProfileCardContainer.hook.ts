import userApis from "apis/userApis";
import imageCompression from "browser-image-compression";
import { QUERY_KEYS } from "libs/reactQuery/queryKeys";
import { useAuthContext } from "modules/common/providers/AuthProvider";
import { ChangeEvent, useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { MyProfileCardStateType } from "./MyProfileCardContainer.interface";

function useMyProfileCardContainer() {
  const client = useQueryClient();
  const { userProfile } = useAuthContext();
  const [state, setState] = useState<MyProfileCardStateType>({
    username: userProfile?.username,
    summary: userProfile?.summary,
    avatarURL: userProfile?.avatarURL,
    avatarState: null,
  });
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [prevState, setPrevState] = useState<MyProfileCardStateType>(state);

  /**
   * 입력한 프로필을 서버에 전송합니다.
   */
  const updateMyUserProfile = useMutation({
    mutationFn: async () => {
      let compressedFile;
      const { username, summary, avatarState } = state;

      // 이미지가 존재할 경우, 이미지를 압축합니다.
      if (avatarState) {
        compressedFile = await imageCompression(avatarState, {
          maxSizeMB: 0.3,
          maxWidthOrHeight: 500,
        });
      }

      await userApis.updateMyUserProfile({
        username,
        summary,
        compressedFile,
      });
    },
    onSuccess: () => {
      client.refetchQueries({ queryKey: [QUERY_KEYS.GET_MY_USER_PROFILE] });
      setIsEditMode(false);
    },
    onError: (err) => console.log(err),
  });

  /**
   * 현재 로그인한 유저의 정보로 현재 상태를 바꿔줍니다.
   */
  useEffect(() => {
    if (userProfile) {
      setState({
        ...state,
        username: userProfile?.username,
        summary: userProfile?.summary,
        avatarURL: userProfile?.avatarURL,
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

  function onTextCange(
    payload: Pick<MyProfileCardStateType, "username" | "summary">
  ) {
    setState((prev) => ({ ...prev, ...payload }));
  }

  /**
   * 프로필 사진을 변화시키는 함수입니다.
   */
  function onAvatarChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setState({ ...state, avatarState: file });
    }
  }

  return {
    models: {
      state,
      isEditMode,
    },
    operations: {
      activateEditMode,
      inActivateEditMode,
      updateMyUserProfile: updateMyUserProfile.mutate,
      onTextCange,
      onAvatarChange,
    },
  };
}

export default useMyProfileCardContainer;
