import { User } from "domain/entities/userEntity";

export interface UserRepository {
  onAuthStateChanged(callback: (user?: User) => void): void;
  signIn(email: string, password: string): Promise<User | undefined>;
  signUp(
    email: string,
    password: string,
    username: string,
    termsIndexes: JSON
  ): Promise<User | undefined>;
  sendResetPasswordEmail(email: string): Promise<void>;
  signOut(): Promise<void>;
  updateMyUserProfile(
    username?: string,
    summary?: string,
    file?: File
  ): Promise<void>;
  getMyUserProfile(auth?: any): Promise<User | undefined>;
  getUserAvatar(userId: string): Promise<string | undefined>;
}
