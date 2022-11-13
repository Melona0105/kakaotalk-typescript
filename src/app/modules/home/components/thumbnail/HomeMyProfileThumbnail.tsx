import { useAuthContext } from "app/modules/common/providers/AuthProvider";
import Melon from "app/modules/home/common/components/Melon";
import defaultImage from "assets/images/friend_default_image.png";
import useHomeMyProfileThumbnail from "./HomeMyProfileThumbnail.hook";
import {
  HomeMyProfileThumbnailDiv,
  HomeMyProfileThumbnailImage,
  HomeMyProfileThumbnailName,
  HomeMyProfileThumbnailWrapper,
} from "./HomeMyProfileThumbnail.style";

/**
 * 친구목록중, 내 프로필 컴포넌트입니다.
 */
function HomeMyProfileThumbnail() {
  const { userProfile } = useAuthContext();
  const { operations } = useHomeMyProfileThumbnail();
  const { onProfileCardPress } = operations;

  return (
    <HomeMyProfileThumbnailWrapper onClick={onProfileCardPress}>
      <HomeMyProfileThumbnailImage
        src={userProfile?.avatarURL || defaultImage}
      />
      <HomeMyProfileThumbnailDiv>
        <HomeMyProfileThumbnailName>{userProfile?.username}</HomeMyProfileThumbnailName>
        <Melon
          title="엄마의 프로필 사진은 왜 꽃밭일까 - 김진호"
          onClick={() => console.log(1)}
        />
      </HomeMyProfileThumbnailDiv>
    </HomeMyProfileThumbnailWrapper>
  );
}

export default HomeMyProfileThumbnail;
