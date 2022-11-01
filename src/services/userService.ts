import userApis from "../apis/userApis";
import { firebaseSignUp } from "../libs/firebase/firebaseAuth";
import { UserApi } from "../utils/interfaces/apiInterface";

/**
 * user와 관련된 api 콜을 요청하고 응답에따라 핸들링하는 부분입니다.
 */
const userService = {
  // 회원가입
  signUp: async ({ email, password, username, termsIndexes }: UserApi) => {
    try {
      // firebase 회원가입 진행 후, 서버에 쿼리를 합니다.
      await firebaseSignUp(email, password);
      await userApis.signUp({ email, username, termsIndexes });
      console.log("성공적으로 가입되었습니다.");
    } catch (err) {
      console.log(err);
    }
  },

  getMyUserProfile: async () => {
    const { data } = await userApis.getMyUserProfile();
    return data;
  },
};

export default userService;
