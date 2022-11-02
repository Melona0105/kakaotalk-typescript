import {
  BirthdayFriendsText,
  BirthdayFriendsWrapper,
} from "./BirthdayFriends.style";
import FriendProfileThumbnail from "./FriendProfileThumbnail";

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
      <BirthdayFriendsText>생일인 친구</BirthdayFriendsText>
      <FriendProfileThumbnail birthdayFirends={birthdayFirends} />
    </BirthdayFriendsWrapper>
  );
}

export default BirthdayFriends;
