import defaultImage from "assets/images/friend_default_image.png";
import { useAuthContext } from "modules/common/providers/AuthProvider";
import Melon from "modules/home/common/components/Melon";
import useMyProfileThumbnail from "./MyProfileThumbnail.hook";
import {
  MyProfileThumbnailDiv,
  MyProfileThumbnailImage,
  MyProfileThumbnailName,
  MyProfileThumbnailWrapper,
} from "./MyProfileThumbnail.style";

/**
 * 친구목록중, 내 프로필 컴포넌트입니다.
 */
function MyProfileThumbnail() {
  const { userProfile } = useAuthContext();
  const { operations } = useMyProfileThumbnail();
  const { onProfileCardPress } = operations;

  return (
    <MyProfileThumbnailWrapper onClick={onProfileCardPress}>
      <MyProfileThumbnailImage src={userProfile?.avatarURL || defaultImage} />
      <MyProfileThumbnailDiv>
        <MyProfileThumbnailName>{userProfile?.username}</MyProfileThumbnailName>
        <Melon
          title="엄마의 프로필 사진은 왜 꽃밭일까 - 김진호"
          onClick={() => console.log(1)}
        />
      </MyProfileThumbnailDiv>
    </MyProfileThumbnailWrapper>
  );
}

export default MyProfileThumbnail;
