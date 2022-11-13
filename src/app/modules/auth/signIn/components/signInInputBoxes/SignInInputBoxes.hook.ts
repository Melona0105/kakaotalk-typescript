import { useServiceContext } from "app/modules/common/providers/ServiceProvider";
import { FirebaseError } from "firebase/app";
import { ChangeEvent, KeyboardEvent, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import signInInputReducer from "./SignInInputBoxes.reducer";
import { PRIVATE_ROUTES } from "../../../../../routes/utils/routename";
import { FIREBASE_ERROR_CODE } from "../../../common/utils/authConstatnts";

import {
  SignInInputStateType,
  SIGN_IN_INPUT_ACTION_TYPE,
} from "./SignInInputBoxes.interface";

const INITIAL_STATE: SignInInputStateType = {
  email: "",
  password: "",
  errorMessage: "",
};

/**
 * 로그인 인풋의 상태와 함수를 관리하는 훅입니다.
 */
function useSignInInputBoxes() {
  const { userService } = useServiceContext();
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(signInInputReducer, INITIAL_STATE);

  function onTextChange(
    e: ChangeEvent<HTMLInputElement>,
    type: SIGN_IN_INPUT_ACTION_TYPE
  ) {
    dispatch({ type, payload: e.target.value });
  }

  /**
   * 인풋창에 진입시, 기존 에러를 초기화하는 함수입니다.
   */
  function onFocus() {
    dispatch({ type: SIGN_IN_INPUT_ACTION_TYPE.HANDLE_ERROR_MESSAGE });
  }

  /**
   * 인풋의 밸류와 에러상태를 체크하여 버튼의 활성/비활성을 체크하는 함수입니다.
   */
  function getButtonDisabled() {
    const emailDisabled = !state.email;
    const passwordDisabled = !state.password;

    return emailDisabled || passwordDisabled;
  }

  /**
   * input에서 엔터를 누를경우 로그인을 시도하는 함수입니다.
   */
  function onEnterKeyPress(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      onSignInButtonClick();
    }
  }

  /**
   * 로그인 버튼을 누를경우 작동하는 함수입니다.
   * 1. 버튼이 활성일 경우에만 작동합니다.
   * 2. firebase 로그인을 시도한뒤, 성공할경우 홈화면으로 이동합니다.
   * 3. 실패할경우, firebase error code에 따라 에러메세지를 활성화합니다.
   */
  async function onSignInButtonClick() {
    if (!getButtonDisabled()) {
      const { email, password } = state;
      try {
        await userService.signIn(email, password);
        navigate(PRIVATE_ROUTES.HOME.path, { replace: true });
      } catch (err: unknown) {
        if (err instanceof FirebaseError) {
          if (err.code === FIREBASE_ERROR_CODE.USER_NOT_FOUND) {
            dispatch({
              type: SIGN_IN_INPUT_ACTION_TYPE.HANDLE_ERROR_MESSAGE,
              payload: "가입되지 않은 이메일 입니다.",
            });
          } else if (err.code === FIREBASE_ERROR_CODE.WRONG_PASSWORD) {
            dispatch({
              type: SIGN_IN_INPUT_ACTION_TYPE.HANDLE_ERROR_MESSAGE,
              payload: "비밀번호를 확인해주세요.",
            });
          } else if (err.code === FIREBASE_ERROR_CODE.INVALID_EMAIL) {
            dispatch({
              type: SIGN_IN_INPUT_ACTION_TYPE.HANDLE_ERROR_MESSAGE,
              payload: "올바른 이메일을 입력해 주세요.",
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
      onTextChange,
      onFocus,
      onEnterKeyPress,
      onSignInButtonClick,
    },
  };
}

export default useSignInInputBoxes;
