interface FriendItemsType {
  id: number;
  title: string;
  onClick: () => void;
}

function useFriendMenu() {
  const FRIEND_MENU_ITEMS: FriendItemsType[] = [
    { id: 0, title: "채팅하기", onClick: () => console.log("채팅하기") },
    { id: 1, title: "프로필 보기", onClick: () => console.log("프로필 보기") },
    { id: 2, title: "숨김", onClick: () => console.log("숨김") },
    { id: 3, title: "차단", onClick: () => console.log("차단") },
  ];

  return {
    models: {
      FRIEND_MENU_ITEMS,
    },
  };
}

export default useFriendMenu;
