import { ChattingRepository } from "domain/repositories/chattingRepository";

class ChattingService {
  constructor(private readonly chattingRepository: ChattingRepository) {}

  getChattings = async (roomId: string) =>
    await this.chattingRepository.getChattings(roomId);
}

export default ChattingService;
