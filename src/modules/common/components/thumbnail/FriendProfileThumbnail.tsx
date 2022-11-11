import { FriendType } from "apis/interfaces/apiInterface";
import birthdayDefaultImage from "assets/images/friend_birthday_default_image.png";
import defaultImage from "assets/images/friend_default_image.png";
import Modal from "modules/common/components/Modal";
import RightClickMenu from "modules/common/components/RightClickMenu";
import { FlexDiv } from "modules/common/styles/commonStyles";
import Melon from "modules/home/common/components/Melon";
import { useMemo } from "react";
import useFriendProfileThumbnail from "./FriendProfileThumbnail.hook";
import {
  FriendProfileThumbnailCount,
  FriendProfileThumbnailImage,
  FriendProfileThumbnailText,
  FriendProfileThumbnailWrapper,
} from "./FriendProfileThumbnail.style";

interface FriendProfileThumbnailProps {
  friend?: FriendType;
  birthdayFirends?: any[];
  showManagementMenu?: boolean;
}

/**
 * birthday firends props에 따라서 다른 친구들을 렌더링합니다.
 */
// TODO: advanced => 멜론 노래 연동해보기
function FriendProfileThumbnail({
  friend,
  birthdayFirends,
  showManagementMenu = false,
}: FriendProfileThumbnailProps) {
  const { models, operations } = useFriendProfileThumbnail(
    friend!.id,
    showManagementMenu
  );
  const { showMenu, pointerLocate, friendMenuItems } = models;
  const { handleShowMenu, onContenxtMunu, onFriendClick, onFriendDoubleClick } =
    operations;

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
    [friendMenuItems, showMenu, pointerLocate]
  );

  const MemorizedFriendThumbnail = useMemo(
    () => (
      <FriendProfileThumbnailWrapper
        onContextMenu={onContenxtMunu}
        onClick={onFriendClick}
        onDoubleClick={onFriendDoubleClick}
      >
        <FlexDiv>
          <FriendProfileThumbnailImage
            src={
              birthdayFirends
                ? birthdayDefaultImage
                : friend?.avatarURL || defaultImage
            }
          />
          <FriendProfileThumbnailText showBirthDay={!!birthdayFirends}>
            {birthdayFirends ? "친구의 생일을 확인해보세요!" : friend?.username}
            {birthdayFirends && (
              <FriendProfileThumbnailCount>
                {birthdayFirends.length}
              </FriendProfileThumbnailCount>
            )}
          </FriendProfileThumbnailText>
        </FlexDiv>
        {/* {!birthdayFirends && (
          <Melon title="흐르는 고등어" onClick={() => console.log("고등어!")} />
        )} */}
      </FriendProfileThumbnailWrapper>
    ),
    [friend]
  );

  return (
    <div>
      {MemorizedModal}
      {MemorizedFriendThumbnail}
    </div>
  );
}

export default FriendProfileThumbnail;