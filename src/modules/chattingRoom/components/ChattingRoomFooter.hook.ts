import { QUERY_KEYS } from "libs/reactQuery/queryKeys";
import socket from "libs/webSocket/webSocket.config";
import { useAuthContext } from "modules/common/providers/AuthProvider";
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
/**
 * 입력하는 채팅의 상태를 footer에서 관리합니다.
 */

interface MessageType {
  sender_id?: string;
  text: string;
  room_id?: string;
}

function useChattingRoomFooter() {
  const client = useQueryClient();
  // 데이터 페칭을 관리하는함수입니다.
  const [submiting, setSubmiting] = useState<boolean>(false);
  const { userProfile } = useAuthContext();
  const { roomId } = useParams();
  const [text, setText] = useState<string>("");

  function onTextChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  /**
   * 텍스트가 존재할 경우에만 mutation을 합니다.
   */
  async function onSubmitButtonClick() {
    // 데이터를 쏘는 경우가 아닐때만 실행합니다.
    if (!submiting) {
      setSubmiting(true);
    }
  }

  useEffect(() => {
    if (submiting) {
      const message: MessageType = {
        sender_id: userProfile?.id,
        text: text,
        room_id: roomId,
      };

      socket.emit("message", message);
      socket.on("message_send", () => {
        console.log("데이터 전송 완료");
        client.refetchQueries({
          queryKey: [QUERY_KEYS.CHATTING.GET_CHATTING_MESSAGES],
        });
        setText("");
        setSubmiting(false);
      });
    }
  }, [submiting]);

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
      submiting,
    },
    operations: {
      onTextChange,
      onSubmitButtonClick,
      onEnterKeyPress,
    },
  };
}

export default useChattingRoomFooter;
