import useProfileFooter from "./ProfileFooter.hook";
import {
  ProfileFooterDiv,
  ProfileFooterImage,
  ProfileFooterWrapper,
} from "./ProfileFooter.style";

interface ProfileFooterProps {
  isEditMode: boolean;
  activateEditMode: () => void;
}

function ProfileFooter({ isEditMode, activateEditMode }: ProfileFooterProps) {
  const { models } = useProfileFooter(activateEditMode);
  const { FOOTER_ITEMS } = models;

  return (
    <ProfileFooterWrapper showBorderTop={!isEditMode}>
      {FOOTER_ITEMS.map((item) => (
        <ProfileFooterDiv key={item.id} onClick={item.onClick}>
          <ProfileFooterImage src={item.src} />
          <div>{item.title}</div>
        </ProfileFooterDiv>
      ))}
    </ProfileFooterWrapper>
  );
}

export default ProfileFooter;
