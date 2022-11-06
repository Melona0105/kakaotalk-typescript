import Modal from "modules/common/components/Modal";
import RightClickMenu from "modules/common/components/RightClickMenu";
import useNavigationBar from "./NavigationBar.hook";
import {
  NavigationBarImageButton,
  NavigationBarDiv,
  NavigationBarWrapper,
} from "./NavigationBar.style";

interface NavigationBarProps {
  tabIndex: number;
  onTabPress: (index: number) => void;
}

function NavigationBar({ tabIndex, onTabPress }: NavigationBarProps) {
  const { models, operations } = useNavigationBar();
  const {
    showSettingModal,
    NAVIGATION_MENUS,
    SETTING_MODAL_ITEMS,
    pointerLocate,
  } = models;
  const { onCloseModalClick } = operations;

  return (
    <NavigationBarWrapper>
      {showSettingModal && (
        <Modal
          showModal={showSettingModal}
          onCloseModalClick={onCloseModalClick}
        >
          <RightClickMenu
            pointerLocate={pointerLocate}
            items={SETTING_MODAL_ITEMS}
          />
        </Modal>
      )}
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
