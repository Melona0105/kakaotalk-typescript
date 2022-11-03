import ProfileHeader from "./components/ProfileHeader";
import { ProfileCardContainerWrapper } from "./ProfileCardContainer.style";

/**
 * 유저를 클릭하면 나타나는 프로필 카드입니다.
 */
function ProfileCardContainer() {
  return (
    <ProfileCardContainerWrapper>
      <ProfileHeader />
    </ProfileCardContainerWrapper>
  );
}

export default ProfileCardContainer;