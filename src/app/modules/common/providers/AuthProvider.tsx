import { QUERY_KEYS } from "app/libs/reactQuery/queryKeys";
import axiosInstance from "data/apis/axios";
import UserAPIs from "data/apis/user";
import UserRepositoryImpl from "data/repositories/user";
import UserService from "domain/services/user";
import { useQueryClient } from "react-query";
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

const userService = new UserService(
  new UserRepositoryImpl(new UserAPIs(axiosInstance))
);

const AuthContext = createContext<AuthContextType>({
  firebaseProfile: null,
  userProfile: null,
  userService,
});

const initialValue: AuthProviderStateType = {
  firebaseProfile: null,
  loading: true,
  userProfile: null,
  userService,
};

/**
 * 로그인 정보를 앱 전체에 전달해주기위한 프로바이더입니다.
 */
function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState(initialValue);
  const queryClient = useQueryClient();

  /**
   * firebase 로그인을 감지하여 유저 프로필을 state에 할당합니다.
   */
  useEffect(() => {
    userService.onAuthStateChanged(async (user) => {
      queryClient.setQueryData(
        [QUERY_KEYS.PROFILE.GET_MY_USER_PROFILE, user?.id],
        user
      );
      if (user) {
        setState((prev) => ({ ...prev, userProfile: user, loading: false }));
      } else {
        setState((prev) => ({
          ...prev,
          loading: false,
          userProfile: null,
          firebaseProfile: null,
        }));
      }
    });
  }, [queryClient]);

  if (state.loading) return <Loading />;

  return (
    <AuthContext.Provider
      value={{
        // TODO: firebase유저삭제
        firebaseProfile: state.firebaseProfile,
        userProfile: state.userProfile,
        userService,
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
