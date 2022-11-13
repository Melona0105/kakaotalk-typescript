import { SortedChattingType } from "app/modules/chattingRoom/utils/getSortedChattings";
import getTimeStamp from "app/modules/common/utils/getChattingTimeStamp";
import {
  ChatMessage,
  ChatMessageDiv,
  ChatTime,
  ChatWrapper,
} from "app/modules/chattingRoom/common/styles/commonChattingStyle";

/**
 * 나의 채팅을 렌더링하는 컴포넌트입니다.
 */
function MyChat({ chat }: { chat: SortedChattingType }) {
  const { chattings, createdAt } = chat;

  return (
    <ChatWrapper isMine>
      {chattings.map((text, index) => (
        <div key={index}>
          <ChatMessageDiv isMine>
            {index === chattings.length - 1 && (
              <ChatTime isMine>{getTimeStamp(createdAt)}</ChatTime>
            )}
            <ChatMessage isMine>{text}</ChatMessage>
          </ChatMessageDiv>
        </div>
      ))}
    </ChatWrapper>
  );
}

export default MyChat;
