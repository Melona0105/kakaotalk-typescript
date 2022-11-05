export interface CreateUserProfileApiInput {
  email: string;
  password: string;
  username?: string;
  termsIndexes?: JSON;
}

export interface UpdateUserProfileApiInput {
  username?: string;
  summary?: string;
  compressedFile?: File;
}

export interface FriendType {
  id: string;
  email: string;
  username: string;
  avatarURL?: string;
  isFriend: boolean;
}
