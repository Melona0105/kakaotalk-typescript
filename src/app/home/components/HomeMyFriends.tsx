import Loading from "app/common/components/Loading";
import FriendProfileThumbnail from "app/common/components/thumbnail/FriendProfileThumbnail";
import useHomeMyFriends from "./HomeMyFriends.hook";
import { HomeMyFriendsWrapper } from "./HomeMyFriends.style";
import HomeToggleBox from "./ToggleBox/HomeToggleBox";

interface MyFriendsProps {
  searchKeyword: string;
}

function HomeMyFriends({ searchKeyword }: MyFriendsProps) {
  const { models } = useHomeMyFriends(searchKeyword);
  const { data, isLoading, error } = models;

  if (isLoading) return <Loading />;
  if (error) return null;

  return (
    <HomeMyFriendsWrapper>
      <HomeToggleBox title={`친구 ${data?.length}`} initialState>
        {data?.map((friend, index) => (
          <FriendProfileThumbnail key={index} friend={friend} />
        ))}
      </HomeToggleBox>
    </HomeMyFriendsWrapper>
  );
}

export default HomeMyFriends;
