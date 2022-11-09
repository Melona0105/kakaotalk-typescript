import axiosInstance from "./axios";

const CHATTING_BASE_URL = "/chatting";

const chattingApis = {
  sendMessage: async (message: string, roomId: string) => {
    const { data } = await axiosInstance({
      method: "POST",
      url: CHATTING_BASE_URL + `/${roomId}`,
      data: { message },
    });

    console.log(data);

    return data;
  },
};

export default chattingApis;
