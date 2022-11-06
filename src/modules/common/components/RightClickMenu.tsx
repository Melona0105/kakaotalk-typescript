import {
  RightClickMenuDiv,
  RightClickMenuItem,
  RightClickMenuWrapper,
} from "./RightClickMenu.style";

export interface RightClickMenuItemType {
  id: number;
  title: string;
  onClick: () => void;
}

interface RightClickMenuProps {
  items: RightClickMenuItemType[];
  pointerLocate: { clientX: number; clientY: number };
}

function RightClickMenu({ items, pointerLocate }: RightClickMenuProps) {
  const { clientX, clientY } = pointerLocate;

  return (
    <RightClickMenuWrapper top={clientY} left={clientX}>
      {items.map((menu, index) => (
        <RightClickMenuDiv key={menu.id}>
          <RightClickMenuItem
            showBorderBottom={index !== items.length - 1}
            onClick={menu.onClick}
          >
            {menu.title}
          </RightClickMenuItem>
        </RightClickMenuDiv>
      ))}
    </RightClickMenuWrapper>
  );
}

export default RightClickMenu;
