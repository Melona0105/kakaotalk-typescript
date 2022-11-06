import { getUserAvatar } from "libs/firebase/firebaseAuth";
import { FriendType } from "utils/interfaces/apiInterface";
import axiosInstance from "./axios";

const FRIEND_BASE_URL = "/friend";

const friendApis = {
  // TODO: 이후 avarar URL 자체를 url로 보관할 수 있는방법 찾아보기 -> n 한번 줄일 수 있을 듯 함
  getMyFriends: async () => {
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

  getFriend: async (email: string) => {
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

  addFriend: async (friendId: string) => {
    await axiosInstance({
      method: "POST",
      url: `${FRIEND_BASE_URL}`,
      data: { friendId },
    });
  },

  hideFriend: async (friendId: string) =>
    await axiosInstance({
      method: "POST",
      url: `${FRIEND_BASE_URL}/hide`,
      data: { friendId },
    }),

  blockFriend: async (friendId: string) =>
    await axiosInstance({
      method: "POST",
      url: `${FRIEND_BASE_URL}/block`,
      data: { friendId },
    }),

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
};

export default friendApis;
