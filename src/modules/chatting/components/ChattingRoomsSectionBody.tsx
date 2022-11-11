import { BodyWrapper } from "modules/home/common/styles/homeStyles";
import useChattingRoomsSectionBody from "./ChattingRoomsSectionBody.hook";
import ChattingRoomThumbnail from "./thumbnail/ChattingRoomThumbnail";

function ChattingRoomsSectionBody() {
  const { models } = useChattingRoomsSectionBody();
  const { data, isLoading, isError } = models;

  return (
    <BodyWrapper>
      {data?.map((room) => (
        <ChattingRoomThumbnail key={room.room_id} roomData={room} />
      ))}
    </BodyWrapper>
  );
}

export default ChattingRoomsSectionBody;
