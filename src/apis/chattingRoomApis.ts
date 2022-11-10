import { ChattingRoomType } from "apis/interfaces/apiInterface";
import { UserType } from "modules/common/providers/authProvider.interface";
import axiosInstance from "./axios";
import userApis from "./userApis";

const CHATTING_ROOM_BASE_URL = "/room";

const chattingRoomApis = {
  // 선태한 친구와의 채팅방을 찾고, 없으면 생성한 뒤, roomId를 리턴합니다.
  getChattingRoom: async (friendId: string) => {
    console.log("getChattingRoom");
    const { data } = await axiosInstance<ChattingRoomType>({
      method: "GET",
      url: `${CHATTING_ROOM_BASE_URL}/${friendId}`,
    });
    return data;
  },

  // 채팅방 정보(기존채팅 및 유저정보)를 가져옵니다.
  getChattingRoomInfo: async (roomId: string) => {
    console.log("getChattingRoomInfo");
    const { data } = await axiosInstance<UserType>({
      method: "GET",
      url: `${CHATTING_ROOM_BASE_URL}/get_room_info/${roomId}`,
    });

    const avatarURL = await userApis.getUserAvatar(data.id);

    return { ...data, avatarURL };
  },
};

export default chattingRoomApis;
