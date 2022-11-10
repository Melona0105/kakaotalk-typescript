import userApis from "apis/userApis";
import { onAuthStateChanged } from "firebase/auth";
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
import {
  AuthContextType,
  AuthProviderStateType,
} from "./authProvider.interface";

const AuthContext = createContext<AuthContextType>({
  firebaseProfile: null,
  userProfile: null,
});

const initialValue: AuthProviderStateType = {
  firebaseProfile: null,
  loading: true,
  userProfile: null,
};

/**
 * 로그인 정보를 앱 전체에 전달해주기위한 프로바이더입니다.
 */
function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState(initialValue);

  /**
   * 유저정보를 쿼리합니다.
   */
  const { refetch } = useQuery(
    [QUERY_KEYS.PROFILE.GET_MY_USER_PROFILE, state.firebaseProfile?.uid],
    async () => await userApis.getMyUserProfile(),
    {
      enabled: false,
      onSuccess: async (data) => {
        const avatar = await userApis.getUserAvatar(data[0].id);
        setState((prev) => ({
          ...prev,
          loading: false,
          userProfile: { ...data[0], avatarURL: avatar },
        }));
      },
    }
  );

  /**
   * firebase 로그인을 감지하여 유저 프로필을 state에 할당합니다.
   */
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setState((prev) => ({ ...prev, firebaseProfile: user }));
      } else {
        setState({ loading: false, userProfile: null, firebaseProfile: null });
      }
    });
  }, []);

  /**
   * firebase로그인이 변화할경우, firebase로그인이 존재할때만 userProfile을 쿼리하는 함수입니다.
   */
  useEffect(() => {
    if (state.firebaseProfile) {
      refetch();
    }
  }, [state.firebaseProfile]);

  if (state.loading) return <Loading />;

  return (
    <AuthContext.Provider
      value={{
        firebaseProfile: state.firebaseProfile,
        userProfile: state.userProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export function useAuthContext() {
  return useContext(AuthContext);
}
