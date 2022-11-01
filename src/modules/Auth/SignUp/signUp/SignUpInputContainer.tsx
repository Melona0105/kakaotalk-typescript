import SignUpInputBoxes from "./components/SignUpInputBoxes";
import SignUpInputHeader from "./components/SignUpInputHeader";
import { SignUpInputContainerWrapper } from "./SignUpInputContainer.style";

/**
 * 회원가입 컨테이너입니다.
 */
function SignUpInputContainer() {
  return (
    <SignUpInputContainerWrapper>
      <SignUpInputHeader />
      <SignUpInputBoxes />
    </SignUpInputContainerWrapper>
  );
}

export default SignUpInputContainer;
