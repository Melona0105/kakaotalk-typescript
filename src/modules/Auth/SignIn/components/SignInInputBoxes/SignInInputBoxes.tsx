import { useMemo } from "react";
import useSignInInputBoxes from "./SignInInputBoxes.hook";
import { SIGN_IN_INPUT_ACTION_TYPE } from "./SignInInputBoxes.interface";
import { SignInDiv, SignInInputBoxesWrapper } from "./SignInInputBoxes.style";
import Button from "../../../../common/components/Button";
import InputBox from "../../../../common/components/InputBox";

function SignInInputBoxes() {
  const { models, operations } = useSignInInputBoxes();
  const { state, buttonDisabled } = models;
  const { onTextChange, onSignInButtonPress } = operations;

  const { email, password } = state;

  const MemoriezedEmailInput = useMemo(
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
      />
    ),
    [email]
  );

  const MemoriezedPasswordInput = useMemo(
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
      />
    ),
    [password]
  );

  return (
    <SignInInputBoxesWrapper>
      <SignInDiv>
        {MemoriezedEmailInput}
        {MemoriezedPasswordInput}
      </SignInDiv>

      <Button
        title="로그인"
        width={230}
        disabled={buttonDisabled}
        marginTop={10}
        onClick={onSignInButtonPress}
      />
    </SignInInputBoxesWrapper>
  );
}

export default SignInInputBoxes;
