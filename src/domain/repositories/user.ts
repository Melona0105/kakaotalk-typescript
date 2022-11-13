import { User } from "domain/entities/user";

export interface UserRepository {
  signIn(email: string, password: string): Promise<User>;
  onAuthStateChanged(callback: (user?: User) => void): void;
}
