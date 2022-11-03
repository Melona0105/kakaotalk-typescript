import profileDefault from "assets/images/profile_default.png";
import { ProfileBodyImage, ProfileBodyWrapper } from "./ProfileBody.style";

function ProfileBody() {
  return (
    <ProfileBodyWrapper>
      <ProfileBodyImage src={profileDefault} />
      <div>박덕원</div>
    </ProfileBodyWrapper>
  );
}

export default ProfileBody;
