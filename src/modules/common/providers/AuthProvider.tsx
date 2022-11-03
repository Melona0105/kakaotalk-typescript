import { onAuthStateChanged, User } from "firebase/auth";
import { QUERY_KEYS } from "libs/reactQuery/queryKeys";
import { useQuery } from "react-query";
import { auth } from "../../../libs/firebase/firebaseAuth";
import userService from "../../../services/userService";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export interface UserType {
  id: string;
  email: string;
  username: string;
  agree_terms: JSON;
  summary?: string;
}

interface AuthContextType {
  firebaseProfile: User | null;
  userProfile: UserType | null;
}

const AuthContext = createContext<AuthContextType>({
  firebaseProfile: null,
  userProfile: null,
});

/**
 * 로그인 정보를 앱 전체에 전달해주기위한 프로바이더입니다.
 */
function AuthProvider({ children }: { children: ReactNode }) {
  const [firebaseProfile, setFirebaseProfile] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserType | null>(null);

  /**
   * 유저정보를 쿼리하는 합니다.
   */
  useQuery(
    [QUERY_KEYS.GET_MY_USER_PROFILE],
    async () => await userService.getMyUserProfile(),
    { enabled: !!firebaseProfile, onSuccess: (data) => setUserProfile(data[0]) }
  );
  /**
   * firebase 로그인을 감지하여 유저 프로필을 state에 할당합니다.
   */
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setFirebaseProfile(user);
      } else {
        setFirebaseProfile(null);
        setUserProfile(null);
      }
    });
  }, []);

  const MemorizedProvider = useMemo(
    () => (
      <AuthContext.Provider value={{ firebaseProfile, userProfile }}>
        {children}
      </AuthContext.Provider>
    ),
    [firebaseProfile, userProfile]
  );

  return MemorizedProvider;
}

export default AuthProvider;

export function useAuthContext() {
  return useContext(AuthContext);
}
