export interface Chatting {
  id: number;
  roomId: number;
  userId?: string;
  username?: string;
  text: string;
  avatarURL?: string;
  createdAt: string;
}
