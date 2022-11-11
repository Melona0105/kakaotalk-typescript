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
  summary?: string;
}

export interface ChattingRoomType {
  room_id: number;
  user_id?: string;
  username?: string;
  text?: string;
  avatarURL?: string;
  createdAt?: string;
}

export interface ChattingType {
  id: number;
  room_id: number;
  sender_id: string;
  text: string;
  read: number;
  createdAt: string;
  updatedAt: string;
  username: string;
}
