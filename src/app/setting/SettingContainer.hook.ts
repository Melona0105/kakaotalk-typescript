import useEscapeShortcut from "app/common/hooks/useEscapeShortcut";
import { useNavigate } from "react-router-dom";
import { SettingMenuItemType } from "./components/SettingMenu.interface";
import { PRIVATE_ROUTES } from "../routes/utils/routename";

export interface SettingMenuType {
  id: number;
  title?: string;
  items: SettingMenuItemType[];
}

function useSettingContainer() {
  const navigate = useNavigate();
  useEscapeShortcut();

  const SETTING_MENU_ITEMS: SettingMenuType[] = [
    {
      id: 0,
      title: "친구 관리",
      items: [
        {
          id: 0,
          title: "숨김친구 관리",
          phrase: "숨김친구입니다.",
          onClick: () => navigate(PRIVATE_ROUTES.SETTING.children![1].path),
        },
        {
          id: 1,
          title: "차단친구 관리",
          phrase: "차단친구입니다.",
          onClick: () => navigate(PRIVATE_ROUTES.SETTING.children![2].path),
        },
      ],
    },
  ];

  return {
    models: {
      SETTING_MENU_ITEMS,
    },
  };
}

export default useSettingContainer;
