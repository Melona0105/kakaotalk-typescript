import { User } from "domain/entities/user";
import { UserRepository } from "domain/repositories/user";

class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  onAuthStateChanged = (callback: (user?: User) => void) => {
    this.userRepository.onAuthStateChanged(callback);
  };

  signIn = async (email: string, password: string) => {
    await this.userRepository.signIn(email, password);
  };
}

export default UserService;
