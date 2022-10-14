import { ChangeEvent, useReducer } from "react";
import signInInputReducer from "./SignInInputBoxes.reducer";
import {
  SignInInputStateTypes,
  SIGN_IN_INPUT_ACTION_TYPE,
} from "./SignInInputBoxes.interface";

const INITIAL_STATE: SignInInputStateTypes = {
  email: "",
  password: "",
};

function useSignInInputBoxes() {
  const [state, dispatch] = useReducer(signInInputReducer, INITIAL_STATE);

  function onTextChange(
    e: ChangeEvent<HTMLInputElement>,
    type: SIGN_IN_INPUT_ACTION_TYPE
  ) {
    dispatch({ type, payload: e.target.value });
  }

  function getButtonDisabled() {
    const emailDisabled = !state.email;
    const passwordDisabled = !state.password;

    return emailDisabled || passwordDisabled;
  }

  function onSignInButtonPress() {
    alert("로그인");
  }

  return {
    models: {
      state,
      buttonDisabled: getButtonDisabled(),
    },
    operations: {
      onTextChange,
      onSignInButtonPress,
    },
  };
}

export default useSignInInputBoxes;
