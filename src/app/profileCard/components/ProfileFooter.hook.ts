import useNavigateChattingRoomByFriendId from "app//common/hooks/useNavigateChattingRoom";
import { useProfileContext } from "app//common/providers/ProfileProvider";
import chatIcon from "assets/icons/profile_chat.png";
import editIcon from "assets/icons/profile_edit.png";
import { useParams } from "react-router-dom";

interface FooterItemType {
  id: number;
  src: string;
  title: string;
  onClick?: () => void;
}

function useProfileFooter(
  isMyProfile: boolean,
  onEditProfilePress?: () => void
) {
  const { friendId } = useParams();
  const { navigateChattingRoom } = useNavigateChattingRoomByFriendId(friendId!);

  const footerItems: FooterItemType[] = [
    {
      id: 0,
      src: chatIcon,
      title: "채팅하기",
      onClick: () => navigateChattingRoom(),
    },
    {
      id: 1,
      src: editIcon,
      title: "프로필 편집",
      onClick: onEditProfilePress,
    },
  ];

  return {
    models: {
      footerItems: isMyProfile ? footerItems.slice(1) : footerItems.slice(0, 1),
    },
  };
}
export default useProfileFooter;
