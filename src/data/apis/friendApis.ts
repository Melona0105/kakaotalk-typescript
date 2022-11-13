import { Friend } from "domain/entities/friendEntity";
import axiosInstance from "./axios";


const FRIEND_BASE_URL = "/friend";

const friendApis = {
  // TODO: 이후 avarar URL 자체를 url로 보관할 수 있는방법 찾아보기 -> n 한번 줄일 수 있을 듯 함
  getMyFriends: async () => {
    const { data } = await axiosInstance<Friend[]>({
      method: "GET",
      url: `${FRIEND_BASE_URL}`,
    });

    const myFriends = [...data].map(async (friend) => {
      let avatarURL;
      // try {
      //   avatarURL = await getUserAvatar(friend.id);
      // } catch (err) {
      //   console.log(err);
      // }

      return { ...friend, avatarURL };
    });
    return Promise.all(myFriends);
  },

  searchFriend: async (email: string) => {
    const { data } = await axiosInstance<Friend>({
      method: "GET",
      url: `${FRIEND_BASE_URL}/${email}`,
    });
    let avatarURL;
    // try {
    //   avatarURL = await getUserAvatar(data.id);
    // } catch (err) {
    //   console.log(err);
    // }

    const result: Friend = {
      ...data,
      avatarURL,
    };

    return result;
  },

  getFriend: async (friend_id: string) => {
    const { data } = await axiosInstance({
      method: "GET",
      url: `${FRIEND_BASE_URL}/get/${friend_id}`,
    });

    let avatarURL;
    // try {
    //   avatarURL = await getUserAvatar(data.id);
    // } catch (err) {
    //   console.log(err);
    // }

    const result: Friend = {
      ...data,
      avatarURL,
    };

    return result;
  },

  addFriend: async (friend_id: string) => {
    await axiosInstance({
      method: "POST",
      url: `${FRIEND_BASE_URL}`,
      data: { friend_id },
    });
  },

  hideFriend: async (friend_id: string) => {
    await axiosInstance({
      method: "POST",
      url: `${FRIEND_BASE_URL}/hide`,
      data: { friend_id },
    });
  },

  blockFriend: async (friend_id: string) => {
    await axiosInstance({
      method: "POST",
      url: `${FRIEND_BASE_URL}/block`,
      data: { friend_id },
    });
  },

  rollbackFriend: async (friend_id: string) => {
    await axiosInstance({
      method: "POST",
      url: `${FRIEND_BASE_URL}/rollback`,
      data: { friend_id },
    });
  },

  getMyHiddenFriends: async (): Promise<Friend[]> => {
    const { data } = await axiosInstance<Friend[]>({
      method: "GET",
      url: `${FRIEND_BASE_URL}/hide`,
    });
    const myFriends = [...data].map(async (friend) => {
      let avatarURL;
      // try {
      //   avatarURL = await getUserAvatar(friend.id);
      // } catch (err) {
      //   console.log(err);
      // }

      return { ...friend, avatarURL };
    });
    return Promise.all(myFriends);
  },
  getMyBlockedFriends: async (): Promise<Friend[]> => {
    const { data } = await axiosInstance<Friend[]>({
      method: "GET",
      url: `${FRIEND_BASE_URL}/block`,
    });

    const myFriends = [...data].map(async (friend) => {
      let avatarURL;
      // try {
      //   avatarURL = await getUserAvatar(friend.id);
      // } catch (err) {
      //   console.log(err);
      // }

      return { ...friend, avatarURL };
    });
    return Promise.all(myFriends);
  },

  delteFriend: async (friend_id: string) => {
    await axiosInstance({
      method: "DELETE",
      url: `${FRIEND_BASE_URL}`,
      data: { friend_id },
    });
  },
};

export default friendApis;
