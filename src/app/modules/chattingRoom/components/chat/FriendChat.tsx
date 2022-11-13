import { SortedChattingType } from "app/modules/chattingRoom/utils/getSortedChattings";
import getTimeStamp from "app/modules/common/utils/getChattingTimeStamp";
import {
  ChatFriendDiv,
  ChatFriendImage,
  ChatMessage,
  ChatMessageDiv,
  ChatTime,
  ChatUsername,
  ChatWrapper,
} from "app/modules/chattingRoom/common/styles/commonChattingStyle";

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
        <ChatFriendImage src={avatarURL} />
        <div>
          <ChatUsername>{username}</ChatUsername>
          {chattings.map((text, index) => (
            <div key={index}>
              <ChatMessageDiv>
                <ChatMessage>{text}</ChatMessage>
                {index === chattings.length - 1 && (
                  <ChatTime>{getTimeStamp(createdAt)}</ChatTime>
                )}
              </ChatMessageDiv>
            </div>
          ))}
        </div>
      </ChatFriendDiv>
    </ChatWrapper>
  );
}

export default FriendChat;
