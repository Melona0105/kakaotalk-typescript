export interface SignInInputStateType {
  email: string;
  password: string;
  errorMessage: string;
}

export enum SIGN_IN_INPUT_ACTION_TYPE {
  ON_EMAIL_CHANGE,
  ON_PASSWORD_CHANGE,
  HANDLE_ERROR_MESSAGE,
}

export interface SignInInputActionValue {
  type: SIGN_IN_INPUT_ACTION_TYPE;
  payload?: any;
}
