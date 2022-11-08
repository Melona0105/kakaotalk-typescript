import BirthdayFriends from "./BirthdayFriends";
import { FriendContainerBodyWrapper } from "./FriendContainerBody.style";
import MyFriends from "./MyFriends";
import MyProfileThumbnail from "./thumbnail/MyProfileThumbnail";

interface FriendContainerBodyProps {
  searchKeyword: string;
}

function FriendContainerBody({ searchKeyword }: FriendContainerBodyProps) {
  return (
    <FriendContainerBodyWrapper>
      <MyProfileThumbnail />
      <BirthdayFriends birthdayFirends={[]} />
      <MyFriends searchKeyword={searchKeyword} />
    </FriendContainerBodyWrapper>
  );
}

export default FriendContainerBody;
