import validateEmail from "../../../../common/utils/validateEmail";
import validatePassword from "../../../../common/utils/validatePassword";
import {
  SignUpInputActionValue,
  SignUpInputStateType,
  SIGN_UP_INPUT_ACTION_TYPE,
} from "./SignUpInputBoxes.interface";

const INCONSISTENCY_ERROR_MESSAGE = "비밀번호가 일치하지 않습니다.";

function signUpInputReducer(
  state: SignUpInputStateType,
  action: SignUpInputActionValue
): SignUpInputStateType {
  const { type, payload } = action;
  switch (type) {
    // username
    case SIGN_UP_INPUT_ACTION_TYPE.ON_USERNAME_FOCUS: {
      return { ...state, usernameErrorMessage: "" };
    }
    case SIGN_UP_INPUT_ACTION_TYPE.ON_USERNAME_CHANGE: {
      return { ...state, username: payload };
    }
    case SIGN_UP_INPUT_ACTION_TYPE.ON_USERNAME_BLUR: {
      if (!state.username) {
        return { ...state, usernameErrorMessage: "이름을 입력해주세요." };
      } else return state;
    }

    // email
    case SIGN_UP_INPUT_ACTION_TYPE.ON_EMAIL_FOCUS: {
      return { ...state, emailErrorMessage: "" };
    }
    case SIGN_UP_INPUT_ACTION_TYPE.ON_EMAIL_CHANGE: {
      return { ...state, email: payload };
    }
    case SIGN_UP_INPUT_ACTION_TYPE.ON_EMAIL_BLUR: {
      // 이메일이 입력되지 않았을 경우
      if (!state.email) {
        return {
          ...state,
          emailErrorMessage: "카카오계정 이메일을 입력해 주세요.",
        };
      }
      // 이메일 주소가 유효하지 않을 경우
      else if (!validateEmail(state.email)) {
        return {
          ...state,
          emailErrorMessage: "이메일 주소를 확인해주세요.",
        };
      } else return state;
    }

    // password
    case SIGN_UP_INPUT_ACTION_TYPE.ON_PASSWORD_FOCUS: {
      if (
        state.passwordConfirmationErrorMessage === INCONSISTENCY_ERROR_MESSAGE
      ) {
        return {
          ...state,
          passwordErrorMessage: "",
          passwordConfirmationErrorMessage: "",
        };
      } else return { ...state, passwordErrorMessage: "" };
    }
    case SIGN_UP_INPUT_ACTION_TYPE.ON_PASSWORD_CHANGE: {
      return { ...state, password: payload };
    }
    case SIGN_UP_INPUT_ACTION_TYPE.ON_PASSWORD_BLUR: {
      // 비밀번호 유효성 검증
      if (!validatePassword(state.password)) {
        return {
          ...state,
          passwordErrorMessage:
            "비밀번호는 숫자 및 영문을 포함하여 8자 이상이어야 합니다.",
        };
      } else if (
        state.passwordConfirmation &&
        state.password !== state.passwordConfirmation
      ) {
        return {
          ...state,
          passwordErrorMessage: INCONSISTENCY_ERROR_MESSAGE,
          passwordConfirmationErrorMessage: INCONSISTENCY_ERROR_MESSAGE,
        };
      } else return state;
    }

    // password confirmation
    case SIGN_UP_INPUT_ACTION_TYPE.ON_PASSWORD_CONFIRMATION_FOCUS: {
      if (state.passwordErrorMessage === INCONSISTENCY_ERROR_MESSAGE) {
        return {
          ...state,
          passwordErrorMessage: "",
          passwordConfirmationErrorMessage: "",
        };
      } else return { ...state, passwordConfirmationErrorMessage: "" };
    }
    case SIGN_UP_INPUT_ACTION_TYPE.ON_PASSWORD_CONFIRMATION_CHANGE: {
      return { ...state, passwordConfirmation: payload };
    }
    case SIGN_UP_INPUT_ACTION_TYPE.ON_PASSWORD_CONFIRMATION_BLUR: {
      // 비밀번호가 일치하지 않을 경우
      if (state.password !== state.passwordConfirmation) {
        return {
          ...state,
          passwordConfirmationErrorMessage: INCONSISTENCY_ERROR_MESSAGE,
        };
      } else return state;
    }

    // firebase
    case SIGN_UP_INPUT_ACTION_TYPE.HANDLE_FIREBASE_ERROR_MESSAGE: {
      return { ...state, emailErrorMessage: payload };
    }

    default:
      throw new Error();
  }
}
export default signUpInputReducer;
