/**
 * @deprecated
 */
export interface ChattingRoomType {
  room_id: number;
  user_id?: string;
  username?: string;
  text?: string;
  avatarURL?: string;
  createdAt?: string;
}
/**
 * @deprecated
 */
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
