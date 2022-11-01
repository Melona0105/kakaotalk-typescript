import axios from "axios";
import { getFirebaseToken } from "../libs/firebase/firebaseAuth";
import { SERVER_URL } from "../utils/config";

/**
 * api 콜 전에, firebase token을 헤더에 담아서 전송합니다.
 */
const axiosInstance = axios.create({ baseURL: SERVER_URL });

axiosInstance.interceptors.request.use(async (config) => {
  const token = await getFirebaseToken();
  config.headers!.authorization = token;
  return config;
});

export default axiosInstance;
