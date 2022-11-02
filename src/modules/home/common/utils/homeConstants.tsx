import ChattingContainer from "modules/home/chatting/ChattingContainer";
import EtcContainer from "modules/home/etc/EtcContainer";
import FriendContainer from "modules/home/friend/FriendContainer";
import { HomeInnerContainerProps } from "../interfaces/homeInterface";
import searchIcon from "assets/icons/friend_search.png";
import friendAddIcon from "assets/icons/friend_add.png";
import chattingCreateIcon from "assets/icons/chatting_create.png";

interface HomeInnerContainerType {
  [key: number]: ({ tabIndex }: HomeInnerContainerProps) => JSX.Element;
}

export const HOME_INNER_CONTAINER: HomeInnerContainerType = {
  0: FriendContainer,
  1: ChattingContainer,
  2: EtcContainer,
};

interface HeaderImageType {
  [key: number]: string[] | undefined[];
}

export const HEADER_IMAGE: HeaderImageType = {
  0: [searchIcon, friendAddIcon],
  1: [searchIcon, chattingCreateIcon],
  2: [undefined, undefined],
};
