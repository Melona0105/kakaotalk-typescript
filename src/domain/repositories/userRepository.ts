import { User } from "domain/entities/user";

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
  getUserAvatar(userId: string): Promise<string | undefined>;
}
