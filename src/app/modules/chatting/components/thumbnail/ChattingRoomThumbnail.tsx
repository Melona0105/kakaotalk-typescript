import Modal from "app/modules/common/components/Modal";
import RightClickMenu from "app/modules/common/components/RightClickMenu";
import getTimeStamp from "app/modules/common/utils/getChattingTimeStamp";
import defaultImage from "assets/images/room_default_image.png";
import { Chatting } from "domain/entities/chattingEntity";
import { useMemo } from "react";
import useChattingRoomThumbnail from "./ChattingRoomThumbnail.hook";

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
  roomData?: Chatting;
}

function ChattingRoomThumbnail({ roomData }: ChattingRoomThumbnailProps) {
  const { username, text, avatarURL, createdAt } = roomData!;
  const { models, operations } = useChattingRoomThumbnail(roomData);
  const { showMenu, pointerLocate, friendMenuItems } = models;
  const { navigateChattingRoom, handleShowMenu, onContextMenu } = operations;

  const MemorizedModal = useMemo(
    () =>
      showMenu && (
        <Modal showModal={showMenu} onCloseModalClick={handleShowMenu}>
          <RightClickMenu
            items={friendMenuItems}
            pointerLocate={pointerLocate}
          />
        </Modal>
      ),
    [showMenu, handleShowMenu]
  );

  return (
    <div>
      {MemorizedModal}
      <ChattingRoomThumbnailWrapper
        onContextMenu={(e) => onContextMenu(e)}
        onClick={() => navigateChattingRoom()}
      >
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
    </div>
  );
}

export default ChattingRoomThumbnail;
