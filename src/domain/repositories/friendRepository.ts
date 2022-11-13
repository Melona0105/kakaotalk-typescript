import { Friend } from "domain/entities/friendEntity";

export interface FriendRepository {
  getMyFriends(): Promise<Friend>;
}
