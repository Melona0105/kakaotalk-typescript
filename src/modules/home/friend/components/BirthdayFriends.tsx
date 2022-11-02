import { BirthdayFriendsWrapper } from "./BirthdayFriends.style";
import FriendProfileThumbnail from "./thumbnail/FriendProfileThumbnail";
import ToggleBox from "./ToggleBox/ToggleBox";

interface BirthdayFriendsProps {
  // TODO: 이후 유저 데이터 타입 정의해야합니다.
  birthdayFirends: any[];
}

function BirthdayFriends({ birthdayFirends }: BirthdayFriendsProps) {
  // 생일인 친구가 존재하지 않을 경우에는 아무것도 렌더링하지 않습니다.
  if (birthdayFirends.length === 0) {
    return null;
  }

  return (
    <BirthdayFriendsWrapper>
      <ToggleBox title="생일인친구">
        <FriendProfileThumbnail birthdayFirends={birthdayFirends} />
      </ToggleBox>
    </BirthdayFriendsWrapper>
  );
}

export default BirthdayFriends;
