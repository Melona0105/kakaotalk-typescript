import Loading from "modules/common/components/Loading";
import FriendProfileThumbnail from "modules/common/components/thumbnail/FriendProfileThumbnail";
import useCreateChattingFriends from "./CreateChattingFriends.hook";
import { CreateChattingFriendsWrapper } from "./CreateChattingFriends.style";

interface CreateChattingFriendsProps {
  selectedFriendId: string;
  searchKeyword: string;
  onFriendSelect: (friendId: string) => void;
}

function CreateChattingFriends({
  selectedFriendId,
  searchKeyword,
  onFriendSelect,
}: CreateChattingFriendsProps) {
  const { models } = useCreateChattingFriends(searchKeyword);
  const { data, isLoading, isError } = models;

  if (isLoading) return <Loading />;
  if (isError) return null;

  return (
    <CreateChattingFriendsWrapper>
      {data?.map((friend) => (
        <FriendProfileThumbnail
          key={friend.id}
          friend={friend}
          selected={friend.id === selectedFriendId}
          onFriendSelect={onFriendSelect}
        />
      ))}
    </CreateChattingFriendsWrapper>
  );
}

export default CreateChattingFriends;
