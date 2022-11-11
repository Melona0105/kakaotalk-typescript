import Modal from "modules/common/components/Modal";
import RightClickMenu from "modules/common/components/RightClickMenu";
import useNavigationBar from "./NavigationBar.hook";
import {
  NavigationBarImageButton,
  NavigationBarDiv,
  NavigationBarWrapper,
} from "./NavigationBar.style";

function NavigationBar() {
  const { models, operations } = useNavigationBar();
  const {
    showSettingModal,
    navigationMenus,
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
        {navigationMenus.slice(0, 3).map((menu) => (
          <NavigationBarImageButton
            key={menu.id}
            src={menu.src}
            onClick={menu.onClick}
          />
        ))}
      </NavigationBarDiv>

      <NavigationBarDiv>
        {navigationMenus.slice(3).map((menu) => (
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
