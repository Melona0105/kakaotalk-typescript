import axios from "axios";
import { getFirebaseToken } from "../libs/firebase/firebaseAuth";
import { SERVER_URL } from "../utils/config";

/**
 * api 콜 전에, firebase 헤더를 request에 담아줍니다.
 */
const axiosInstance = axios.create({ baseURL: SERVER_URL });

axiosInstance.interceptors.request.use((config) => {
  config.headers!.authorization = `Bearer ${getFirebaseToken()}`;
  return config;
});

export default axiosInstance;
