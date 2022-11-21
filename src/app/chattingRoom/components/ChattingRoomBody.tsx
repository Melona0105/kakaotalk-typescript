import { useProfileContext } from "app//common/providers/ProfileProvider";
import Loading from "app/common/components/Loading";
import { User } from "domain/entities/userEntity";
import FriendChat from "./chat/FriendChat";
import MyChat from "./chat/MyChat";
import useChattingRoomBody from "./ChattingRoomBody.hook";
import { ChattingRoomBodyWrapper } from "./ChattingRoomBody.style";
import { getSortedChattings } from "../utils/getSortedChattings";

function ChattingRoomBody({ userData }: { userData?: User }) {
  const { userProfile } = useProfileContext();
  const { refs, models } = useChattingRoomBody();
  const { chattingRoomRef } = refs;
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
      <div ref={chattingRoomRef} />
    </ChattingRoomBodyWrapper>
  );
}

export default ChattingRoomBody;
