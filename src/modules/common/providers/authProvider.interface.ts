import { User } from "firebase/auth";

export interface UserType {
  id: string;
  email: string;
  username: string;
  agree_terms?: JSON;
  summary?: string;
  avatarURL?: string;
}
export interface AuthContextType {
  firebaseProfile: User | null;
  userProfile: UserType | null;
}

export interface AuthProviderStateType extends AuthContextType {
  loading: boolean;
}
