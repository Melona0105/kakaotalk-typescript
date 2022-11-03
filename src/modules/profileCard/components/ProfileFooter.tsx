import useProfileFooter from "./ProfileFooter.hook";
import {
  ProfileFooterDiv,
  ProfileFooterImage,
  ProfileFooterWrapper,
} from "./ProfileFooter.style";

function ProfileFooter() {
  const { models } = useProfileFooter();
  const { FOOTER_ITEMS } = models;

  return (
    <ProfileFooterWrapper>
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
