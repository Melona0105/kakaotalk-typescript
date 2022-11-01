import {
  NavigationBarImageButton,
  NavigationBarDiv,
  NavigationBarWrapper,
} from "./NavigationBar.style";
import friendActive from "assets/icons/friend_active.png";
import friendInactive from "assets/icons/friend_inactive.png";
import chatActive from "assets/icons/chat_active.png";
import chatInactive from "assets/icons/chat_inactive.png";
import etcActive from "assets/icons/etc_active.png";
import etcInactive from "assets/icons/etc_inactive.png";
import noti from "assets/icons/noti.png";
import setting from "assets/icons/setting.png";

interface NavigationMenu {
  id: number;
  src: string;
  inactiveSrc?: string;
  onClick?: () => void;
}

const NAVIGATION_MENUS: NavigationMenu[] = [
  { id: 0, src: friendActive, inactiveSrc: friendInactive },
  { id: 1, src: chatActive, inactiveSrc: chatInactive },
  { id: 2, src: etcActive, inactiveSrc: etcInactive },
  { id: 3, src: noti, onClick: () => console.log(1) },
  { id: 4, src: setting, onClick: () => console.log(2) },
];
interface NavigationBarProps {
  tabIndex: number;
  onTabPress: (index: number) => void;
}

function NavigationBar({ tabIndex, onTabPress }: NavigationBarProps) {
  return (
    <NavigationBarWrapper>
      <NavigationBarDiv>
        {NAVIGATION_MENUS.slice(0, 3).map((menu, index) => (
          <NavigationBarImageButton
            key={menu.id}
            src={index === tabIndex ? menu.src : menu.inactiveSrc}
            onClick={() => onTabPress(index)}
          />
        ))}
      </NavigationBarDiv>

      <NavigationBarDiv>
        {NAVIGATION_MENUS.slice(3).map((menu) => (
          <NavigationBarImageButton
            key={menu.id}
            src={menu.src}
            onClick={menu.onClick}
          />
        ))}
      </NavigationBarDiv>
    </NavigationBarWrapper>
  );
}

export default NavigationBar;
