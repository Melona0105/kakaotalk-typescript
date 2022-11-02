import ChattingContainer from "modules/home/chatting/ChattingContainer";
import EtcContainer from "modules/home/etc/EtcContainer";
import FriendContainer from "modules/home/friend/FriendContainer";

interface HomeInnerContainerType {
  [key: number]: JSX.Element;
}

export const HOME_INNER_CONTAINER: HomeInnerContainerType = {
  0: <FriendContainer />,
  1: <ChattingContainer />,
  2: <EtcContainer />,
};
