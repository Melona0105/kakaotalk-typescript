import {
  SignInInputValue,
  SignInInputStateType,
  SIGN_IN_INPUT_ACTION_TYPE,
} from "./SignInInputBoxes.interface";

function signInInputReducer(
  state: SignInInputStateType,
  action: SignInInputValue
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
