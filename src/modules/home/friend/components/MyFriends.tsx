import Loading from "modules/common/components/Loading";
import useMyFriends from "./MyFriends.hook";
import { MyFriendsDiv, MyFriendsWrapper } from "./MyFriends.style";
import FriendProfileThumbnail from "./thumbnail/FriendProfileThumbnail";
import ToggleBox from "./ToggleBox/ToggleBox";

function MyFriends() {
  const { models } = useMyFriends();
  const { data, isLoading, error } = models;

  if (isLoading) return <Loading />;
  if (error) return null;

  return (
    <MyFriendsWrapper>
      <ToggleBox title={`친구 ${data?.length}`}>
        <MyFriendsDiv>
          {data?.map((friend, index) => (
            <FriendProfileThumbnail key={index} friend={friend} />
          ))}
        </MyFriendsDiv>
      </ToggleBox>
    </MyFriendsWrapper>
  );
}

export default MyFriends;
