import { ChattingRoomRepository } from "domain/repositories/chattingRoomRepository";

class ChattingRoomService {
  constructor(
    private readonly chattingRoomRepository: ChattingRoomRepository
  ) {}

  getChattingRoom = async (friendId: string) =>
    await this.chattingRoomRepository.getChattingRoom(friendId);

  getChattingRoomInfo = async (roomId: string) =>
    await this.chattingRoomRepository.getChattingRoomInfo(roomId);

  getMyChattingRooms = async () =>
    await this.chattingRoomRepository.getMyChattingRooms();

  leaveChattingRoom = async (roomId: string | number) =>
    await this.chattingRoomRepository.leaveChattingRoom(roomId);
}

export default ChattingRoomService;
