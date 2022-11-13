import { FriendRepository } from "domain/repositories/friendRepository";

class FriendService {
  constructor(private readonly friendRepository: FriendRepository) {}

  getMyFriends = async () => await this.friendRepository.getMyFriends();

  getFriendByEmail = async (email: string) =>
    await this.friendRepository.getFriendByEmail(email);

  getFriend = async (friendId: string) =>
    await this.friendRepository.getFriend(friendId);

  addFriend = async (friendId: string) =>
    await this.friendRepository.addFriend(friendId);

  hideFriend = async (friendId: string) =>
    await this.friendRepository.hideFriend(friendId);

  blockFriend = async (friendId: string) =>
    await this.friendRepository.blockFriend(friendId);

  rollbackFriend = async (friendId: string) =>
    await this.friendRepository.rollbackFriend(friendId);

  delteFriend = async (friendId: string) =>
    await this.friendRepository.delteFriend(friendId);

  getMyHiddenFriends = async () =>
    await this.friendRepository.getMyHiddenFriends();

  getMyBlockedFriends = async () =>
    await this.friendRepository.getMyBlockedFriends();
}

export default FriendService;
