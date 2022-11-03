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
