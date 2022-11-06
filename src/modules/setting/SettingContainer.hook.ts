import { SettingMenuItemType } from "./components/SettingMenu.interface";

export interface SettingMenuType {
  id: number;
  title?: string;
  items: SettingMenuItemType[];
}

function useSettingContainer() {
  const SETTING_MENU_ITEMS: SettingMenuType[] = [
    {
      id: 0,
      title: "",
      items: [
        {
          id: 0,
          title: "친구 목록 새로고침",
          onClick: () => console.log("새로고침"),
        },
      ],
    },
    {
      id: 1,
      title: "친구 관리",
      items: [
        {
          id: 0,
          title: "숨김친구 관리",
          phrase: "숨김친구입니다.",
          onClick: () => console.log("숨김친구"),
        },
        {
          id: 1,
          title: "차단친구 관리",
          phrase: "차단친구입니다.",
          onClick: () => console.log("차단친구"),
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
