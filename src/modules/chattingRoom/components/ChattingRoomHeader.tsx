import goBackIcon from "assets/icons/chatting_goback.png";
import menu from "assets/icons/chatting_menu.png";
import useCustomNavigation from "modules/common/hooks/useCustromNavigation";
import { UserType } from "modules/common/providers/authProvider.interface";
import {
  ChattingRoomHeaderIcon,
  ChattingRoomHeaderWrapper,
} from "./ChattingRoomHeader.style";

function ChattingRoomHeader({ userData }: { userData?: UserType }) {
  const { goBack } = useCustomNavigation();

  return (
    <ChattingRoomHeaderWrapper>
      <ChattingRoomHeaderIcon src={goBackIcon} onClick={goBack} />
      <div>{userData?.username}</div>
      <ChattingRoomHeaderIcon
        src={menu}
        onClick={() => console.log("채팅 메뉴")}
      />
    </ChattingRoomHeaderWrapper>
  );
}

export default ChattingRoomHeader;
