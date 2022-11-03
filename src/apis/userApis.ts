import axiosInstance from "./axios";
import { UserType } from "../modules/common/providers/AuthProvider";
import {
  CreateUserProfileApiInput,
  UpdateUserProfileApiInput,
} from "../utils/interfaces/apiInterface";

/**
 * user와 관련된 api 콜을 진행하는 부분입니다.
 */
const userApis = {
  // 회원가입
  signUp: async ({
    email,
    username,
    termsIndexes,
  }: Omit<CreateUserProfileApiInput, "password">) => {
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

  updateMyUserProfile: async ({
    username,
    summary,
  }: UpdateUserProfileApiInput) => {
    const result = await axiosInstance<UserType[]>({
      method: "POST",
      url: "/user/update",
      data: { username, summary },
    });

    return result;
  },
};

export default userApis;
