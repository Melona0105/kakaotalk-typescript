import { useMemo } from "react";
import useSignInInputBoxes from "./SignInInputBoxes.hook";
import { SIGN_IN_INPUT_ACTION_TYPE } from "./SignInInputBoxes.interface";
import Button from "../../../../common/components/Button";
import InputBox from "../../../../common/components/InputBox";
import {
  SignInDiv,
  SignInErrorMessage,
  SignInInputBoxesWrapper,
} from "./SignInInputBoxes.style";

/**
 * 로그인 인풋들을 렌더링하는 컴포넌트입니다.
 */
function SignInInputBoxes() {
  const { models, operations } = useSignInInputBoxes();
  const { state, buttonDisabled } = models;
  const { onTextChange, onFocus, onEnterKeyPress, onSignInButtonPress } =
    operations;

  const { email, password, errorMessage } = state;

  const MemorizedEmailInput = useMemo(
    () => (
      <InputBox
        width={230}
        value={email}
        placeholder="카카오계정 (이메일 또는 전화번호)"
        showBorderBottom
        onKeyDown={onEnterKeyPress}
        onChange={(e) =>
          onTextChange(e, SIGN_IN_INPUT_ACTION_TYPE.ON_EMAIL_CHANGE)
        }
        type="email"
        onFocus={onFocus}
      />
    ),
    [email, onEnterKeyPress, onTextChange, onFocus]
  );

  const MemorizedPasswordInput = useMemo(
    () => (
      <InputBox
        width={230}
        value={password}
        placeholder="비밀번호"
        showBorderBottom
        onKeyDown={onEnterKeyPress}
        onChange={(e) =>
          onTextChange(e, SIGN_IN_INPUT_ACTION_TYPE.ON_PASSWORD_CHANGE)
        }
        type="password"
        onFocus={onFocus}
      />
    ),
    [password, onEnterKeyPress, onTextChange, onFocus]
  );

  const MemorizedErrorMessage = useMemo(
    () =>
      errorMessage && <SignInErrorMessage>{errorMessage}</SignInErrorMessage>,
    [errorMessage]
  );

  const MemorizedButton = useMemo(
    () => (
      <Button
        title="로그인"
        width={230}
        disabled={buttonDisabled}
        marginTop={10}
        onClick={onSignInButtonPress}
      />
    ),
    [buttonDisabled, onSignInButtonPress]
  );

  return (
    <SignInInputBoxesWrapper>
      <SignInDiv>
        {MemorizedEmailInput}
        {MemorizedPasswordInput}
      </SignInDiv>

      {MemorizedErrorMessage}
      {MemorizedButton}
    </SignInInputBoxesWrapper>
  );
}

export default SignInInputBoxes;
