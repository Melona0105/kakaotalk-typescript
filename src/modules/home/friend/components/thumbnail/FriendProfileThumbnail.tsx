import birthdayDefaultImage from "assets/images/friend_birthday_default_image.png";
import defaultImage from "assets/images/friend_default_image.png";
import { FlexDiv } from "modules/common/styles/commonStyles";
import Melon from "modules/home/common/components/Melon";
import { FriendType } from "utils/interfaces/apiInterface";
import {
  FriendProfileThumbnailCount,
  FriendProfileThumbnailImage,
  FriendProfileThumbnailText,
  FriendProfileThumbnailWrapper,
} from "./FriendProfileThumbnail.style";

interface FriendProfileThumbnailProps {
  friend?: FriendType;
  birthdayFirends?: any[];
}

/**
 * birthday firends props에 따라서 다른 친구들을 렌더링합니다.
 */
function FriendProfileThumbnail({
  friend,
  birthdayFirends,
}: FriendProfileThumbnailProps) {
  return (
    <FriendProfileThumbnailWrapper>
      <FlexDiv>
        <FriendProfileThumbnailImage
          src={
            birthdayFirends
              ? birthdayDefaultImage
              : friend?.avatarURL || defaultImage
          }
        />
        <FriendProfileThumbnailText showBirthDay={!!birthdayFirends}>
          {birthdayFirends ? "친구의 생일을 확인해보세요!" : friend?.username}
          {birthdayFirends && (
            <FriendProfileThumbnailCount>
              {birthdayFirends.length}
            </FriendProfileThumbnailCount>
          )}
        </FriendProfileThumbnailText>
      </FlexDiv>
      {!birthdayFirends && (
        <Melon title="흐르는 고등어" onClick={() => console.log("고등어!")} />
      )}
    </FriendProfileThumbnailWrapper>
  );
}

export default FriendProfileThumbnail;
