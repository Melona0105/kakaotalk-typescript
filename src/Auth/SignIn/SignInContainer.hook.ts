import { ChangeEvent, useReducer } from "react";
import signInReducer from "./SignInContainer.reducer";
import {
  SignInStateTypes,
  SIGN_IN_ACTION_TYPE,
} from "./SignInContainer.interface";

const INITIAL_STATE: SignInStateTypes = {
  email: "",
  password: "",
};

function useSignInContainer() {
  const [state, dispatch] = useReducer(signInReducer, INITIAL_STATE);

  function onTextChange(
    e: ChangeEvent<HTMLInputElement>,
    type: SIGN_IN_ACTION_TYPE
  ) {
    dispatch({ type, payload: e.target.value });
  }

  return {
    models: {
      state,
    },
    operations: {
      onTextChange,
    },
  };
}

export default useSignInContainer;
