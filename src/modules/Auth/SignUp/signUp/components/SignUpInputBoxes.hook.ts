import { useReducer } from "react";
import { useLocation } from "react-router-dom";
import { SignUpInputStateType } from "./SignUpInputBoxes.interface";
import SignUpInputReducer from "./SignUpInputBoxes.reducer";
import { firebaseSignUp } from "../../../../../libs/firebase/firebaseAuth";

const INITIAL_STATE: SignUpInputStateType = {
  email: "",
  password: "",
  passwordConfirmation: "",
  emailErrorMessage: "",
  passwordErrorMessage: "",
  passwordConfirmationErrorMessage: "",
};

function useSignUpInputBoxes() {
  const [state, dispatch] = useReducer(SignUpInputReducer, INITIAL_STATE);

  // TODO: 서버에 저장할 동의값 데이터
  const {
    state: { termsIndexes },
  } = useLocation();

  function getButtonDisabled() {
    const emailDisabled = !state.email || !!state.emailErrorMessage;
    const passwordDisabled = !state.password || !!state.passwordErrorMessage;
    const passwordConfirmationDisabled =
      !state.passwordConfirmation || !!state.passwordConfirmationErrorMessage;

    return emailDisabled || passwordDisabled || passwordConfirmationDisabled;
  }

  async function onSignUpButtonPress() {
    if (!getButtonDisabled()) {
      try {
        await firebaseSignUp(state.email, state.password);
        console.log("가입되었습니다.");
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
