import chatIcon from "assets/icons/profile_chat.png";
import editIcon from "assets/icons/profile_edit.png";
import useNavigateChattingRoomByFriendId from "modules/common/hooks/useNavigateChattingRoom";
import { useAuthContext } from "modules/common/providers/AuthProvider";
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
  const { userProfile } = useAuthContext();
  const { friend_id } = useParams();
  const { navigateChattingRoom } = useNavigateChattingRoomByFriendId(friend_id!);

  const footerItems: FooterItemType[] = [
    {
      id: 0,
      src: chatIcon,
      title: isMyProfile ? "나와의 채팅" : "채팅하기",
      onClick: () =>
        // TODO: 나와의 채팅 -> 내 채팅 table을 하나 생성해서 해야할듯
        isMyProfile ? console.log(userProfile?.id) : navigateChattingRoom(),
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
      footerItems: isMyProfile ? footerItems : footerItems.slice(0, 1),
    },
  };
}
export default useProfileFooter;
