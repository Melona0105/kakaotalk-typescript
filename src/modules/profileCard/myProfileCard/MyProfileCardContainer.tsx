import { useMemo } from "react";
import useMyProfileCardContainer from "./MyProfileCardContainer.hook";
import { ProfileCardContainerWrapper } from "../common/utils/commonStyle";
import ProfileBody from "../components/ProfileBody";
import ProfileFooter from "../components/ProfileFooter";
import ProfileHeader from "../components/ProfileHeader";

/**
 * 유저를 클릭하면 나타나는 프로필 카드입니다.
 */
function MyProfileCardContainer() {
  const { models, operations } = useMyProfileCardContainer();
  const { state, isEditMode } = models;
  const {
    activateEditMode,
    inActivateEditMode,
    updateMyUserProfile,
    onTextCange,
    onAvatarChange,
  } = operations;

  const { username, summary, avatarURL, avatarState } = state;

  const MemorizedProfileCardContainer = useMemo(
    () => (
      <ProfileCardContainerWrapper>
        <ProfileHeader
          isEditMode={isEditMode}
          inActivateEditMode={inActivateEditMode}
          updateMyUserProfile={updateMyUserProfile}
        />
        <ProfileBody
          username={username}
          summary={summary}
          avatarURL={avatarURL}
          avatarState={avatarState}
          isEditMode={isEditMode}
          onTextCange={onTextCange}
          onAvatarChange={onAvatarChange}
        />
        <ProfileFooter
          isEditMode={isEditMode}
          activateEditMode={activateEditMode}
        />
      </ProfileCardContainerWrapper>
    ),
    [state, isEditMode]
  );
  return MemorizedProfileCardContainer;
}

export default MyProfileCardContainer;
