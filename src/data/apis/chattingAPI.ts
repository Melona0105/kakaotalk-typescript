import { AxiosInstance } from "axios";
import { Chatting } from "domain/entities/chattingEntity";

const CHATTING_BASE_URL = "/chatting";

class ChattingAPIs {
  constructor(private readonly httpClient: AxiosInstance) {}

  getChattings = async (token: string, roomId: string) => {
    const { data } = await this.httpClient<Chatting[]>({
      method: "GET",
      url: CHATTING_BASE_URL + `/${roomId}`,
      headers: { authorization: token },
    });
    return data;
  };
}

export default ChattingAPIs;
