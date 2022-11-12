import { BodyWrapper } from "modules/home/common/styles/homeStyles";
import useChattingRoomsSectionBody from "./ChattingRoomsSectionBody.hook";
import { ChattingRoomsSectionBodyEmptyDiv } from "./ChattingRoomsSectionBody.style";
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

  if (data?.length === 0) {
    return (
      <ChattingRoomsSectionBodyEmptyDiv>
        아직 채팅이 없어요.
        <br />
        새로운 채팅을 시작해보세요.
      </ChattingRoomsSectionBodyEmptyDiv>
    );
  }

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
