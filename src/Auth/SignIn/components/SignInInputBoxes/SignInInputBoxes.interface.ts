export interface SignInInputStateTypes {
  email: string;
  password: string;
}

export enum SIGN_IN_INPUT_ACTION_TYPE {
  ON_EMAIL_CHANGE,
  ON_PASSWORD_CHANGE,
}

export interface SignInInputAction {
  type: SIGN_IN_INPUT_ACTION_TYPE;
  payload: any;
}
