import {
  SignInAction,
  SignInStateTypes,
  SIGN_IN_ACTION_TYPE,
} from "./SignInContainer.interface";

function signInReducer(
  state: SignInStateTypes,
  action: SignInAction
): SignInStateTypes {
  const { type, payload } = action;
  switch (type) {
    case SIGN_IN_ACTION_TYPE.ON_EMAIL_CHANGE: {
      return { ...state, email: payload };
    }

    case SIGN_IN_ACTION_TYPE.ON_PASSWORD_CHANGE: {
      return { ...state, password: payload };
    }

    default:
      throw new Error();
  }
}

export default signInReducer;
