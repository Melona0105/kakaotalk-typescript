import FriendProfileThumbnail from "modules/common/components/thumbnail/FriendProfileThumbnail";
import { HomeBirthdayFriendsWrapper } from "./HomeBirthdayFriends.style";
import HomeToggleBox from "./ToggleBox/HomeToggleBox";

interface HomeBirthdayFriendsProps {
  // TODO: 이후 유저 데이터 타입 정의해야합니다.
  birthdayFirends: any[];
}

function BirthdayFriends({ birthdayFirends }: HomeBirthdayFriendsProps) {
  // 생일인 친구가 존재하지 않을 경우에는 아무것도 렌더링하지 않습니다.
  if (birthdayFirends.length === 0) {
    return null;
  }

  return (
    <HomeBirthdayFriendsWrapper>
      <HomeToggleBox title="생일인 친구" initialState>
        <FriendProfileThumbnail birthdayFirends={birthdayFirends} />
      </HomeToggleBox>
    </HomeBirthdayFriendsWrapper>
  );
}

export default BirthdayFriends;
