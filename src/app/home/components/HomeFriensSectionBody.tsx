import { BodyWrapper } from "app//home/common/styles/homeStyles";
import BirthdayFriends from "./HomeBirthdayFriends";
import HomeMyFriends from "./HomeMyFriends";
import HomeMyProfileThumbnail from "./thumbnail/HomeMyProfileThumbnail";

interface HomeFriensSectionBodyProps {
  searchKeyword: string;
}

function HomeFriensSectionBody({ searchKeyword }: HomeFriensSectionBodyProps) {
  return (
    <BodyWrapper>
      <HomeMyProfileThumbnail />
      <BirthdayFriends birthdayFirends={[]} />
      <HomeMyFriends searchKeyword={searchKeyword} />
    </BodyWrapper>
  );
}

export default HomeFriensSectionBody;
