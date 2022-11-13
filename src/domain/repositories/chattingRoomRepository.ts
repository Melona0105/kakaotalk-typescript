import { Chatting } from "domain/entities/chattingEntity";
import { ChattingRoom } from "domain/entities/chattingRoomRntity";
import { User } from "domain/entities/userEntity";

export interface ChattingRoomRepository {
  getChattingRoom(friendId: string): Promise<ChattingRoom>;
  getChattingRoomInfo(roomId: string): Promise<User>;
  getMyChattingRooms(): Promise<Chatting[]>;
  leaveChattingRoom(roomId: string | number): Promise<void>;
}
