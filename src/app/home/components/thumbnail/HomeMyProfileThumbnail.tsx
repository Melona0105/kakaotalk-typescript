import { useProfileContext } from "app//common/providers/ProfileProvider";
import Melon from "app//home/common/components/Melon";
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
  const { userProfile } = useProfileContext();
  const { operations } = useHomeMyProfileThumbnail();
  const { onProfileCardPress } = operations;

  return (
    <HomeMyProfileThumbnailWrapper onClick={onProfileCardPress}>
      <HomeMyProfileThumbnailImage
        src={userProfile?.avatarURL || defaultImage}
      />
      <HomeMyProfileThumbnailDiv>
        <HomeMyProfileThumbnailName>
          {userProfile?.username}
        </HomeMyProfileThumbnailName>
      </HomeMyProfileThumbnailDiv>
    </HomeMyProfileThumbnailWrapper>
  );
}

export default HomeMyProfileThumbnail;
