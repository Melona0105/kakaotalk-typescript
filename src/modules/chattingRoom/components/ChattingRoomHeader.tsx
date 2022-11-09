import goBackIcon from "assets/icons/chatting_goback.png";
import menu from "assets/icons/chatting_menu.png";
import useCustomNavigation from "modules/common/hooks/useCustromNavigation";
import {
  ChattingRoomHeaderIcon,
  ChattingRoomHeaderWrapper,
} from "./ChattingRoomHeader.style";

function ChattingRoomHeader() {
  const { goBack } = useCustomNavigation();

  return (
    <ChattingRoomHeaderWrapper>
      <ChattingRoomHeaderIcon src={goBackIcon} onClick={goBack} />
      <div>채팅방</div>
      <ChattingRoomHeaderIcon
        src={menu}
        onClick={() => console.log("채팅 메뉴")}
      />
    </ChattingRoomHeaderWrapper>
  );
}

export default ChattingRoomHeader;
