import { auth } from "app/libs/firebase/firebaseAuth";
import ChattingAPIs from "data/apis/chattingAPI";
import { Chatting } from "domain/entities/chattingEntity";
import { ChattingRepository } from "domain/repositories/chattingRepository";
import { User as FirebaseUser } from "firebase/auth";
import { REPOSITORY_ERROR_MESSAGE } from "./utils/errorMessage";

class ChattingRepositoryImpl implements ChattingRepository {
  constructor(private readonly cahttingAPIs: ChattingAPIs) {}

  private getFriebaseToken = async (
    firebaseUser?: FirebaseUser | null
  ): Promise<string | undefined> => {
    try {
      return await firebaseUser?.getIdToken();
    } catch (err) {
      console.log(err);
    }
  };

  getChattings = async (roomId: string): Promise<Chatting[]> => {
    const token = await this.getFriebaseToken(auth.currentUser!);
    if (!token) {
      throw new Error(REPOSITORY_ERROR_MESSAGE.TOKEN_NOT_FOUND);
    }

    return await this.cahttingAPIs.getChattings(token, roomId);
  };
}

export default ChattingRepositoryImpl;
