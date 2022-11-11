import Loading from "modules/common/components/Loading";
import { BodyWrapper } from "modules/home/common/styles/homeStyles";
import useChattingRoomsSectionBody from "./ChattingRoomsSectionBody.hook";
import ChattingRoomThumbnail from "./thumbnail/ChattingRoomThumbnail";

interface ChattingRoomsSectionBodyProps {
  searchKeyword: string;
}

/**
 * 채팅이 존재하는 방만을 출력합니다.
 */
function ChattingRoomsSectionBody({
  searchKeyword,
}: ChattingRoomsSectionBodyProps) {
  const { models } = useChattingRoomsSectionBody(searchKeyword);
  const { data, isLoading, isError } = models;

  if (isLoading) return <Loading />;
  if (isError) return null;

  return (
    <BodyWrapper>
      {data?.map(
        (room) =>
          room.text && (
            <ChattingRoomThumbnail key={room.room_id} roomData={room} />
          )
      )}
    </BodyWrapper>
  );
}

export default ChattingRoomsSectionBody;
