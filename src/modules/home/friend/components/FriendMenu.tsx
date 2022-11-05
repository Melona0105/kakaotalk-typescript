import useFriendMenu from "./FriendMenu.hook";
import {
  FriendMenuWrapper,
  FriendMunuItem,
  FriendMunuItemDiv,
} from "./FriendMenu.style";

interface FriendMenuProps {
  friendId: string;
  pointerLocate: { clientX: number; clientY: number };
}

function FriendMenu({ friendId, pointerLocate }: FriendMenuProps) {
  const { clientX, clientY } = pointerLocate;
  const { models } = useFriendMenu(friendId);
  const { FRIEND_MENU_ITEMS } = models;

  return (
    <FriendMenuWrapper top={clientY} left={clientX}>
      {FRIEND_MENU_ITEMS.map((menu, index) => (
        <FriendMunuItemDiv key={menu.id}>
          <FriendMunuItem
            showBorderBottom={index !== FRIEND_MENU_ITEMS.length - 1}
            onClick={menu.onClick}
          >
            {menu.title}
          </FriendMunuItem>
        </FriendMunuItemDiv>
      ))}
    </FriendMenuWrapper>
  );
}

export default FriendMenu;
