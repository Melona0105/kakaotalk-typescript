export enum RESET_PASSWORD_ACTION_TYPE {
  ON_EMAIL_CHANGE = "ON_EMAIL_CHANGE",
  ON_EMAIL_FOCUS = "ON_EMAIL_FOCUS",
  ON_EMAIL_BLUR = "ON_EMAIL_BLUR",

  HANDLE_ERROE_MESSAGE = "HANDLE_ERROE_MESSAGE",
}

export interface ResetPasswordStateType {
  email: string;
  emailErrorMessage: string;
}

export interface ResetPassworActionValue {
  type: RESET_PASSWORD_ACTION_TYPE;
  payload?: any;
}
