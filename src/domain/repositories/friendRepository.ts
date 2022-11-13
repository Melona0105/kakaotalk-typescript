import { Friend } from "domain/entities/friendEntity";

export interface FriendRepository {
  getMyFriends(): Promise<Friend[]>;
  getFriendByEmail(email: string): Promise<Friend>;
  getFriend(friendId: string): Promise<Friend>;
  addFriend(friendId: string): Promise<void>;
  hideFriend(friendId: string): Promise<void>;
  blockFriend(friendId: string): Promise<void>;
  rollbackFriend(friendId: string): Promise<void>;
  delteFriend(friendId: string): Promise<void>;
  getMyHiddenFriends(): Promise<Friend[]>;
  getMyBlockedFriends(): Promise<Friend[]>;
}
