import { useReducer } from "react";
import { useLocation } from "react-router-dom";
import { SignUpInputStateType } from "./SignUpInputBoxes.interface";
import SignUpInputReducer from "./SignUpInputBoxes.reducer";
import { firebaseSignUp } from "../../../../../libs/firebase/firebaseAuth";
import axios from "axios";
import axiosInstance from "../../../../../apis/axios";

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
  const [state, dispatch] = useReducer(SignUpInputReducer, INITIAL_STATE);

  // TODO: 서버에 저장할 동의값 데이터
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
      try {
        // firebase 회원가입이 성공하고 나면, 서버에 유저이름과 동의정보를 저장합니다.
        // await firebaseSignUp(state.email, state.password);
        await axiosInstance.post(
          `${process.env.REACT_APP_SERVER_URL}user/username`,
          { username: state.username, termsIndexes }
        );
        console.log("성공적으로 가입되었습니다.");
      } catch (err) {
        console.log(err);
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
