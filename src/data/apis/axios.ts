import axios from "axios";
import { SERVER_URL } from "../../app/utils/config";

/**
 * 모든 api 콜의 헤더에 base url을 설정하는 interceptor입니다.
 */
// TODO: API 정리후 삭제하기
const axiosInstance = axios.create({ baseURL: SERVER_URL });

export default axiosInstance;
