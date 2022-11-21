import FriendProfileThumbnail from "app/common/components/thumbnail/FriendProfileThumbnail";
import { Friend } from "domain/entities/friendEntity";
import {
  ManagementFriendsEmptyText,
  ManagementFriendsWrapper,
} from "./ManagementFriends.style";

interface ManagementFriendsProps {
  friends?: Friend[];
}

function ManagementFriends({ friends }: ManagementFriendsProps) {
  return (
    <ManagementFriendsWrapper>
      {!friends?.length ? (
        <ManagementFriendsEmptyText>
          친구가 없습니다.
        </ManagementFriendsEmptyText>
      ) : (
        friends.map((friend) => (
          <FriendProfileThumbnail
            key={friend.id}
            friend={friend}
            showManagementMenu
          />
        ))
      )}
    </ManagementFriendsWrapper>
  );
}

export default ManagementFriends;
