import UserAPIs from "data/apis/user";
import { User } from "domain/entities/user";
import { UserRepository } from "domain/repositories/user";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { User as FirebaseUser } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_SOTRAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export const auth = getAuth(app);
(window as any).auth = auth;

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
    const firebaseToken = await firebaseUser.getIdToken();
    const profile = await this.userAPIs.getMyUserProfile(firebaseToken);
    return profile;
  };

  signIn = async (email: string, password: string) => {
    const { user: firebaseUser } = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    if (!firebaseUser) {
      throw new Error("ssibbal");
    }

    const user = await this.getUserWithFirebaseUser(firebaseUser);
    this._onAuthStateChanged?.(user);
    return user;
  };
}

export default UserRepositoryImpl;
