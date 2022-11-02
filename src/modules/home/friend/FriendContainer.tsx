import InnerContainerHeader from "../common/components/InnerContainerHeader";
import { HomeInnerContainerProps } from "../common/interfaces/homeInterface";
import { InnerContaienrWrapper } from "../common/styles/homeStyles";
import BirthdayFriends from "./components/BirthdayFriends";
import MyProfileThumbnail from "./components/MyProfileThumbnail";

function FriendContainer({ tabIndex }: HomeInnerContainerProps) {
  return (
    <InnerContaienrWrapper>
      <InnerContainerHeader title="친구" tabIndex={tabIndex} />
      <MyProfileThumbnail />
      <BirthdayFriends birthdayFirends={[]} />
    </InnerContaienrWrapper>
  );
}

export default FriendContainer;
