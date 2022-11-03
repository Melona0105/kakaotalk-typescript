import userApis from "../apis/userApis";
import { firebaseSignIn, firebaseSignUp } from "../libs/firebase/firebaseAuth";
import {
  CreateUserProfileApiInput,
  UpdateUserProfileApiInput,
} from "../utils/interfaces/apiInterface";

/**
 * user와 관련된 api 콜을 요청하고 응답에따라 핸들링하는 부분입니다.
 */
const userService = {
  signIn: async ({ email, password }: CreateUserProfileApiInput) => {
    await firebaseSignIn(email, password);
  },
  // 회원가입
  signUp: async ({
    email,
    password,
    username,
    termsIndexes,
  }: CreateUserProfileApiInput) => {
    // firebase 회원가입 진행 후, 서버에 쿼리를 합니다.
    await firebaseSignUp(email, password);
    await userApis.signUp({ email, username, termsIndexes });
  },

  getMyUserProfile: async () => {
    const { data } = await userApis.getMyUserProfile();
    return data;
  },

  updateMyUserProfile: async ({
    username,
    summary,
  }: UpdateUserProfileApiInput) => {
    await userApis.updateMyUserProfile({ username, summary });
  },
};

export default userService;
