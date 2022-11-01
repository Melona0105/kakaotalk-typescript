import { useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SignUpInputStateType } from "./SignUpInputBoxes.interface";
import SignUpInputReducer from "./SignUpInputBoxes.reducer";
import userService from "../../../../../services/userService";
import { PRIVATE_ROUTES } from "../../../../../routes/utils/routename";

const INITIAL_STATE: SignUpInputStateType = {
  email: "",
  password: "",
  passwordConfirmation: "",
  emailErrorMessage: "",
  passwordErrorMessage: "",
  passwordConfirmationErrorMessage: "",
  username: "",
  usernameErrorMessgae: "",
};

function useSignUpInputBoxes() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(SignUpInputReducer, INITIAL_STATE);

  const {
    state: { termsIndexes },
  } = useLocation();

  /**
   * 버튼의 비활성을 관리하는 함수입니다.
   */
  function getButtonDisabled() {
    // 이름 체크
    const usernameDisabled = !state.username || !!state.usernameErrorMessgae;
    // 이메일 체크
    const emailDisabled = !state.email || !!state.emailErrorMessage;
    // 비밀번호 체크
    const passwordDisabled = !state.password || !!state.passwordErrorMessage;
    // 비밀번호 확인 체크
    const passwordConfirmationDisabled =
      !state.passwordConfirmation || !!state.passwordConfirmationErrorMessage;

    return (
      usernameDisabled ||
      emailDisabled ||
      passwordDisabled ||
      passwordConfirmationDisabled
    );
  }

  /**
   * 회원가입
   * 1. 버튼이 활성화일 경우에만 회원가입을 진행합니다.
   */
  async function onSignUpButtonPress() {
    if (!getButtonDisabled()) {
      const { email, password, username } = state;

      await userService.signUp({ email, password, username, termsIndexes });
      navigate(PRIVATE_ROUTES.HOME.path, { replace: true });
    }
  }

  return {
    models: {
      state,
      buttonDisabled: getButtonDisabled(),
    },
    operations: {
      dispatch,
      onSignUpButtonPress,
    },
  };
}

export default useSignUpInputBoxes;
