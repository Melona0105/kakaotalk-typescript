import { useMemo } from "react";
import { useTheme } from "styled-components";
import useSignUpInputBoxes from "./SignUpInputBoxes.hook";
import { SIGN_UP_INPUT_ACTION_TYPE } from "./SignUpInputBoxes.interface";
import Button from "../../../../common/components/Button";
import InputBox from "../../../../common/components/InputBox";
import { SignUpInputBoxesWrapper } from "./SignUpInputBoxes.style";

function SignUpInputBoxes() {
  const theme = useTheme();
  const { models, operations } = useSignUpInputBoxes();
  const { state, buttonDisabled } = models;
  const { dispatch, onSignUpButtonPress } = operations;
  const {
    email,
    emailErrorMessage,
    password,
    passwordErrorMessage,
    passwordConfirmation,
    passwordConfirmationErrorMessage,
    username,
    usernameErrorMessgae,
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
    [email, emailErrorMessage]
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
    [
      password,
      passwordErrorMessage,
      passwordConfirmation,
      passwordConfirmationErrorMessage,
    ]
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
    [
      password,
      passwordErrorMessage,
      passwordConfirmation,
      passwordConfirmationErrorMessage,
    ]
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
        errorMessage={usernameErrorMessgae}
      />
    ),
    [username, usernameErrorMessgae]
  );

  return (
    <SignUpInputBoxesWrapper>
      <div>
        {MemorizedUsername}
        {MemorizedEmailInput}
        {MemorizedPaswordInput}
        {MemorizedPasswordConfirmationInput}
      </div>
      <Button
        title="회원가입"
        disabled={buttonDisabled}
        marginTop={theme.spacing.xxLarge}
        onClick={onSignUpButtonPress}
      />
    </SignUpInputBoxesWrapper>
  );
}

export default SignUpInputBoxes;
