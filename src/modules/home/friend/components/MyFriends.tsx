import Loading from "modules/common/components/Loading";
import useMyFriends from "./MyFriends.hook";
import { MyFriendsDiv, MyFriendsWrapper } from "./MyFriends.style";
import FriendProfileThumbnail from "./thumbnail/FriendProfileThumbnail";
import ToggleBox from "./ToggleBox/ToggleBox";

interface MyFriendsProps {
  searchKeyword: string;
}

function MyFriends({ searchKeyword }: MyFriendsProps) {
  const { models } = useMyFriends(searchKeyword);
  const { data, isLoading, error } = models;

  if (isLoading) return <Loading />;
  if (error) return null;

  return (
    <MyFriendsWrapper>
      <ToggleBox title={`친구 ${data?.length}`} initialState>
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
