import SignInFooter from "./components/SignInFooter";
import SignInHeader from "./components/SignInHeader";
import { SignInContainerWrapper } from "./SignInContainer.style";

/**
 * 로그인 컨테이너입니다.
 */
function SignInContainer() {
  return (
    <SignInContainerWrapper>
      <SignInHeader />
      <SignInFooter />
    </SignInContainerWrapper>
  );
}

export default SignInContainer;
