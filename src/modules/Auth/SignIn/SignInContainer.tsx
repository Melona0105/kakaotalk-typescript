import SignInFooter from "./components/SignInFooter";
import SignInInputBoxes from "./components/SignInInputBoxes/SignInInputBoxes";
import {
  SignInContainerImage,
  SignInContainerView,
  SignInContainerWrapper,
} from "./SignInContainer.style";

function SignInContainer() {
  return (
    <SignInContainerWrapper>
      <SignInContainerView>
        <SignInContainerImage />
        <SignInInputBoxes />
        <SignInFooter />
      </SignInContainerView>
    </SignInContainerWrapper>
  );
}

export default SignInContainer;
