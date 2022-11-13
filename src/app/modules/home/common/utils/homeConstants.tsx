import { PRIVATE_ROUTES } from "app/routes/utils/routename";
import chattingCreateIcon from "assets/icons/chatting_create.png";
import friendAddIcon from "assets/icons/friend_add.png";
import searchIcon from "assets/icons/friend_search.png";

interface HeaderImageType {
  [key: string]: string[] | undefined[];
}

export const HEADER_IMAGE: HeaderImageType = {
  [PRIVATE_ROUTES.HOME.path]: [searchIcon, friendAddIcon],
  [PRIVATE_ROUTES.CHATTING.path]: [searchIcon, chattingCreateIcon],
};
