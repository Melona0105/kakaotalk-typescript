import closeIcon from "assets/icons/button_close.png";
import settingIcon from "assets/icons/button_setting.png";
import { useNavigate } from "react-router-dom";
import {
  ProfileHeaderImage,
  ProfileHeaderWrapper,
  ProfileHedaerImageDiv,
} from "./ProfileHeader.style";

function ProfileHeader() {
  const natigate = useNavigate();

  return (
    <ProfileHeaderWrapper>
      <ProfileHeaderImage src={closeIcon} onClick={() => natigate(-1)} />
      <ProfileHedaerImageDiv onClick={() => console.log("세팅")}>
        <ProfileHeaderImage src={settingIcon} />
      </ProfileHedaerImageDiv>
    </ProfileHeaderWrapper>
  );
}

export default ProfileHeader;
