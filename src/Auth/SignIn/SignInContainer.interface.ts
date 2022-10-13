export interface SignInStateTypes {
  email: string;
  password: string;
}

export enum SIGN_IN_ACTION_TYPE {
  ON_EMAIL_CHANGE,
  ON_PASSWORD_CHANGE,
}

export interface SignInAction {
  type: SIGN_IN_ACTION_TYPE;
  payload: any;
}
