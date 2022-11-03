import closeIcon from "assets/icons/button_close.png";
import settingIcon from "assets/icons/button_setting.png";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  ProfileHeaderImage,
  ProfileHeaderTextButton,
  ProfileHeaderWrapper,
  ProfileHedaerImageDiv,
} from "./ProfileHeader.style";

interface ProfileHeaderProps {
  isEditMode: boolean;
  inActivateEditMode: () => void;
  saveEditMode: () => void;
}

function ProfileHeader({
  isEditMode,
  inActivateEditMode,
  saveEditMode,
}: ProfileHeaderProps) {
  const natigate = useNavigate();

  return (
    <ProfileHeaderWrapper>
      {isEditMode ? (
        <ProfileHeaderTextButton onClick={inActivateEditMode}>
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
