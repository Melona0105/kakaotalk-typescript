import FriendAPIs from "data/apis/friendAPI";
import { Friend } from "domain/entities/friendEntity";
import { FriendRepository } from "domain/repositories/friendRepository";

class FriendRepositoryImpl implements FriendRepository {
  constructor(private readonly friendAPIs: FriendAPIs) {}

  getMyFriends = async (): Promise<Friend> => {
    return await this.getMyFriends();
  };
}

export default FriendRepositoryImpl;
