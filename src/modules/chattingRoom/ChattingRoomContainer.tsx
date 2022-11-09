import useChattingRoomContainer from "./ChattingRoomContainer.hook";
import { ChattingRoomContainerWrapper } from "./ChattingRoomContainer.style";
import ChattingRoomBody from "./components/ChattingRoomBody";
import ChattingRoomFooter from "./components/ChattingRoomFooter";
import ChattingRoomHeader from "./components/ChattingRoomHeader";

function ChattingRoomContainer() {
  const { models } = useChattingRoomContainer();
  const { data } = models;

  return (
    <ChattingRoomContainerWrapper>
      <ChattingRoomHeader />
      <ChattingRoomBody />
      <ChattingRoomFooter />
    </ChattingRoomContainerWrapper>
  );
}

export default ChattingRoomContainer;
