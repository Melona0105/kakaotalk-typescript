export interface SignUpInputStateType {
  email: string;
  password: string;
  passwordConfirmation: string;
  emailErrorMessage: string;
  passwordErrorMessage: string;
  passwordConfirmationErrorMessage: string;
  username: string;
  usernameErrorMessage: string;
}

export enum SIGN_UP_INPUT_ACTION_TYPE {
  // username
  ON_USERNAME_FOCUS,
  ON_USERNAME_CHANGE,
  ON_USERNAME_BLUR,

  // email
  ON_EMAIL_FOCUS,
  ON_EMAIL_CHANGE,
  ON_EMAIL_BLUR,

  // password
  ON_PASSWORD_FOCUS,
  ON_PASSWORD_CHANGE,
  ON_PASSWORD_BLUR,

  // password confirmation
  ON_PASSWORD_CONFIRMATION_FOCUS,
  ON_PASSWORD_CONFIRMATION_CHANGE,
  ON_PASSWORD_CONFIRMATION_BLUR,

  HANDLE_FIREBASE_ERROR_MESSAGE,
}

export interface SignUpInputActionValue {
  type: SIGN_UP_INPUT_ACTION_TYPE;
  payload?: any;
}
