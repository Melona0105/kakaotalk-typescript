import Loading from "modules/common/components/Loading";
import { useAuthContext } from "modules/common/providers/AuthProvider";
import { UserType } from "modules/common/providers/authProvider.interface";
import FriendChat from "./Chat/FriendChat";
import MyChat from "./Chat/MyChat";
import useChattingRoomBody from "./ChattingRoomBody.hook";
import { ChattingRoomBodyWrapper } from "./ChattingRoomBody.style";
import { getSortedChattings } from "../utils/getSortedChattings";

function ChattingRoomBody({ userData }: { userData?: UserType }) {
  const { userProfile } = useAuthContext();
  const { models } = useChattingRoomBody();
  const { data, isLoading, isError } = models;

  if (isLoading) return <Loading />;
  if (isError) return null;

  return (
    <ChattingRoomBodyWrapper>
      {getSortedChattings(data)?.map((chat) => {
        if (chat.sender_id === userProfile?.id) {
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
