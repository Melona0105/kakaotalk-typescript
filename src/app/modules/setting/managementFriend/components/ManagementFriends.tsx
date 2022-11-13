import FriendProfileThumbnail from "app/modules/common/components/thumbnail/FriendProfileThumbnail";
import { FriendType } from "domain/interfaces/apiInterface";
import {
  ManagementFriendsEmptyText,
  ManagementFriendsWrapper,
} from "./ManagementFriends.style";

interface ManagementFriendsProps {
  friends?: FriendType[];
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
