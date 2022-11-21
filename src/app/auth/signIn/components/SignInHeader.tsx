import { SignInHeaderImage, SignInHeaderWrapper } from "./SignInHeader.style";
import SignInInputBoxes from "./signInInputBoxes/SignInInputBoxes";

/**
 * 로그인 상단의 이미지와 인풋을 렌더링하는 로그인 헤더입니다.
 */
function SignInHeader() {
  return (
    <SignInHeaderWrapper>
      <SignInHeaderImage />
      <SignInInputBoxes />
    </SignInHeaderWrapper>
  );
}

export default SignInHeader;
