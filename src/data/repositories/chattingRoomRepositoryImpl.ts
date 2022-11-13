import { auth, storage } from "app/libs/firebase/firebaseAuth";
import ChattingRoomAPIs from "data/apis/chattingRoomAPIs";
import { Chatting } from "domain/entities/chattingEntity";
import { ChattingRoom } from "domain/entities/chattingRoomRntity";
import { User } from "domain/entities/userEntity";
import { ChattingRoomRepository } from "domain/repositories/chattingRoomRepository";
import { User as FirebaseUser } from "firebase/auth";
import { getDownloadURL, ref } from "firebase/storage";
import { REPOSITORY_ERROR_MESSAGE } from "./utils/errorMessage";

class ChattingRoomRepositoryImpl implements ChattingRoomRepository {
  constructor(private readonly chattingRoomAPIs: ChattingRoomAPIs) {}

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

  getChattingRoom = async (friendId: string): Promise<ChattingRoom> => {
    const token = await this.getFriebaseToken(auth.currentUser!);
    if (!token) {
      throw new Error(REPOSITORY_ERROR_MESSAGE.TOKEN_NOT_FOUND);
    }

    return await this.chattingRoomAPIs.getChattingRoom(token, friendId);
  };

  getChattingRoomInfo = async (roomId: string): Promise<User> => {
    const token = await this.getFriebaseToken(auth.currentUser!);
    if (!token) {
      throw new Error(REPOSITORY_ERROR_MESSAGE.TOKEN_NOT_FOUND);
    }

    const data = await this.chattingRoomAPIs.getChattingRoomInfo(token, roomId);

    let avatarURL;
    try {
      avatarURL = await this.getFriendAvatar(data.id);
    } catch (err) {
      // console.log(err);
    }

    return { ...data, avatarURL };
  };

  getMyChattingRooms = async (): Promise<Chatting[]> => {
    const token = await this.getFriebaseToken(auth.currentUser!);
    if (!token) {
      throw new Error(REPOSITORY_ERROR_MESSAGE.TOKEN_NOT_FOUND);
    }

    const data = await this.chattingRoomAPIs.getMyChattingRooms(token);

    const myRooms = [...data].map(async (friend) => {
      let avatarURL;
      try {
        avatarURL = await this.getFriendAvatar(friend.senderId!);
      } catch (err) {
        // console.log(err);
      }
      return { ...friend, avatarURL };
    });

    return Promise.all(myRooms);
  };

  leaveChattingRoom = async (roomId: string | number): Promise<void> => {
    const token = await this.getFriebaseToken(auth.currentUser!);
    if (!token) {
      throw new Error(REPOSITORY_ERROR_MESSAGE.TOKEN_NOT_FOUND);
    }

    return await this.chattingRoomAPIs.leaveChattingRoom(token, roomId);
  };
}

export default ChattingRoomRepositoryImpl;
