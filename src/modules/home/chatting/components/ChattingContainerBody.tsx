import Loading from "modules/common/components/Loading";
import useChattingContainerBody from "./ChattingContainerBody.hook";
import { ChattingContainerBodyWrapper } from "./ChattingContainerBody.style";
import ChattingRoomThumbnail from "./ChattingRoomThumbnail";

function ChattingContainerBody() {
  const { models } = useChattingContainerBody();
  const { data, isLoading, isError } = models;

  if (isLoading) return <Loading />;
  if (isError) return null;

  return (
    <ChattingContainerBodyWrapper>
      {data?.map((room) => (
        <ChattingRoomThumbnail key={room.room_id} roomData={room} />
      ))}
    </ChattingContainerBodyWrapper>
  );
}

export default ChattingContainerBody;
