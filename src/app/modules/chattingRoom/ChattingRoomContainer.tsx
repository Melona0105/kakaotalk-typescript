import Loading from "app/modules/common/components/Loading";
import useChattingRoomContainer from "./ChattingRoomContainer.hook";
import { ChattingRoomContainerWrapper } from "./ChattingRoomContainer.style";
import ChattingRoomBody from "./components/ChattingRoomBody";
import ChattingRoomFooter from "./components/ChattingRoomFooter";
import ChattingRoomHeader from "./components/ChattingRoomHeader";

function ChattingRoomContainer() {
  const { models } = useChattingRoomContainer();
  const { data, isLoading, isError } = models;

  if (isLoading) return <Loading />;
  if (isError) return null;

  return (
    <ChattingRoomContainerWrapper>
      <ChattingRoomHeader userData={data} />
      <ChattingRoomBody userData={data} />
      <ChattingRoomFooter />
    </ChattingRoomContainerWrapper>
  );
}

export default ChattingRoomContainer;
