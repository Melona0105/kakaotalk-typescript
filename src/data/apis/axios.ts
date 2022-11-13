import axios from "axios";
import { getFirebaseToken } from "../../app/libs/firebase/firebaseAuth";
import { SERVER_URL } from "../../app/utils/config";

/**
 * 모든 api 콜의 헤더에 firebase token을 담아주는 interceptor입니다.
 */
const axiosInstance = axios.create({ baseURL: SERVER_URL });

axiosInstance.interceptors.request.use(async (config) => {
  const token = await getFirebaseToken();
  config.headers!.authorization = token;
  return config;
});

export default axiosInstance;
