import chattingCreateIcon from "assets/icons/chatting_create.png";
import friendAddIcon from "assets/icons/friend_add.png";
import searchIcon from "assets/icons/friend_search.png";

interface HeaderImageType {
  [key: number]: string[] | undefined[];
}

export const HEADER_IMAGE: HeaderImageType = {
  0: [searchIcon, friendAddIcon],
  1: [searchIcon, chattingCreateIcon],
  2: [undefined, undefined],
};
