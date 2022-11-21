import Modal from "app/common/components/Modal";
import RightClickMenu from "app/common/components/RightClickMenu";
import useNavigationBar from "./NavigationBar.hook";
import {
  NavigationBarImageButton,
  NavigationBarDiv,
  NavigationBarWrapper,
} from "./NavigationBar.style";

/**
 * Home 화면 왼쪽의 네비게이션을 렌더링하는 컴포넌트입니다.
 */
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
