import { useAuthContext } from "app/modules/common/providers/AuthProvider";
import { PUBLIC_ROUTES } from "app/routes/utils/routename";
import { ChangeEvent, KeyboardEvent, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import resetPasswordReducer from "./ResetPasswordContainer.reducer";
import {
  ResetPasswordStateType,
  RESET_PASSWORD_ACTION_TYPE,
} from "./ResetPasswordContainer.interface";

const INITIAL_STATE: ResetPasswordStateType = {
  email: "",
  emailErrorMessage: "",
};

function useResetPasswordContainer() {
  const { userService } = useAuthContext();
  const navigate = useNavigate();
  // 이메일 전송중인지 여부를 관리합니다.
  const [isSending, setIsSending] = useState(false);
  // 전송 완료했는지 여부를 관리합니다.
  const [isCompleted, setIsCompleted] = useState(false);
  const [state, dispatch] = useReducer(resetPasswordReducer, INITIAL_STATE);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: RESET_PASSWORD_ACTION_TYPE.ON_EMAIL_CHANGE,
      payload: e.target.value,
    });
  }

  function onFocus() {
    dispatch({ type: RESET_PASSWORD_ACTION_TYPE.ON_EMAIL_FOCUS });
  }

  function onBlur() {
    dispatch({ type: RESET_PASSWORD_ACTION_TYPE.ON_EMAIL_BLUR });
  }

  /**
   * 버튼의 비활성을 관리하는 함수입니다.
   */
  function getButtonDisabled() {
    // 이메일 체크
    return !state.email || !!state.emailErrorMessage;
  }

  /**
   * input에서 엔터를 누를경우 이메일을 전송을 시도하는 함수입니다.
   */
  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      onSendEmailClick();
    }
  }

  async function onSendEmailClick() {
    if (!getButtonDisabled() && !isSending) {
      try {
        setIsSending(true);
        await userService.sendResetPasswordEmail(state.email);
        setIsCompleted(true);
      } catch (err) {
        console.log(err);
        dispatch({ type: RESET_PASSWORD_ACTION_TYPE.HANDLE_ERROE_MESSAGE });
      } finally {
        setIsSending(false);
      }
    }
  }

  function onNavigateLoginPress() {
    navigate(PUBLIC_ROUTES.SIGN_IN.path, { replace: true });
  }

  return {
    models: {
      isCompleted,
      isSending,
      state,
      buttonDisabled: getButtonDisabled(),
    },
    inputOperations: {
      onChange,
      onFocus,
      onBlur,
      onKeyDown,
    },
    operations: {
      onSendEmailClick,
      onNavigateLoginPress,
    },
  };
}

export default useResetPasswordContainer;
