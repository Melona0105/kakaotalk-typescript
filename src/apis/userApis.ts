import { firebaseSignIn, firebaseSignUp } from "libs/firebase/firebaseAuth";
import axiosInstance from "./axios";
import { UserType } from "../modules/common/providers/AuthProvider";
import {
  CreateUserProfileApiInput,
  UpdateUserProfileApiInput,
} from "../utils/interfaces/apiInterface";

const userApis = {
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
    await firebaseSignUp(email, password);
    await axiosInstance({
      method: "POST",
      url: "/user",
      data: { email, username, termsIndexes },
    });
  },

  // 유저정보 쿼리
  getMyUserProfile: async () => {
    const { data } = await axiosInstance<UserType[]>({
      method: "GET",
      url: "/user",
    });

    return data;
  },

  updateMyUserProfile: async ({
    username,
    summary,
  }: UpdateUserProfileApiInput) => {
    return await axiosInstance<UserType[]>({
      method: "POST",
      url: "/user/update",
      data: { username, summary },
    });
  },
};

export default userApis;
