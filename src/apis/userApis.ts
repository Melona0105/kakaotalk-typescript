import { UserType } from "../modules/common/providers/AuthProvider";
import { UserApiInput } from "../utils/interfaces/apiInterface";
import axiosInstance from "./axios";

/**
 * user와 관련된 api 콜을 진행하는 부분입니다.
 */
const userApis = {
  // 회원가입
  signUp: async ({
    email,
    username,
    termsIndexes,
  }: Omit<UserApiInput, "password">) => {
    const result = await axiosInstance({
      method: "POST",
      url: "/user",
      data: { email, username, termsIndexes },
    });
    return result;
  },

  // 유저정보 쿼리
  getMyUserProfile: async () => {
    const result = await axiosInstance<UserType[]>({
      method: "GET",
      url: "/user",
    });
    return result;
  },
};

export default userApis;
