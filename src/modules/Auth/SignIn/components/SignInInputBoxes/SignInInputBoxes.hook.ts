import { FirebaseError } from "firebase/app";
import { ChangeEvent, useReducer } from "react";
import signInInputReducer from "./SignInInputBoxes.reducer";
import { firebaseSignIn } from "../../../../../libs/firebase/firebaseAuth";
import {
  SignInInputStateTypes,
  SIGN_IN_INPUT_ACTION_TYPE,
} from "./SignInInputBoxes.interface";
import { useNavigate } from "react-router-dom";
import { PRIVATE_ROUTES } from "../../../../../routes/utils/routename";

const INITIAL_STATE: SignInInputStateTypes = {
  email: "",
  password: "",
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

  function getButtonDisabled() {
    const emailDisabled = !state.email;
    const passwordDisabled = !state.password;

    return emailDisabled || passwordDisabled;
  }

  // TODO: firebase 에러코드 정리 / signup 포함
  async function onSignInButtonPress() {
    if (!getButtonDisabled()) {
      try {
        await firebaseSignIn(state.email, state.password);
        navigate(PRIVATE_ROUTES.HOME.path, { replace: true });
      } catch (err: unknown) {
        if (err instanceof FirebaseError) {
          console.log(err.code);
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
      onSignInButtonPress,
    },
  };
}

export default useSignInInputBoxes;
