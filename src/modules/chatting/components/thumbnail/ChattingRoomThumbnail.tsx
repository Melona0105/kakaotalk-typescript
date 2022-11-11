import { ChattingRoomType } from "apis/interfaces/apiInterface";
import defaultImage from "assets/images/room_default_image.png";
import useNavigateChattingRoomByFriendId from "modules/common/hooks/useNavigateChattingRoom";
import getTimeStamp from "modules/common/utils/getChattingTimeStamp";
import {
  ChattingRoomThumbnailRightDiv,
  ChattingRoomThumbnailImage,
  ChattingRoomThumbnailWrapper,
  ChattingRoomThumbnailTopDiv,
  ChattingRoomThumbnailUsername,
  ChattingRoomThumbnailTimeStamp,
  ChattingRoomThumbnailText,
} from "./ChattingRoomThumbnail.style";

interface ChattingRoomThumbnailProps {
  roomData?: ChattingRoomType;
}

function ChattingRoomThumbnail({ roomData }: ChattingRoomThumbnailProps) {
  const { user_id, username, text, avatarURL, createdAt } = roomData!;
  const { navigateChattingRoom } = useNavigateChattingRoomByFriendId(user_id!);

  return (
    <ChattingRoomThumbnailWrapper onClick={() => navigateChattingRoom()}>
      <ChattingRoomThumbnailImage src={avatarURL || defaultImage} />
      <ChattingRoomThumbnailRightDiv>
        <ChattingRoomThumbnailTopDiv>
          <ChattingRoomThumbnailUsername>
            {username}
          </ChattingRoomThumbnailUsername>

          <ChattingRoomThumbnailTimeStamp>
            {getTimeStamp(createdAt)}
          </ChattingRoomThumbnailTimeStamp>
        </ChattingRoomThumbnailTopDiv>

        <ChattingRoomThumbnailText>{text}</ChattingRoomThumbnailText>
      </ChattingRoomThumbnailRightDiv>
    </ChattingRoomThumbnailWrapper>
  );
}

export default ChattingRoomThumbnail;
