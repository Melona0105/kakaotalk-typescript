import axiosInstance from "./axios";
import { ChattingType } from "./interfaces/apiInterface";

const CHATTING_BASE_URL = "/chatting";

const chattingApis = {
  getChattings: async (room_id: string) => {
    const { data } = await axiosInstance<ChattingType[]>({
      method: "GET",
      url: CHATTING_BASE_URL + `/${room_id}`,
    });

    return data;
  },
};

export default chattingApis;
