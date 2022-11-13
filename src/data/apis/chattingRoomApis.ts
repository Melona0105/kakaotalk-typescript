import { Chatting } from "domain/entities/chattingEntity";
import { User } from "domain/entities/userEntity";
import axiosInstance from "./axios";

const CHATTING_ROOM_BASE_URL = "/room";

const chattingRoomApis = {
  // 선택한 친구와의 채팅방을 찾고, 없으면 생성한 뒤, roomId를 리턴합니다.
  getChattingRoom: async (friendId: string) => {
    const { data } = await axiosInstance<Chatting>({
      method: "GET",
      url: `${CHATTING_ROOM_BASE_URL}/${friendId}`,
    });
    return data;
  },

  // 채팅방 정보(기존채팅 및 유저정보)를 가져옵니다.
  getChattingRoomInfo: async (roomId: string) => {
    const { data } = await axiosInstance<User>({
      method: "GET",
      url: `${CHATTING_ROOM_BASE_URL}/get_room_info/${roomId}`,
    });

    // TODO: 유저API통합
    // const avatarURL = await userApis.getUserAvatar(data.id);
    return data;
    // return { ...data, avatarURL };
  },

  // 나의 채팅방들을 쿼리합니다.
  getMyChattingRooms: async () => {
    const { data } = await axiosInstance<Chatting[]>({
      method: "GET",
      url: CHATTING_ROOM_BASE_URL,
    });

    const result = [...data].map(async (room) => {
      // const avatarURL = await userApis.getUserAvatar(room.user_id!);

      return data;
      // return { ...room, avatarURL };
    });

    return Promise.all(result);
  },

  leaveChattingRoom: async (roomId: string | number) => {
    await axiosInstance({
      method: "POST",
      url: CHATTING_ROOM_BASE_URL + "/leave",
      data: { roomId: roomId },
    });
  },
};

export default chattingRoomApis;
