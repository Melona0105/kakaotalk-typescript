import chatIcon from "assets/icons/profile_chat.png";
import editIcon from "assets/icons/profile_edit.png";

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
  const FOOTER_ITEMS: FooterItemType[] = [
    {
      id: 0,
      src: chatIcon,
      title: isMyProfile ? "나와의 채팅" : "채팅하기",
      onClick: () =>
        console.log(isMyProfile ? "나와의 채팅" : "이 유저와 채팅하기"),
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
      FOOTER_ITEMS: isMyProfile ? FOOTER_ITEMS : FOOTER_ITEMS.slice(0, 1),
    },
  };
}
export default useProfileFooter;
