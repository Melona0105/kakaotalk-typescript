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

  signUp = async (
    token: string,
    email: string,
    username: string,
    termsIndexes: JSON
  ) => {
    await this.httpClient({
      method: "POST",
      url: USER_BASE_URL,
      data: { email, username, termsIndexes },
      headers: { authorization: token },
    });
  };

  updateMyUserProfile = async (
    token: string,
    username?: string,
    summary?: string
  ) => {
    await this.httpClient({
      method: "POST",
      url: `${USER_BASE_URL}/update`,
      data: { username, summary },
      headers: { authorization: token },
    });
  };
}

export default UserAPIs;
