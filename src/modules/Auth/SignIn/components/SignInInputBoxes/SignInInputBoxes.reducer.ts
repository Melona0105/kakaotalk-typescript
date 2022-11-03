import {
  SignInInputActionValue,
  SignInInputStateType,
  SIGN_IN_INPUT_ACTION_TYPE,
} from "./SignInInputBoxes.interface";

/**
 * 로그인 상태를 변화시키는 리듀서입니다.
 */
function signInInputReducer(
  state: SignInInputStateType,
  action: SignInInputActionValue
): SignInInputStateType {
  const { type, payload } = action;
  switch (type) {
    case SIGN_IN_INPUT_ACTION_TYPE.ON_EMAIL_CHANGE: {
      return { ...state, email: payload };
    }

    case SIGN_IN_INPUT_ACTION_TYPE.ON_PASSWORD_CHANGE: {
      return { ...state, password: payload };
    }
    case SIGN_IN_INPUT_ACTION_TYPE.HANDLE_ERROR_MESSAGE: {
      if (payload) {
        return { ...state, errorMessage: payload };
      } else return { ...state, errorMessage: "" };
    }

    default:
      throw new Error();
  }
}

export default signInInputReducer;
