import { User } from "domain/entities/user";
import UserService from "domain/services/userService";

export interface UserType {
  id: string;
  email: string;
  username: string;
  agree_terms?: JSON;
  summary?: string;
  avatarURL?: string;
}
export interface AuthContextType {
  firebaseProfile: null;
  userProfile: User | null;
  userService: UserService;
}

export interface AuthProviderStateType extends AuthContextType {
  loading: boolean;
}
