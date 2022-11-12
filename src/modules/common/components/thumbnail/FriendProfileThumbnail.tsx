import { FriendType } from "apis/interfaces/apiInterface";
import birthdayDefaultImage from "assets/images/friend_birthday_default_image.png";
import defaultImage from "assets/images/friend_default_image.png";
import Modal from "modules/common/components/Modal";
import RightClickMenu from "modules/common/components/RightClickMenu";
import { FlexDiv } from "modules/common/styles/commonStyles";
import Melon from "modules/home/common/components/Melon";
import { useMemo } from "react";
import useFriendProfileThumbnail from "./FriendProfileThumbnail.hook";
import CheckBox from "../CheckBox";
import {
  FriendProfileThumbnailCount,
  FriendProfileThumbnailImage,
  FriendProfileThumbnailText,
  FriendProfileThumbnailWrapper,
} from "./FriendProfileThumbnail.style";

interface FriendProfileThumbnailProps {
  friend?: FriendType;
  birthdayFirends?: any[];
  selected?: boolean;
  showManagementMenu?: boolean;
  onFriendSelect?: (friendId: string) => void;
}

// TODO: advanced => 멜론 노래 연동해보기
function FriendProfileThumbnail({
  friend,
  birthdayFirends,
  selected = false,
  showManagementMenu = false,
  onFriendSelect,
}: FriendProfileThumbnailProps) {
  const { models, operations } = useFriendProfileThumbnail(
    friend!.id,
    showManagementMenu,
    onFriendSelect
  );
  const { showMenu, pointerLocate, friendMenuItems } = models;
  const { handleShowMenu, onContextMenu, onFriendClick, onFriendDoubleClick } =
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
    [friendMenuItems, showMenu, pointerLocate, handleShowMenu]
  );

  const MemorizedFriendThumbnail = useMemo(
    () => (
      <FriendProfileThumbnailWrapper
        hoverEnabled={!onFriendSelect}
        onContextMenu={onContextMenu}
        onClick={onFriendClick}
        onDoubleClick={onFriendDoubleClick}
      >
        <FlexDiv>
          <FriendProfileThumbnailImage
            showDefaultImage={!friend?.avatarURL}
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
        {onFriendSelect && (
          <CheckBox isSelected={selected} showPaddingRight={false} />
        )}
      </FriendProfileThumbnailWrapper>
    ),
    [
      friend,
      birthdayFirends,
      selected,
      onFriendSelect,
      onContextMenu,
      onFriendClick,
      onFriendDoubleClick,
    ]
  );

  return (
    <div>
      {MemorizedModal}
      {MemorizedFriendThumbnail}
    </div>
  );
}

export default FriendProfileThumbnail;
