import BirthdayFriends from "./BirthdayFriends";
import { FriendContainerBodyWrapper } from "./FriendContainerBody.style";
import MyFriends from "./MyFriends";
import MyProfileThumbnail from "./thumbnail/MyProfileThumbnail";

function FriendContainerBody() {
  return (
    <FriendContainerBodyWrapper>
      <MyProfileThumbnail />
      <BirthdayFriends birthdayFirends={[1]} />
      <MyFriends />
    </FriendContainerBodyWrapper>
  );
}

export default FriendContainerBody;
