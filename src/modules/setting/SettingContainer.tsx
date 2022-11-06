import CloseButtonHeader from "modules/common/components/CloseButtonHeader";
import { CloseButtonStyleWrapper } from "modules/common/styles/commonStyles";
import SettingMenus from "./components/SettingMenus";
import useSettingContainer from "./SettingContainer.hook";

function SettingContainer() {
  const { models } = useSettingContainer();
  const { SETTING_MENU_ITEMS } = models;

  return (
    <CloseButtonStyleWrapper>
      <CloseButtonHeader title="친구" />
      <SettingMenus menus={SETTING_MENU_ITEMS} />
    </CloseButtonStyleWrapper>
  );
}

export default SettingContainer;
