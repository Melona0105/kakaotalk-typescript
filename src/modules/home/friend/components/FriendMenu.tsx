import useFriendMenu from "./FriendMenu.hook";
import {
  FriendMenuWrapper,
  FriendMunuItem,
  FriendMunuItemDiv,
} from "./FriendMenu.style";

interface FriendMenuProps {
  pointerLocate: { clientX: number; clientY: number };
}

function FriendMenu({ pointerLocate }: FriendMenuProps) {
  const { clientX, clientY } = pointerLocate;
  const { models } = useFriendMenu();
  const { FRIEND_MENU_ITEMS } = models;

  return (
    <FriendMenuWrapper top={clientY} left={clientX}>
      {FRIEND_MENU_ITEMS.map((menu, index) => (
        <FriendMunuItemDiv>
          <FriendMunuItem
            key={menu.id}
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
