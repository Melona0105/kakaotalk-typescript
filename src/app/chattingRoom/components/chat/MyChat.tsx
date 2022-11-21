import { SortedChattingType } from "app//chattingRoom/utils/getSortedChattings";
import getTimeStamp from "app//common/utils/getChattingTimeStamp";
import {
  ChatMessage,
  ChatMessageDiv,
  ChatTime,
  ChatWrapper,
} from "app//chattingRoom/common/styles/commonChattingStyle";

/**
 * 나의 채팅을 렌더링하는 컴포넌트입니다.
 */
function MyChat({ chat }: { chat: SortedChattingType }) {
  const { chattings, createdAt } = chat;

  return (
    <ChatWrapper isMine>
      {chattings.map((text, index) => (
        <ChatMessageDiv key={text + index} isMine>
          {index === chattings.length - 1 && (
            <ChatTime isMine>{getTimeStamp(createdAt)}</ChatTime>
          )}
          <ChatMessage isMine>{text}</ChatMessage>
        </ChatMessageDiv>
      ))}
    </ChatWrapper>
  );
}

export default MyChat;
