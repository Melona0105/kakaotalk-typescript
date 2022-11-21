import { SortedChattingType } from "app//chattingRoom/utils/getSortedChattings";
import getTimeStamp from "app//common/utils/getChattingTimeStamp";
import profile_default from "assets/images/chatting_room_default.png";
import {
  ChatFriendDiv,
  ChatFriendImage,
  ChatMessage,
  ChatMessageDiv,
  ChatTime,
  ChatUsername,
  ChatWrapper,
} from "app//chattingRoom/common/styles/commonChattingStyle";

interface FriendChatProps {
  chat: SortedChattingType;
  avatarURL?: string;
}

/**
 * 친구의 채팅을 렌더링하는 컴포넌트입니다.
 */
function FriendChat({ chat, avatarURL }: FriendChatProps) {
  const { chattings, username, createdAt } = chat;

  return (
    <ChatWrapper>
      <ChatFriendDiv>
        <ChatFriendImage src={avatarURL || profile_default} />
        <div>
          <ChatUsername>{username}</ChatUsername>
          {chattings.map((text, index) => (
            <ChatMessageDiv key={text + index}>
              <ChatMessage>{text}</ChatMessage>
              {index === chattings.length - 1 && (
                <ChatTime>{getTimeStamp(createdAt)}</ChatTime>
              )}
            </ChatMessageDiv>
          ))}
        </div>
      </ChatFriendDiv>
    </ChatWrapper>
  );
}

export default FriendChat;
