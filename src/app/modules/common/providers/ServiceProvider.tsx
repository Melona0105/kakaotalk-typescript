import { SERVER_URL } from "app/utils/config";
import axios from "axios";
import FriendAPIs from "data/apis/friendAPI";
import UserAPIs from "data/apis/userAPI";
import FriendRepositoryImpl from "data/repositories/friendRepositoryImpl";
import UserRepositoryImpl from "data/repositories/userRepositoryImpl";
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

const ServiceContext = createContext({
  userService,
  friendService,
});

function ServiceProvider({ children }: { children: ReactNode }) {
  return (
    <ServiceContext.Provider value={{ userService, friendService }}>
      {children}
    </ServiceContext.Provider>
  );
}

export default ServiceProvider;

export function useServiceContext() {
  return useContext(ServiceContext);
}
