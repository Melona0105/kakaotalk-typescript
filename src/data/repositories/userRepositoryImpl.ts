import { auth, storage } from "app/libs/firebase/firebaseAuth";
import UserAPIs from "data/apis/userAPIs";
import { User } from "domain/entities/userEntity";
import { UserRepository } from "domain/repositories/userRepository";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { REPOSITORY_ERROR_MESSAGE } from "./utils/errorMessage";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  User as FirebaseUser,
  signOut as firebaseSignOut,
} from "firebase/auth";

class UserRepositoryImpl implements UserRepository {
  constructor(private readonly userAPIs: UserAPIs) {
    auth.onAuthStateChanged(async () => {
      if (auth.currentUser) {
        const user = await this.getMyUserProfile();
        this._onAuthStateChanged?.(user);
      } else {
        this._onAuthStateChanged?.(undefined);
      }
    });
  }

  private _onAuthStateChanged?: (user?: User) => void;

  private getFriebaseToken = async (
    firebaseUser?: FirebaseUser | null
  ): Promise<string | undefined> => {
    try {
      return await firebaseUser?.getIdToken();
    } catch (err) {
      console.log(err);
    }
  };

  onAuthStateChanged = (callback: (user?: User) => void) => {
    this._onAuthStateChanged = callback;
  };

  getMyUserProfile = async (): Promise<User | undefined> => {
    try {
      const firebaseToken = await this.getFriebaseToken(auth.currentUser);

      if (!firebaseToken) {
        throw new Error(REPOSITORY_ERROR_MESSAGE.TOKEN_NOT_FOUND);
      }

      const profile = await this.userAPIs.getMyUserProfile(firebaseToken);
      const avatarURL = await this.getUserAvatar(profile.id);

      return { ...profile, avatarURL };
    } catch (err) {
      console.log(err);
    }
  };

  signIn = async (email: string, password: string) => {
    const { user: firebaseUser } = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    if (!firebaseUser) {
      throw new Error(REPOSITORY_ERROR_MESSAGE.FIREBASE_USER_NOT_FOUND);
    }

    const user = await this.getMyUserProfile();
    this._onAuthStateChanged?.(user);
    return user;
  };

  signUp = async (
    email: string,
    password: string,
    username: string,
    termsIndexes: JSON
  ) => {
    const { user: firebaseUser } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    if (!firebaseUser) {
      throw new Error(REPOSITORY_ERROR_MESSAGE.FIREBASE_USER_NOT_FOUND);
    }
    const firebaseToken = await this.getFriebaseToken(firebaseUser);

    if (!firebaseToken) {
      throw new Error(REPOSITORY_ERROR_MESSAGE.TOKEN_NOT_FOUND);
    }

    await this.userAPIs.signUp(firebaseToken, email, username, termsIndexes);
    const user = await this.getMyUserProfile();
    this._onAuthStateChanged?.(user);
    return user;
  };

  sendResetPasswordEmail = async (email: string) => {
    try {
      return await sendPasswordResetEmail(auth, email);
    } catch (err) {
      console.log(err);
    }
  };

  signOut = async () => {
    try {
      return firebaseSignOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  updateMyUserProfile = async (
    username?: string,
    summary?: string,
    file?: File
  ) => {
    try {
      const firebaseToken = await this.getFriebaseToken(auth.currentUser!);

      if (!firebaseToken) {
        throw new Error(REPOSITORY_ERROR_MESSAGE.TOKEN_NOT_FOUND);
      }

      await this.userAPIs.updateMyUserProfile(firebaseToken, username, summary);
      if (file) {
        const storageRef = ref(storage, auth.currentUser?.uid);
        await uploadBytes(storageRef, file);
      }
    } catch (err) {
      console.log(err);
    }
  };

  getUserAvatar = async (userId: string) => {
    try {
      const avatarURL = await getDownloadURL(ref(storage, userId));
      if (avatarURL) {
        return avatarURL;
      }
    } catch (err) {
      return;
    }
  };
}

export default UserRepositoryImpl;
