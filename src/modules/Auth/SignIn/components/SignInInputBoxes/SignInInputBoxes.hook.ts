import { FirebaseError } from "firebase/app";
import { ChangeEvent, useReducer } from "react";
import signInInputReducer from "./SignInInputBoxes.reducer";
import { firebaseSignIn } from "../../../../../libs/firebase/firebaseAuth";
import {
  SignInInputStateType,
  SIGN_IN_INPUT_ACTION_TYPE,
} from "./SignInInputBoxes.interface";
import { useNavigate } from "react-router-dom";
import { PRIVATE_ROUTES } from "../../../../../routes/utils/routename";
import { FIREBASE_ERROR_CODE } from "../../../common/utils/authConstatnts";

const INITIAL_STATE: SignInInputStateType = {
  email: "",
  password: "",
  errorMessage: "",
};

function useSignInInputBoxes() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(signInInputReducer, INITIAL_STATE);

  function onTextChange(
    e: ChangeEvent<HTMLInputElement>,
    type: SIGN_IN_INPUT_ACTION_TYPE
  ) {
    dispatch({ type, payload: e.target.value });
  }

  function onFocus() {
    dispatch({ type: SIGN_IN_INPUT_ACTION_TYPE.HANDLE_ERROR_MESSAGE });
  }

  function getButtonDisabled() {
    const emailDisabled = !state.email;
    const passwordDisabled = !state.password;

    return emailDisabled || passwordDisabled;
  }

  async function onSignInButtonPress() {
    if (!getButtonDisabled()) {
      try {
        await firebaseSignIn(state.email, state.password);
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
      onSignInButtonPress,
    },
  };
}

export default useSignInInputBoxes;
