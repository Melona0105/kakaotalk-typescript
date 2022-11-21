import { SettingMenuType } from "../SettingContainer.hook";
import {
  SettingMenusDiv,
  SettingMenusItemPhrase,
  SettingMenusItemTitle,
  SettingMenusTitle,
} from "./SettingMenus.style";

interface SettingMenuProps {
  menus: SettingMenuType[];
}

function SettingMenus({ menus }: SettingMenuProps) {
  return (
    <div>
      {menus.map((menu) => (
        <SettingMenusDiv key={menu.id}>
          {menu.title && <SettingMenusTitle>{menu.title}</SettingMenusTitle>}
          {menu.items.map((item) => (
            <div key={item.id}>
              <SettingMenusItemTitle onClick={() => item.onClick()}>
                {item.title}
              </SettingMenusItemTitle>
              {item.phrase && (
                <SettingMenusItemPhrase>{item.phrase}</SettingMenusItemPhrase>
              )}
            </div>
          ))}
        </SettingMenusDiv>
      ))}
    </div>
  );
}

export default SettingMenus;
