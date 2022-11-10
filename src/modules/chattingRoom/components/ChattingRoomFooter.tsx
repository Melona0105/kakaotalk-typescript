import { useMemo } from "react";
import useChattingRoomFooter from "./ChattingRoomFooter.hook";
import {
  ChattingRoomFooterWrapper,
  ChattingRoomFooterAddIcon,
  ChattingRoomFooterInput,
  ChattingRoomFooterInputDiv,
  ChattingRoomFooterSubmitIcon,
} from "./ChattingRoomFooter.style";

function ChattingRoomFooter() {
  const { models, operations } = useChattingRoomFooter();
  const { text } = models;
  const { onTextChange, onSubmitButtonClick, onEnterKeyPress } = operations;

  const MemoreizedInput = useMemo(
    () => (
      <ChattingRoomFooterInputDiv>
        <ChattingRoomFooterInput
          value={text}
          onChange={onTextChange}
          onKeyDown={onEnterKeyPress}
        />
        {text && <ChattingRoomFooterSubmitIcon onClick={onSubmitButtonClick} />}
      </ChattingRoomFooterInputDiv>
    ),
    [text]
  );

  return (
    <ChattingRoomFooterWrapper>
      <ChattingRoomFooterAddIcon />
      {MemoreizedInput}
    </ChattingRoomFooterWrapper>
  );
}

export default ChattingRoomFooter;
