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

  return (
    <ChattingRoomFooterWrapper>
      <ChattingRoomFooterAddIcon />
      <ChattingRoomFooterInputDiv>
        <ChattingRoomFooterInput
          value={text}
          onChange={onTextChange}
          onKeyDown={onEnterKeyPress}
        />
        {text && <ChattingRoomFooterSubmitIcon onClick={onSubmitButtonClick} />}
      </ChattingRoomFooterInputDiv>
    </ChattingRoomFooterWrapper>
  );
}

export default ChattingRoomFooter;
