import SignUpInputBoxes from "./components/SignUpInputBoxes";
import SignUpInputHeader from "./components/SignUpInputHeader";
import { SignUpInputContainerWrapper } from "./SignUpInputContainer.style";

function SignUpInputContainer() {
  return (
    <SignUpInputContainerWrapper>
      <SignUpInputHeader />
      <SignUpInputBoxes />
    </SignUpInputContainerWrapper>
  );
}

export default SignUpInputContainer;
