import chattingApis from "apis/chattingAPis";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
/**
 * 입력하는 채팅의 상태를 footer에서 관리합니다.
 */

function useChattingRoomFooter() {
  const client = useQueryClient();
  const { roomId } = useParams();
  const [text, setText] = useState<string>("");

  function onTextChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  const sendMessage = useMutation({
    mutationFn: async () => await chattingApis.sendMessage(text, roomId!),
    onSuccess: () => {
      // TODO: 채팅 리페치쿼리
      // TODO: 채팅 웹소켓
      setText("");
    },
  });

  /**
   * 텍스트가 존재할 경우에만 mutation을 합니다.
   */
  async function onSubmitButtonClick() {
    text && sendMessage.mutate();
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
