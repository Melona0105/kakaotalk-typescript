import {
  SignInInputValue,
  SignInInputStateTypes,
  SIGN_IN_INPUT_ACTION_TYPE,
} from "./SignInInputBoxes.interface";

function signInInputReducer(
  state: SignInInputStateTypes,
  action: SignInInputValue
): SignInInputStateTypes {
  const { type, payload } = action;
  switch (type) {
    case SIGN_IN_INPUT_ACTION_TYPE.ON_EMAIL_CHANGE: {
      return { ...state, email: payload };
    }

    case SIGN_IN_INPUT_ACTION_TYPE.ON_PASSWORD_CHANGE: {
      return { ...state, password: payload };
    }

    default:
      throw new Error();
  }
}

export default signInInputReducer;
