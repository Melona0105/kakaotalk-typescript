import closeIcon from "assets/icons/button_close.png";
import { useNavigate } from "react-router-dom";
import {
  ProfileHeaderImage,
  ProfileHeaderTextButton,
  ProfileHeaderWrapper,
} from "./ProfileHeader.style";

interface ProfileHeaderProps {
  isEditMode?: boolean;
  inActivateEditMode?: () => void;
  updateMyUserProfile?: () => void;
}

function ProfileHeader({
  isEditMode,
  inActivateEditMode,
  updateMyUserProfile,
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
      {isEditMode && (
        <ProfileHeaderTextButton onClick={updateMyUserProfile}>
          완료
        </ProfileHeaderTextButton>
      )}
    </ProfileHeaderWrapper>
  );
}

export default ProfileHeader;
