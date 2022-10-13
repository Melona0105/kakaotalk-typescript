import { ChangeEvent, useMemo } from "react";
import { SignInDiv, SignInInputBoxesWrapper } from "./SignInInputBoxes.style";
import Button from "../../../common/components/Button";
import InputBox from "../../../common/components/InputBox";
import { SIGN_IN_ACTION_TYPE } from "../SignInContainer.interface";

interface SignInInputBoxesProps {
  email: string;
  password: string;
  onTextChange: (
    e: ChangeEvent<HTMLInputElement>,
    type: SIGN_IN_ACTION_TYPE
  ) => void;
}

function SignInInputBoxes({
  email,
  password,
  onTextChange,
}: SignInInputBoxesProps) {
  const MemoriezedEmailInput = useMemo(
    () => (
      <InputBox
        value={email}
        placeholder="카카오계정 (이메일 또는 전화번호)"
        showBorderBottom
        onChange={(e) => onTextChange(e, SIGN_IN_ACTION_TYPE.ON_EMAIL_CHANGE)}
        type="email"
      />
    ),
    [email]
  );

  const MemoriezedPasswordInput = useMemo(
    () => (
      <InputBox
        value={password}
        placeholder="비밀번호"
        showBorderBottom
        onChange={(e) =>
          onTextChange(e, SIGN_IN_ACTION_TYPE.ON_PASSWORD_CHANGE)
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

      <Button buttonTitle="로그인" disabled marginTop={10} />
    </SignInInputBoxesWrapper>
  );
}

export default SignInInputBoxes;
