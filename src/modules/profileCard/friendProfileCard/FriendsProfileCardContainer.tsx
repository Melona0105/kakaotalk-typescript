import Loading from "modules/common/components/Loading";
import useFriendsProfileCardContainer from "./FriendsProfileCardContainer.hook";
import { ProfileCardContainerWrapper } from "../common/utils/commonStyle";
import ProfileBody from "../components/ProfileBody";
import ProfileFooter from "../components/ProfileFooter";
import ProfileHeader from "../components/ProfileHeader";

function FriendsProfileCardContainer() {
  const { models } = useFriendsProfileCardContainer();
  const { data, isLoading, isError } = models;

  if (isLoading) return <Loading />;
  if (isError) return null;

  const { username, avatarURL, summary } = data!;

  return (
    <ProfileCardContainerWrapper>
      <ProfileHeader />
      <ProfileBody
        username={username}
        summary={summary}
        avatarURL={avatarURL}
      />
      <ProfileFooter isMyProfile={false} />
    </ProfileCardContainerWrapper>
  );
}

export default FriendsProfileCardContainer;
