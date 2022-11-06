import CloseButtonHeader from "modules/common/components/CloseButtonHeader";
import SettingMenus from "./components/SettingMenus";
import useSettingContainer from "./SettingContainer.hook";
import { SettingContainerWrapper } from "./SettingContainer.style";

function SettingContainer() {
  const { models } = useSettingContainer();
  const { SETTING_MENU_ITEMS } = models;

  return (
    <SettingContainerWrapper>
      <CloseButtonHeader title="친구" />
      <SettingMenus menus={SETTING_MENU_ITEMS} />
    </SettingContainerWrapper>
  );
}

export default SettingContainer;
