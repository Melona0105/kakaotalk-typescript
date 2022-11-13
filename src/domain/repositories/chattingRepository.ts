import { Chatting } from "domain/entities/chattingEntity";

export interface ChattingRepository {
  getChattings(roomId: string): Promise<Chatting[]>;
}
