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
      </SignInContainerView>
    </SignInContainerWrapper>
  );
}

export default SignInContainer;
