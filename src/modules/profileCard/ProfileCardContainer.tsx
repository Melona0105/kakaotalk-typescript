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
  const { isEditMode } = models;
  const { handleIsEditMode, saveEditMode } = operations;

  return (
    <ProfileCardContainerWrapper>
      <ProfileHeader
        isEditMode={isEditMode}
        cancleEditMode={handleIsEditMode}
        saveEditMode={saveEditMode}
      />
      <ProfileBody isEditMode={isEditMode} />
      <ProfileFooter
        isEditMode={isEditMode}
        onEditProfilePress={handleIsEditMode}
      />
    </ProfileCardContainerWrapper>
  );
}

export default ProfileCardContainer;
