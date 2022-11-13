import { User } from "domain/entities/user";
import { UserRepository } from "domain/repositories/userRepository";

class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  onAuthStateChanged = (callback: (user?: User) => void) => {
    this.userRepository.onAuthStateChanged(callback);
  };

  signIn = async (email: string, password: string) => {
    await this.userRepository.signIn(email, password);
  };

  signUp = async (
    email: string,
    password: string,
    username: string,
    termsIndexes: JSON
  ) => {
    await this.userRepository.signUp(email, password, username, termsIndexes);
  };

  sendResetPasswordEmail = async (email: string) => {
    await this.userRepository.sendResetPasswordEmail(email);
  };

  signOut = async () => {
    await this.userRepository.signOut();
  };

  getUserAvatar = async (userId: string): Promise<string | undefined> => {
    return await this.getUserAvatar(userId);
  };

  updateMyUserProfile = async (
    username?: string,
    summary?: string,
    file?: File
  ) => {
    await this.updateMyUserProfile(username, summary, file);
  };
}

export default UserService;
