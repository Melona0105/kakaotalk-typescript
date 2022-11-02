import {
  MyProfileThumbnailDiv,
  MyProfileThumbnailImage,
  MyProfileThumbnailName,
  MyProfileThumbnailWrapper,
} from "./MyProfileThumbnail.style";
import sampleImage from "assets/images/profile_sample_image.jpeg";
import { useAuthContext } from "modules/common/providers/AuthProvider";
import Melon from "modules/home/common/components/Melon";
/**
 * 친구목록중, 내 프로필 컴포넌트입니다.
 */
function MyProfileThumbnail() {
  const { userProfile } = useAuthContext();

  return (
    <MyProfileThumbnailWrapper>
      <MyProfileThumbnailImage src={sampleImage} />
      <MyProfileThumbnailDiv>
        <MyProfileThumbnailName>{userProfile?.username}</MyProfileThumbnailName>
        <Melon />
      </MyProfileThumbnailDiv>
    </MyProfileThumbnailWrapper>
  );
}

export default MyProfileThumbnail;
