import SignInFooter from "./components/SignInFooter";
import SignInHeader from "./components/SignInHeader";
import { SignInContainerWrapper } from "./SignInContainer.style";

function SignInContainer() {
  return (
    <SignInContainerWrapper>
      <SignInHeader />
      <SignInFooter />
    </SignInContainerWrapper>
  );
}

export default SignInContainer;
