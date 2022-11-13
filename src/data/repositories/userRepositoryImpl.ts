import { auth, storage } from "app/libs/firebase/firebaseAuth";
import UserAPIs from "data/apis/userAPI";
import { User } from "domain/entities/user";
import { UserRepository } from "domain/repositories/userRepository";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  User as FirebaseUser,
  signOut as firebaseSignOut,
} from "firebase/auth";

class UserRepositoryImpl implements UserRepository {
  constructor(private readonly userAPIs: UserAPIs) {
    auth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        const user = await this.getUserWithFirebaseUser(firebaseUser);
        this._onAuthStateChanged?.(user);
      } else {
        this._onAuthStateChanged?.(undefined);
      }
    });
  }

  private _onAuthStateChanged?: (user?: User) => void;

  onAuthStateChanged = (callback: (user?: User) => void) => {
    this._onAuthStateChanged = callback;
  };

  private getUserWithFirebaseUser = async (firebaseUser: FirebaseUser) => {
    try {
      const firebaseToken = await this.getFriebaseToken(firebaseUser);

      if (!firebaseToken) {
        throw new Error("not found firebaseToken ");
      }

      const profile = await this.userAPIs.getMyUserProfile(firebaseToken);
      const avatarURL = await this.getUserAvatar(profile.id);

      return { ...profile, avatarURL };
    } catch (err) {
      console.log(err);
    }
  };

  private getFriebaseToken = async (
    firebaseUser: FirebaseUser
  ): Promise<string | undefined> => {
    try {
      return await firebaseUser.getIdToken();
    } catch (err) {
      console.log(err);
    }
  };

  signIn = async (email: string, password: string) => {
    try {
      const { user: firebaseUser } = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (!firebaseUser) {
        throw new Error("not found firebaseUser");
      }

      const user = await this.getUserWithFirebaseUser(firebaseUser);
      this._onAuthStateChanged?.(user);
      return user;
    } catch (err) {
      console.log(err);
    }
  };

  signUp = async (
    email: string,
    password: string,
    username: string,
    termsIndexes: JSON
  ) => {
    try {
      const { user: firebaseUser } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (!firebaseUser) {
        throw new Error("not found firebaseUser");
      }
      const firebaseToken = await this.getFriebaseToken(firebaseUser);

      if (!firebaseToken) {
        throw new Error("not found firebaseToken ");
      }

      await this.userAPIs.signUp(firebaseToken, email, username, termsIndexes);
      const user = await this.getUserWithFirebaseUser(firebaseUser);
      this._onAuthStateChanged?.(user);
      return user;
    } catch (err) {
      console.log(err);
    }
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
        throw new Error("not found firebaseToken ");
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
      } else {
        return "adsf";
      }
    } catch (err) {
      console.log(err);
    }
  };
}

export default UserRepositoryImpl;
