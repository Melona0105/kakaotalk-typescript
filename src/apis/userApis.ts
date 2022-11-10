import { UserType } from "modules/common/providers/authProvider.interface";
import axiosInstance from "./axios";
import {
  firebaseSignIn,
  firebaseSignUp,
  getUserAvatar,
  uploadMyUserAvatar,
} from "libs/firebase/firebaseAuth";
import {
  CreateUserProfileApiInput,
  UpdateUserProfileApiInput,
} from "./interfaces/apiInterface";

const USER_BASE_URL = "/user";

/**
 * 유저에 관련된 API를 관리합니다.
 */
// TODO: 체크용 콘솔로그 삭제
const userApis = {
  signIn: async ({ email, password }: CreateUserProfileApiInput) => {
    console.log("signIn");
    await firebaseSignIn(email, password);
  },

  // 회원가입
  signUp: async ({
    email,
    password,
    username,
    termsIndexes,
  }: CreateUserProfileApiInput) => {
    console.log("signUp");
    await firebaseSignUp(email, password);
    await axiosInstance({
      method: "POST",
      url: USER_BASE_URL,
      data: { email, username, termsIndexes },
    });
  },

  // 유저정보 쿼리
  getMyUserProfile: async () => {
    console.log("getMyUserProfile");
    const { data } = await axiosInstance<UserType[]>({
      method: "GET",
      url: USER_BASE_URL,
    });

    return data;
  },

  getUserAvatar: async (uid: string) => {
    console.log("getUserAvatar");
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
    console.log("updateMyUserProfile");
    await axiosInstance<UserType[]>({
      method: "POST",
      url: `${USER_BASE_URL}/update`,
      data: { username, summary },
    });

    compressedFile && (await uploadMyUserAvatar(compressedFile));
  },
};

export default userApis;
