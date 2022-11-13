export interface Chatting {
  id: number;
  roomId: number;
  senderId?: string;
  username?: string;
  text: string;
  avatarURL?: string;
  createdAt: string;
}
