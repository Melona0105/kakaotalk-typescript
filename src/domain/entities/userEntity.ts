export interface User {
  id: string;
  email: string;
  username?: string;
  agreeTerms?: JSON;
  summary?: string;
  avatarURL?: string;
}
