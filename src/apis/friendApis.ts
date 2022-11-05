import { getUserAvatar } from "libs/firebase/firebaseAuth";
import { FriendType } from "utils/interfaces/apiInterface";
import axiosInstance from "./axios";

const FRIEND_BASE_URL = "/friend";

const friendApis = {
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
};

export default friendApis;
