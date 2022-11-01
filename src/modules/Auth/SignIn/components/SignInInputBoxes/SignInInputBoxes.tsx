import { useMemo } from "react";
import useSignInInputBoxes from "./SignInInputBoxes.hook";
import { SIGN_IN_INPUT_ACTION_TYPE } from "./SignInInputBoxes.interface";
import {
  SignInDiv,
  SignInErrorMessage,
  SignInInputBoxesWrapper,
} from "./SignInInputBoxes.style";
import Button from "../../../../common/components/Button";
import InputBox from "../../../../common/components/InputBox";

function SignInInputBoxes() {
  const { models, operations } = useSignInInputBoxes();
  const { state, buttonDisabled } = models;
  const { onTextChange, onFocus, onSignInButtonPress } = operations;

  const { email, password, errorMessage } = state;

  const MemorizedEmailInput = useMemo(
    () => (
      <InputBox
        width={230}
        value={email}
        placeholder="카카오계정 (이메일 또는 전화번호)"
        showBorderBottom
        onChange={(e) =>
          onTextChange(e, SIGN_IN_INPUT_ACTION_TYPE.ON_EMAIL_CHANGE)
        }
        type="email"
        onFocus={onFocus}
      />
    ),
    [email, errorMessage]
  );

  const MemorizedPasswordInput = useMemo(
    () => (
      <InputBox
        width={230}
        value={password}
        placeholder="비밀번호"
        showBorderBottom
        onChange={(e) =>
          onTextChange(e, SIGN_IN_INPUT_ACTION_TYPE.ON_PASSWORD_CHANGE)
        }
        type="password"
        onFocus={onFocus}
      />
    ),
    [password, errorMessage]
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
    [email, password, errorMessage]
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
