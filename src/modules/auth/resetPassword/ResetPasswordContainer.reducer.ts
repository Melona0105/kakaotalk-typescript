import {
  ResetPassworActionValue,
  ResetPasswordStateType,
  RESET_PASSWORD_ACTION_TYPE,
} from "./ResetPasswordContainer.interface";

function resetPasswordReducer(
  state: ResetPasswordStateType,
  { type, payload }: ResetPassworActionValue
): ResetPasswordStateType {
  switch (type) {
    case RESET_PASSWORD_ACTION_TYPE.ON_EMAIL_CHANGE: {
      return { ...state, email: payload };
    }

    case RESET_PASSWORD_ACTION_TYPE.ON_EMAIL_FOCUS: {
      return { ...state, emailErrorMessage: "" };
    }

    case RESET_PASSWORD_ACTION_TYPE.ON_EMAIL_BLUR: {
      if (state.email.length === 0) {
        return { ...state, emailErrorMessage: "이메일을 입력해주세요." };
      } else return state;
    }

    case RESET_PASSWORD_ACTION_TYPE.HANDLE_ERROE_MESSAGE: {
      return { ...state, emailErrorMessage: "이메일을 확인해주세요." };
    }

    default:
      throw new Error();
  }
}

export default resetPasswordReducer;
