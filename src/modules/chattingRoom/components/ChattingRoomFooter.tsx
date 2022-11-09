import {
  ChattingRoomFooterWrapper,
  ChattingRoomFooterAddIcon,
  ChattingRoomFooterInput,
  ChattingRoomFooterInputDiv,
} from "./ChattingRoomFooter.style";

function ChattingRoomFooter() {
  return (
    <ChattingRoomFooterWrapper>
      <ChattingRoomFooterAddIcon />
      <ChattingRoomFooterInputDiv>
        <ChattingRoomFooterInput />
      </ChattingRoomFooterInputDiv>
    </ChattingRoomFooterWrapper>
  );
}

export default ChattingRoomFooter;
