import closeIcon from "assets/icons/button_close.png";
import settingIcon from "assets/icons/button_setting.png";
import { useNavigate } from "react-router-dom";
import {
  ProfileHeaderImage,
  ProfileHeaderTextButton,
  ProfileHeaderWrapper,
  ProfileHedaerImageDiv,
} from "./ProfileHeader.style";

interface ProfileHeaderProps {
  isEditMode: boolean;
  cancleEditMode: () => void;
  saveEditMode: () => void;
}

function ProfileHeader({
  isEditMode,
  cancleEditMode,
  saveEditMode,
}: ProfileHeaderProps) {
  const natigate = useNavigate();

  return (
    <ProfileHeaderWrapper>
      {isEditMode ? (
        <ProfileHeaderTextButton onClick={cancleEditMode}>
          취소
        </ProfileHeaderTextButton>
      ) : (
        <ProfileHeaderImage src={closeIcon} onClick={() => natigate(-1)} />
      )}
      {isEditMode ? (
        <ProfileHeaderTextButton onClick={saveEditMode}>
          완료
        </ProfileHeaderTextButton>
      ) : (
        <ProfileHedaerImageDiv onClick={() => console.log("세팅")}>
          <ProfileHeaderImage src={settingIcon} />
        </ProfileHedaerImageDiv>
      )}
    </ProfileHeaderWrapper>
  );
}

export default ProfileHeader;
