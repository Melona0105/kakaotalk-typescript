import useProfileFooter from "./ProfileFooter.hook";
import {
  ProfileFooterDiv,
  ProfileFooterImage,
  ProfileFooterWrapper,
} from "./ProfileFooter.style";

interface ProfileFooterProps {
  isEditMode?: boolean;
  isMyProfile?: boolean;
  activateEditMode?: () => void;
}

function ProfileFooter({
  isEditMode,
  isMyProfile = true,
  activateEditMode,
}: ProfileFooterProps) {
  const { models } = useProfileFooter(isMyProfile, activateEditMode);
  const { footerItems } = models;

  return (
    <ProfileFooterWrapper showBorderTop={!isEditMode}>
      {footerItems.map((item) => (
        <ProfileFooterDiv key={item.id} onClick={item.onClick}>
          <ProfileFooterImage src={item.src} />
          <div>{item.title}</div>
        </ProfileFooterDiv>
      ))}
    </ProfileFooterWrapper>
  );
}

export default ProfileFooter;
