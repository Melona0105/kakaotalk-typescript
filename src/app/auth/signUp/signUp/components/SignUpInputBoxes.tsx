import { useMemo } from "react";
import { useTheme } from "styled-components";
import useSignUpInputBoxes from "./SignUpInputBoxes.hook";
import { SIGN_UP_INPUT_ACTION_TYPE } from "./SignUpInputBoxes.interface";
import { SignUpInputBoxesWrapper } from "./SignUpInputBoxes.style";
import Button from "../../../../common/components/Button";
import InputBox from "../../../../common/components/InputBox";

/**
 * 회원가입 인풋들을 렌더링하는 컴포넌트입니다.
 */
function SignUpInputBoxes() {
  const theme = useTheme();
  const { models, operations } = useSignUpInputBoxes();
  const { state, buttonDisabled, isSubmitting } = models;
  const { dispatch, onSignUpButtonPress } = operations;
  const {
    email,
    emailErrorMessage,
    password,
    passwordErrorMessage,
    passwordConfirmation,
    passwordConfirmationErrorMessage,
    username,
    usernameErrorMessage,
  } = state;

  const MemorizedEmailInput = useMemo(
    () => (
      <InputBox
        placeholder="이메일 주소 입력"
        borderBottom={`1px solid ${theme.colors.inActive}`}
        disableBorderRadius
        showPadding={false}
        type="email"
        value={email}
        onChange={({ target }) =>
          dispatch({
            type: SIGN_UP_INPUT_ACTION_TYPE.ON_EMAIL_CHANGE,
            payload: target.value,
          })
        }
        onFocus={() =>
          dispatch({ type: SIGN_UP_INPUT_ACTION_TYPE.ON_EMAIL_FOCUS })
        }
        onBlur={() =>
          dispatch({ type: SIGN_UP_INPUT_ACTION_TYPE.ON_EMAIL_BLUR })
        }
        errorMessage={emailErrorMessage}
      />
    ),
    [email, emailErrorMessage, theme.colors.inActive, dispatch]
  );

  const MemorizedPaswordInput = useMemo(
    () => (
      <InputBox
        placeholder="비밀번호 입력 (숫자, 영문 포함 8자 이상)"
        borderBottom={`1px solid ${theme.colors.inActive}`}
        disableBorderRadius
        showPadding={false}
        paddingTop={theme.spacing.xxLarge}
        type="password"
        value={password}
        onChange={({ target }) =>
          dispatch({
            type: SIGN_UP_INPUT_ACTION_TYPE.ON_PASSWORD_CHANGE,
            payload: target.value,
          })
        }
        onFocus={() =>
          dispatch({ type: SIGN_UP_INPUT_ACTION_TYPE.ON_PASSWORD_FOCUS })
        }
        onBlur={() =>
          dispatch({ type: SIGN_UP_INPUT_ACTION_TYPE.ON_PASSWORD_BLUR })
        }
        errorMessage={passwordErrorMessage}
      />
    ),
    [password, passwordErrorMessage, theme, dispatch]
  );

  const MemorizedPasswordConfirmationInput = useMemo(
    () => (
      <InputBox
        placeholder="비밀번호 확인"
        borderBottom={`1px solid ${theme.colors.inActive}`}
        disableBorderRadius
        showPadding={false}
        paddingTop={theme.spacing.xxLarge}
        type="password"
        value={passwordConfirmation}
        onChange={({ target }) =>
          dispatch({
            type: SIGN_UP_INPUT_ACTION_TYPE.ON_PASSWORD_CONFIRMATION_CHANGE,
            payload: target.value,
          })
        }
        onFocus={() =>
          dispatch({
            type: SIGN_UP_INPUT_ACTION_TYPE.ON_PASSWORD_CONFIRMATION_FOCUS,
          })
        }
        onBlur={() =>
          dispatch({
            type: SIGN_UP_INPUT_ACTION_TYPE.ON_PASSWORD_CONFIRMATION_BLUR,
          })
        }
        errorMessage={passwordConfirmationErrorMessage}
      />
    ),
    [passwordConfirmation, passwordConfirmationErrorMessage, theme, dispatch]
  );

  const MemorizedUsername = useMemo(
    () => (
      <InputBox
        placeholder="이름을 입력해주세요."
        borderBottom={`1px solid ${theme.colors.inActive}`}
        disableBorderRadius
        showPadding={false}
        paddingTop={theme.spacing.xxLarge}
        value={username}
        onChange={({ target }) =>
          dispatch({
            type: SIGN_UP_INPUT_ACTION_TYPE.ON_USERNAME_CHANGE,
            payload: target.value,
          })
        }
        onFocus={() =>
          dispatch({
            type: SIGN_UP_INPUT_ACTION_TYPE.ON_USERNAME_FOCUS,
          })
        }
        onBlur={() =>
          dispatch({
            type: SIGN_UP_INPUT_ACTION_TYPE.ON_USERNAME_BLUR,
          })
        }
        errorMessage={usernameErrorMessage}
      />
    ),
    [username, usernameErrorMessage, theme, dispatch]
  );

  const MemorizedButton = useMemo(
    () => (
      <Button
        title={isSubmitting ? "잠시만 기다려주세요..." : "회원가입"}
        disabled={buttonDisabled || isSubmitting}
        marginTop={theme.spacing.xxLarge}
        onClick={onSignUpButtonPress}
      />
    ),
    [isSubmitting, buttonDisabled, theme, onSignUpButtonPress]
  );

  return (
    <SignUpInputBoxesWrapper>
      <div>
        {MemorizedUsername}
        {MemorizedEmailInput}
        {MemorizedPaswordInput}
        {MemorizedPasswordConfirmationInput}
      </div>
      {MemorizedButton}
    </SignUpInputBoxesWrapper>
  );
}

export default SignUpInputBoxes;
