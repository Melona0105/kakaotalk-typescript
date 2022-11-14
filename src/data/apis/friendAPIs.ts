import { AxiosInstance } from "axios";
import { Friend } from "domain/entities/friendEntity";

const FRIEND_BASE_URL = "/friend";

class FriendAPIs {
  constructor(private readonly httpClient: AxiosInstance) {}

  // TODO: 이후 avarar URL 자체를 url로 보관할 수 있는방법 찾아보기 -> n 한번 줄일 수 있을 듯 함
  getMyFriends = async (token: string) => {
    const { data } = await this.httpClient<Friend[]>({
      method: "GET",
      url: FRIEND_BASE_URL,
      headers: { authorization: token },
    });
    return Promise.all(data);
  };

  getFriendByEmail = async (token: string, email: string) => {
    const { data } = await this.httpClient<Friend>({
      method: "GET",
      url: `${FRIEND_BASE_URL}/${email}`,
      headers: { authorization: token },
    });

    return data;
  };

  getFriend = async (token: string, friendId: string) => {
    const { data } = await this.httpClient<Friend>({
      method: "GET",
      url: `${FRIEND_BASE_URL}/get/${friendId}`,
      headers: { authorization: token },
    });
    return data;
  };

  addFriend = async (token: string, friendId: string) => {
    await this.httpClient({
      method: "POST",
      url: `${FRIEND_BASE_URL}`,
      data: { friend_id: friendId },
      headers: { authorization: token },
    });
  };

  hideFriend = async (token: string, friendId: string) => {
    await this.httpClient({
      method: "POST",
      url: `${FRIEND_BASE_URL}/hide`,
      data: { friend_id: friendId },
      headers: { authorization: token },
    });
  };

  blockFriend = async (token: string, friendId: string) => {
    await this.httpClient({
      method: "POST",
      url: `${FRIEND_BASE_URL}/block`,
      data: { friend_id: friendId },
      headers: { authorization: token },
    });
  };

  rollbackFriend = async (token: string, friendId: string) => {
    await this.httpClient({
      method: "POST",
      url: `${FRIEND_BASE_URL}/rollback`,
      data: { friend_id: friendId },
      headers: { authorization: token },
    });
  };

  delteFriend = async (token: string, friendId: string) => {
    await this.httpClient({
      method: "DELETE",
      url: `${FRIEND_BASE_URL}`,
      data: { friend_id: friendId },
      headers: { authorization: token },
    });
  };

  getMyHiddenFriends = async (token: string) => {
    const { data } = await this.httpClient<Friend[]>({
      method: "GET",
      url: `${FRIEND_BASE_URL}/hide`,
      headers: { authorization: token },
    });
    return Promise.all(data);
  };

  getMyBlockedFriends = async (token: string) => {
    const { data } = await this.httpClient<Friend[]>({
      method: "GET",
      url: `${FRIEND_BASE_URL}/block`,
      headers: { authorization: token },
    });
    return Promise.all(data);
  };
}

export default FriendAPIs;
