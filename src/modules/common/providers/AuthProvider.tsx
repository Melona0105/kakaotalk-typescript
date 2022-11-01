import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../../../libs/firebase/firebaseAuth";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface AuthContextType {
  firebaseProfile: User | null;
  userProfile: any;
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
  const [userProfile, setUserProfile] = useState(null);

  /**
   * firebase 로그인을 감지하여 유저 프로필을 state에 할당합니다.
   */
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setFirebaseProfile(user);
      } else {
        setFirebaseProfile(null);
      }
    });
  }, []);

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
