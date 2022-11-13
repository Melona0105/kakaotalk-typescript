import { FriendRepository } from "domain/repositories/friendRepository";

class FriendService {
  constructor(private readonly friendRepository: FriendRepository) {}
}

export default FriendService;
