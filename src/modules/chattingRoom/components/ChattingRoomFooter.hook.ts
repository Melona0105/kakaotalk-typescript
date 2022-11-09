import socket from "libs/webSocket/webSocket.config";
import { useAuthContext } from "modules/common/providers/AuthProvider";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useParams } from "react-router-dom";
/**
 * 입력하는 채팅의 상태를 footer에서 관리합니다.
 */

function useChattingRoomFooter() {
  const { userProfile } = useAuthContext();
  const { roomId } = useParams();
  const [text, setText] = useState<string>("");

  function onTextChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  socket.on("my-event", () => console.log(1));
  /**
   * 텍스트가 존재할 경우에만 mutation을 합니다.
   */
  async function onSubmitButtonClick() {
    const message = {
      sender_id: userProfile?.id,
      text: text,
      room_id: roomId,
    };
    socket.emit("message", message);
    socket.on("message_send", () => {
      console.log("데이터 전송 완료");
      setText("");
    });
  }

  /**
   * 엔터키를 누를경우, 입력한 텍스트가 존재할경우에 텍스트를 전송합니다.
   */
  function onEnterKeyPress(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      text && onSubmitButtonClick();
    }
  }

  return {
    models: {
      text,
    },
    operations: {
      onTextChange,
      onSubmitButtonClick,
      onEnterKeyPress,
    },
  };
}

export default useChattingRoomFooter;
