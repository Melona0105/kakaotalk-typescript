import { UserType } from "app/modules/common/providers/authProvider.interface";
import axiosInstance from "./axios";
import {
  firebaseSignIn,
  firebaseSignUp,
  getUserAvatar,
  uploadMyUserAvatar,
} from "app/libs/firebase/firebaseAuth";
import {
  CreateUserProfileApiInput,
  UpdateUserProfileApiInput,
} from "../../domain/interfaces/apiInterface";

const USER_BASE_URL = "/user";

/**
 * 유저에 관련된 API를 관리합니다.
 */
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
      url: USER_BASE_URL,
      data: { email, username, termsIndexes },
    });
  },

  // 유저정보 쿼리
  getMyUserProfile: async () => {
    const { data } = await axiosInstance<UserType[]>({
      method: "GET",
      url: USER_BASE_URL,
    });

    return data;
  },

  getUserAvatar: async (uid: string) => {
    try {
      return await getUserAvatar(uid);
    } catch (err) {
      console.log(err);
    }
  },

  // 유저정보를 업데이트한후, 이미지가 존재한다면 이미지도 업데이트합니다.
  updateMyUserProfile: async ({
    username,
    summary,
    compressedFile,
  }: UpdateUserProfileApiInput) => {
    await axiosInstance<UserType[]>({
      method: "POST",
      url: `${USER_BASE_URL}/update`,
      data: { username, summary },
    });

    compressedFile && (await uploadMyUserAvatar(compressedFile));
  },
};

export default userApis;
