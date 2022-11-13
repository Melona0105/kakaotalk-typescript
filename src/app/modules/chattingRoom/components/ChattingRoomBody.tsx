import Loading from "app/modules/common/components/Loading";
import { useProfileContext } from "app/modules/common/providers/ProfileProvider";
import { User } from "domain/entities/userEntity";
import FriendChat from "./chat/FriendChat";
import MyChat from "./chat/MyChat";
import useChattingRoomBody from "./ChattingRoomBody.hook";
import { ChattingRoomBodyWrapper } from "./ChattingRoomBody.style";
import { getSortedChattings } from "../utils/getSortedChattings";

function ChattingRoomBody({ userData }: { userData?: User }) {
  const { userProfile } = useProfileContext();
  const { models } = useChattingRoomBody();
  const { data, isLoading, isError } = models;

  if (isLoading) return <Loading />;
  if (isError) return null;

  return (
    <ChattingRoomBodyWrapper>
      {getSortedChattings(data)?.map((chat) => {
        if (chat.senderId === userProfile?.id) {
          return <MyChat key={chat.id} chat={chat} />;
        } else {
          return (
            <FriendChat
              key={chat.id}
              chat={chat}
              avatarURL={userData?.avatarURL}
            />
          );
        }
      })}
    </ChattingRoomBodyWrapper>
  );
}

export default ChattingRoomBody;
