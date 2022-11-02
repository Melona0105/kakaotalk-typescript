import { MyFriendsDiv, MyFriendsWrapper } from "./MyFriends.style";
import FriendProfileThumbnail from "./thumbnail/FriendProfileThumbnail";
import ToggleBox from "./ToggleBox/ToggleBox";

function MyFriends() {
  const sampleFriends = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <MyFriendsWrapper>
      <ToggleBox title={`친구 ${sampleFriends.length}`}>
        <MyFriendsDiv>
          {sampleFriends.map((friend, index) => (
            <FriendProfileThumbnail key={index} />
          ))}
        </MyFriendsDiv>
      </ToggleBox>
    </MyFriendsWrapper>
  );
}

export default MyFriends;
