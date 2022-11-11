import { FriendType } from "apis/interfaces/apiInterface";
import { getUserAvatar } from "libs/firebase/firebaseAuth";
import axiosInstance from "./axios";

const FRIEND_BASE_URL = "/friend";

const friendApis = {
  // TODO: 이후 avarar URL 자체를 url로 보관할 수 있는방법 찾아보기 -> n 한번 줄일 수 있을 듯 함
  getMyFriends: async () => {
    console.log("getMyFriends");
    const { data } = await axiosInstance<FriendType[]>({
      method: "GET",
      url: `${FRIEND_BASE_URL}`,
    });

    const myFriends = [...data].map(async (friend) => {
      let avatarURL;
      try {
        avatarURL = await getUserAvatar(friend.id);
      } catch (err) {
        console.log(err);
      }

      return { ...friend, avatarURL };
    });
    return Promise.all(myFriends);
  },

  searchFriend: async (email: string) => {
    console.log("searchFriend");
    const { data } = await axiosInstance<FriendType>({
      method: "GET",
      url: `${FRIEND_BASE_URL}/${email}`,
    });
    let avatarURL;
    try {
      avatarURL = await getUserAvatar(data.id);
    } catch (err) {
      console.log(err);
    }

    const result: FriendType = {
      ...data,
      avatarURL,
    };

    return result;
  },

  getFriend: async (friend_id: string) => {
    console.log("getFriend");
    const { data } = await axiosInstance({
      method: "GET",
      url: `${FRIEND_BASE_URL}/get/${friend_id}`,
    });

    let avatarURL;
    try {
      avatarURL = await getUserAvatar(data.id);
    } catch (err) {
      console.log(err);
    }

    const result: FriendType = {
      ...data,
      avatarURL,
    };

    return result;
  },

  addFriend: async (friend_id: string) => {
    console.log("addFriend");
    await axiosInstance({
      method: "POST",
      url: `${FRIEND_BASE_URL}`,
      data: { friend_id },
    });
  },

  hideFriend: async (friend_id: string) => {
    console.log("hideFriend");
    await axiosInstance({
      method: "POST",
      url: `${FRIEND_BASE_URL}/hide`,
      data: { friend_id },
    });
  },

  blockFriend: async (friend_id: string) => {
    console.log("blockFriend");
    await axiosInstance({
      method: "POST",
      url: `${FRIEND_BASE_URL}/block`,
      data: { friend_id },
    });
  },

  rollbackFriend: async (friend_id: string) => {
    console.log("rollbackFriend");
    await axiosInstance({
      method: "POST",
      url: `${FRIEND_BASE_URL}/rollback`,
      data: { friend_id },
    });
  },

  getMyHiddenFriends: async (): Promise<FriendType[]> => {
    console.log("getMyHiddenFriends");
    const { data } = await axiosInstance<FriendType[]>({
      method: "GET",
      url: `${FRIEND_BASE_URL}/hide`,
    });
    const myFriends = [...data].map(async (friend) => {
      let avatarURL;
      try {
        avatarURL = await getUserAvatar(friend.id);
      } catch (err) {
        console.log(err);
      }

      return { ...friend, avatarURL };
    });
    return Promise.all(myFriends);
  },
  getMyBlockedFriends: async (): Promise<FriendType[]> => {
    console.log("getMyBlockedFriends");
    const { data } = await axiosInstance<FriendType[]>({
      method: "GET",
      url: `${FRIEND_BASE_URL}/block`,
    });

    const myFriends = [...data].map(async (friend) => {
      let avatarURL;
      try {
        avatarURL = await getUserAvatar(friend.id);
      } catch (err) {
        console.log(err);
      }

      return { ...friend, avatarURL };
    });
    return Promise.all(myFriends);
  },

  delteFriend: async (friend_id: string) => {
    console.log("delteFriend");
    await axiosInstance({
      method: "DELETE",
      url: `${FRIEND_BASE_URL}`,
      data: { friend_id },
    });
  },
};

export default friendApis;
