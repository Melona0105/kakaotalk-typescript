import { useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  SignUpInputStateType,
  SIGN_UP_INPUT_ACTION_TYPE,
} from "./SignUpInputBoxes.interface";
import signUpInputReducer from "./SignUpInputBoxes.reducer";
import userService from "../../../../../services/userService";
import { PRIVATE_ROUTES } from "../../../../../routes/utils/routename";
import { FirebaseError } from "firebase/app";
import { FIREBASE_ERROR_CODE } from "../../../common/utils/authConstatnts";

const INITIAL_STATE: SignUpInputStateType = {
  email: "",
  password: "",
  passwordConfirmation: "",
  emailErrorMessage: "",
  passwordErrorMessage: "",
  passwordConfirmationErrorMessage: "",
  username: "",
  usernameErrorMessage: "",
};

/**
 * 회원가입 인풋에서 필요한 state와 함수들을 관리하는 훅입니다.
 */
function useSignUpInputBoxes() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(signUpInputReducer, INITIAL_STATE);

  const {
    state: { termsIndexes },
  } = useLocation();

  /**
   * 버튼의 비활성을 관리하는 함수입니다.
   */
  function getButtonDisabled() {
    // 이름 체크
    const usernameDisabled = !state.username || !!state.usernameErrorMessage;
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
   * 2. firebase 회원가입 후, 서버에 유저 정보를 전송합니다.
   * 3. 실패할경우, Firebase에러라면 firebase 에러를 활성화합니다.
   */
  async function onSignUpButtonPress() {
    if (!getButtonDisabled()) {
      const { email, password, username } = state;
      try {
        await userService.signUp({ email, password, username, termsIndexes });
        navigate(PRIVATE_ROUTES.HOME.path, { replace: true });
      } catch (err: unknown) {
        if (err instanceof FirebaseError) {
          if (err.code === FIREBASE_ERROR_CODE.EMAIL_USED) {
            dispatch({
              type: SIGN_UP_INPUT_ACTION_TYPE.HANDLE_FIREBASE_ERROR_MESSAGE,
              payload: "이미 사용중인 이메일입니다.",
            });
          }
        } else {
          console.log(err);
        }
      }
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
