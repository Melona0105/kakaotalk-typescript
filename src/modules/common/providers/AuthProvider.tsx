import userApis from "apis/userApis";
import { onAuthStateChanged, User } from "firebase/auth";
import { QUERY_KEYS } from "libs/reactQuery/queryKeys";
import { useQuery } from "react-query";
import { auth } from "../../../libs/firebase/firebaseAuth";
import Loading from "../components/Loading";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export interface UserType {
  id: string;
  email: string;
  username: string;
  agree_terms?: JSON;
  summary?: string;
  avatarURL?: string;
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
  const [loading, setLoading] = useState(true);
  const [firebaseProfile, setFirebaseProfile] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserType | null>(null);

  /**
   * 유저정보를 쿼리하는 합니다.
   */
  useQuery(
    [QUERY_KEYS.GET_MY_USER_PROFILE],
    async () => await userApis.getMyUserProfile(),
    {
      enabled: !!firebaseProfile,
      onSuccess: async (data) => {
        const avatar = await userApis.getUserAvatar(data[0].id);
        setUserProfile({ ...data[0], avatarURL: avatar });
        setLoading(false);
      },
    }
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
        setLoading(false);
      }
    });
  }, []);

  if (loading) return <Loading />;

  return (
    <AuthContext.Provider value={{ firebaseProfile, userProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export function useAuthContext() {
  return useContext(AuthContext);
}
