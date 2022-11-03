import { useMemo } from "react";
import ProfileBody from "./components/ProfileBody";
import ProfileFooter from "./components/ProfileFooter";
import ProfileHeader from "./components/ProfileHeader";
import useProfileCardContainer from "./ProfileCardContainer.hook";
import { ProfileCardContainerWrapper } from "./ProfileCardContainer.style";

/**
 * 유저를 클릭하면 나타나는 프로필 카드입니다.
 */
function ProfileCardContainer() {
  const { models, operations } = useProfileCardContainer();
  const { state, isEditMode } = models;
  const { activateEditMode, inActivateEditMode, saveEditMode, onTextCange } =
    operations;

  const { username, summary } = state;

  const MemorizedProfileCardContainer = useMemo(
    () => (
      <ProfileCardContainerWrapper>
        <ProfileHeader
          isEditMode={isEditMode}
          inActivateEditMode={inActivateEditMode}
          saveEditMode={saveEditMode}
        />
        <ProfileBody
          username={username}
          summary={summary}
          isEditMode={isEditMode}
          onTextCange={onTextCange}
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

export default ProfileCardContainer;
