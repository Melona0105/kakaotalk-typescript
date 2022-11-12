import chattingCreateIcon from "assets/icons/chatting_create.png";
import friendAddIcon from "assets/icons/friend_add.png";
import searchIcon from "assets/icons/friend_search.png";
import { PRIVATE_ROUTES } from "routes/utils/routename";

interface HeaderImageType {
  [key: string]: string[] | undefined[];
}

export const HEADER_IMAGE: HeaderImageType = {
  [PRIVATE_ROUTES.HOME.path]: [searchIcon, friendAddIcon],
  [PRIVATE_ROUTES.CHATTING.path]: [searchIcon, chattingCreateIcon],
};
