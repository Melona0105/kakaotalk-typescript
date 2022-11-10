import axiosInstance from "./axios";
import { ChattingType } from "./interfaces/apiInterface";

const CHATTING_BASE_URL = "/chatting";

const chattingApis = {
  getChattings: async (roomId: string) => {
    console.log("getChattings");
    const { data } = await axiosInstance<ChattingType[]>({
      method: "GET",
      url: CHATTING_BASE_URL + `/${roomId}`,
    });

    return data;
  },
};

export default chattingApis;
