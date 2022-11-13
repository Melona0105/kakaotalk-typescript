import { AxiosInstance } from "axios";
import { Friend } from "domain/entities/friendEntity";

const FRIEND_BASE_URL = "/friend";

class FriendAPIs {
  constructor(private readonly httpClient: AxiosInstance) {}

  // TODO: 이후 avarar URL 자체를 url로 보관할 수 있는방법 찾아보기 -> n 한번 줄일 수 있을 듯 함
  getMyFriends = async () => {
    const { data } = await this.httpClient<Friend[]>({
      method: "GET",
      url: FRIEND_BASE_URL,
    });

    const myFriends = [...data].map(async (friend) => {
      let avatarURL;
      // try {
      //   avatarURL = await getUserAvatar(friend.id);
      // } catch (err) {
      //   console.log(err);
      // }

      return { ...friend, avatarURL };
    });
    return Promise.all(myFriends);
  };
}

export default FriendAPIs;
