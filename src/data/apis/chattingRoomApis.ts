import { AxiosInstance } from "axios";
import { Chatting } from "domain/entities/chattingEntity";
import { ChattingRoom } from "domain/entities/chattingRoomRntity";
import { User } from "domain/entities/userEntity";

const CHATTING_ROOM_BASE_URL = "/room";

class ChattingRoomAPIs {
  constructor(private readonly httpClient: AxiosInstance) {}
  getChattingRoom = async (token: string, friendId: string) => {
    const { data } = await this.httpClient<ChattingRoom>({
      method: "GET",
      url: `${CHATTING_ROOM_BASE_URL}/${friendId}`,
      headers: { authorization: token },
    });

    return data;
  };

  // 채팅방 정보(기존채팅 및 유저정보)를 가져옵니다.
  getChattingRoomInfo = async (token: string, roomId: string) => {
    const { data } = await this.httpClient<User>({
      method: "GET",
      url: `${CHATTING_ROOM_BASE_URL}/get_room_info/${roomId}`,
      headers: { authorization: token },
    });
    return data;
  };

  // 나의 채팅방들을 쿼리합니다.
  getMyChattingRooms = async (token: string) => {
    const { data } = await this.httpClient<Chatting[]>({
      method: "GET",
      url: CHATTING_ROOM_BASE_URL,
      headers: { authorization: token },
    });

    return data;
  };

  leaveChattingRoom = async (token: string, roomId: string | number) => {
    await this.httpClient({
      method: "POST",
      url: CHATTING_ROOM_BASE_URL + "/leave",
      data: { roomId: roomId },
      headers: { authorization: token },
    });
  };
}

export default ChattingRoomAPIs;
