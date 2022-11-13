import { SERVER_URL } from "app/utils/config";
import axios from "axios";
import ChattingAPIs from "data/apis/chattingAPI";
import ChattingRoomAPIs from "data/apis/chattingRoomAPIs";
import FriendAPIs from "data/apis/friendAPI";
import UserAPIs from "data/apis/userAPI";
import ChattingRepositoryImpl from "data/repositories/chattingRepositoryImpl";
import ChattingRoomRepositoryImpl from "data/repositories/chattingRoomRepositoryImpl";
import FriendRepositoryImpl from "data/repositories/friendRepositoryImpl";
import UserRepositoryImpl from "data/repositories/userRepositoryImpl";
import ChattingRoomService from "domain/services/chattingRoomService";
import ChattingService from "domain/services/chattingService";
import FriendService from "domain/services/friendService";
import UserService from "domain/services/userService";
import { createContext, ReactNode, useContext } from "react";

const axiosInstance = axios.create({ baseURL: SERVER_URL });

const userService = new UserService(
  new UserRepositoryImpl(new UserAPIs(axiosInstance))
);

const friendService = new FriendService(
  new FriendRepositoryImpl(new FriendAPIs(axiosInstance))
);

const chattingService = new ChattingService(
  new ChattingRepositoryImpl(new ChattingAPIs(axiosInstance))
);

const chattingRoomService = new ChattingRoomService(
  new ChattingRoomRepositoryImpl(new ChattingRoomAPIs(axiosInstance))
);

const ServiceContext = createContext({
  userService,
  friendService,
  chattingService,
  chattingRoomService,
});

function ServiceProvider({ children }: { children: ReactNode }) {
  return (
    <ServiceContext.Provider
      value={{
        userService,
        friendService,
        chattingService,
        chattingRoomService,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
}

export default ServiceProvider;

export function useServiceContext() {
  return useContext(ServiceContext);
}
