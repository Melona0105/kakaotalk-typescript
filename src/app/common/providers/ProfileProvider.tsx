import { QUERY_KEYS } from "app/libs/reactQuery/queryKeys";
import { User } from "domain/entities/userEntity";
import { useQuery } from "react-query";
import { useServiceContext } from "./ServiceProvider";
import Loading from "../components/Loading";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface ProfileContextType {
  userProfile: User | null;
}

interface ProfileProviderStateType extends ProfileContextType {
  loading: boolean;
}

const ProfileContext = createContext<ProfileContextType>({
  userProfile: null,
});

const initialValue: ProfileProviderStateType = {
  loading: true,
  userProfile: null,
};

/**
 * 로그인 정보를 앱 전체에 전달해주기위한 프로바이더입니다.
 */
function ProfileProvider({ children }: { children: ReactNode }) {
  const { userService } = useServiceContext();
  const [state, setState] = useState(initialValue);

  const { refetch } = useQuery({
    queryKey: QUERY_KEYS.PROFILE.GET_MY_USER_PROFILE,
    queryFn: async () => await userService.getMyUserProfile(),
    enabled: false,
    onSuccess: (data) =>
      setState((prev) => ({ ...prev, userProfile: data!, loading: false })),
  });

  /**
   * firebase 로그인을 감지하여 유저 프로필을 state에 할당합니다.
   */
  useEffect(() => {
    userService.onAuthStateChanged(async (user) => {
      if (user) {
        refetch();
      } else {
        setState((prev) => ({
          ...prev,
          loading: false,
          userProfile: null,
        }));
      }
    });
  }, [userService]);

  if (state.loading) return <Loading />;

  return (
    <ProfileContext.Provider value={{ userProfile: state.userProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export default ProfileProvider;

export function useProfileContext() {
  return useContext(ProfileContext);
}
