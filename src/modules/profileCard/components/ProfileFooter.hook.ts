import chatIcon from "assets/icons/profile_chat.png";
import editIcon from "assets/icons/profile_edit.png";

interface FooterItemType {
  id: number;
  src: string;
  title: string;
  onClick: () => void;
}

function useProfileFooter(onEditProfilePress: () => void) {
  const FOOTER_ITEMS: FooterItemType[] = [
    {
      id: 0,
      src: chatIcon,
      title: "나와의 채팅",
      onClick: () => console.log("나와의 채팅"),
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
      FOOTER_ITEMS,
    },
  };
}
export default useProfileFooter;
