import { AxiosInstance } from "axios";
import { User } from "domain/entities/user";

const USER_BASE_URL = "/user";

class UserAPIs {
  constructor(private readonly httpClient: AxiosInstance) {}

  getMyUserProfile = async (token: string) => {
    const { data } = await this.httpClient<User[]>({
      method: "GET",
      url: USER_BASE_URL,
      headers: { authorization: token },
    });

    return data[0];
  };
}

export default UserAPIs;
