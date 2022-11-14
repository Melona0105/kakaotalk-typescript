import { auth, storage } from "app/libs/firebase/firebaseAuth";
import FriendAPIs from "data/apis/friendAPIs";
import { Friend } from "domain/entities/friendEntity";
import { FriendRepository } from "domain/repositories/friendRepository";
import { User as FirebaseUser } from "firebase/auth";
import { getDownloadURL, ref } from "firebase/storage";
import { REPOSITORY_ERROR_MESSAGE } from "./utils/errorMessage";

class FriendRepositoryImpl implements FriendRepository {
  constructor(private readonly friendAPIs: FriendAPIs) {}

  private getFriebaseToken = async (
    firebaseUser?: FirebaseUser | null
  ): Promise<string | undefined> => {
    try {
      return await firebaseUser?.getIdToken();
    } catch (err) {
      console.log(err);
    }
  };

  private getFriendAvatar = async (friendId: string) => {
    try {
      const avatarURL = await getDownloadURL(ref(storage, friendId));
      if (avatarURL) {
        return avatarURL;
      }
    } catch (err) {
      return;
    }
  };

  getMyFriends = async (): Promise<Friend[]> => {
    const token = await this.getFriebaseToken(auth.currentUser!);
    if (!token) {
      throw new Error(REPOSITORY_ERROR_MESSAGE.TOKEN_NOT_FOUND);
    }

    const data = await this.friendAPIs.getMyFriends(token);

    const myFriends = [...data].map(async (friend) => {
      let avatarURL;
      try {
        avatarURL = await this.getFriendAvatar(friend.id);
      } catch (err) {
        // console.log(err);
      }
      return { ...friend, avatarURL };
    });
    return Promise.all(myFriends);
  };

  getFriendByEmail = async (email: string): Promise<Friend> => {
    const token = await this.getFriebaseToken(auth.currentUser!);
    if (!token) {
      throw new Error(REPOSITORY_ERROR_MESSAGE.TOKEN_NOT_FOUND);
    }

    const data = await this.friendAPIs.getFriendByEmail(token, email);
    let avatarURL;
    try {
      avatarURL = await this.getFriendAvatar(data.id);
    } catch (err) {
      // console.log(err);
    }

    return { ...data, avatarURL };
  };

  getFriend = async (friendId: string): Promise<Friend> => {
    const token = await this.getFriebaseToken(auth.currentUser!);
    if (!token) {
      throw new Error(REPOSITORY_ERROR_MESSAGE.TOKEN_NOT_FOUND);
    }

    const data = await this.friendAPIs.getFriend(token, friendId);
    let avatarURL;
    try {
      avatarURL = await this.getFriendAvatar(data.id);
    } catch (err) {
      // console.log(err);
    }

    return { ...data, avatarURL };
  };

  addFriend = async (friendId: string) => {
    const token = await this.getFriebaseToken(auth.currentUser!);
    if (!token) {
      throw new Error(REPOSITORY_ERROR_MESSAGE.TOKEN_NOT_FOUND);
    }

    await this.friendAPIs.addFriend(token, friendId);
  };

  hideFriend = async (friendId: string) => {
    const token = await this.getFriebaseToken(auth.currentUser!);
    if (!token) {
      throw new Error(REPOSITORY_ERROR_MESSAGE.TOKEN_NOT_FOUND);
    }

    await this.friendAPIs.hideFriend(token, friendId);
  };

  blockFriend = async (friendId: string) => {
    const token = await this.getFriebaseToken(auth.currentUser!);
    if (!token) {
      throw new Error(REPOSITORY_ERROR_MESSAGE.TOKEN_NOT_FOUND);
    }

    await this.friendAPIs.blockFriend(token, friendId);
  };

  rollbackFriend = async (friendId: string) => {
    const token = await this.getFriebaseToken(auth.currentUser!);
    if (!token) {
      throw new Error(REPOSITORY_ERROR_MESSAGE.TOKEN_NOT_FOUND);
    }

    await this.friendAPIs.rollbackFriend(token, friendId);
  };

  delteFriend = async (friendId: string) => {
    const token = await this.getFriebaseToken(auth.currentUser!);
    if (!token) {
      throw new Error(REPOSITORY_ERROR_MESSAGE.TOKEN_NOT_FOUND);
    }

    await this.friendAPIs.delteFriend(token, friendId);
  };

  getMyHiddenFriends = async (): Promise<Friend[]> => {
    const token = await this.getFriebaseToken(auth.currentUser!);
    if (!token) {
      throw new Error(REPOSITORY_ERROR_MESSAGE.TOKEN_NOT_FOUND);
    }

    const data = await this.friendAPIs.getMyHiddenFriends(token);

    const myHiddenFriends = [...data].map(async (friend) => {
      let avatarURL;
      try {
        avatarURL = await this.getFriendAvatar(friend.id);
      } catch (err) {
        // console.log(err);
      }

      return { ...friend, avatarURL };
    });

    return Promise.all(myHiddenFriends);
  };

  getMyBlockedFriends = async (): Promise<Friend[]> => {
    const token = await this.getFriebaseToken(auth.currentUser!);
    if (!token) {
      throw new Error(REPOSITORY_ERROR_MESSAGE.TOKEN_NOT_FOUND);
    }

    const data = await this.friendAPIs.getMyBlockedFriends(token);

    const myBlockedFriends = [...data].map(async (friend) => {
      let avatarURL;
      try {
        avatarURL = await this.getFriendAvatar(friend.id);
      } catch (err) {
        // console.log(err);
      }

      return { ...friend, avatarURL };
    });

    return Promise.all(myBlockedFriends);
  };
}

export default FriendRepositoryImpl;
