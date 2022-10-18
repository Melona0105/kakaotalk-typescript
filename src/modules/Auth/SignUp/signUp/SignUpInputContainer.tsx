import SignUpInputBoxes from "./components/SignUpInputBoxes";
import SignUpInputHeader from "./components/SignUpInputHeader";
import {
  SignUpContainerView,
  SignUpContainerWrapper,
} from "../common/styles/signUpStyles";

function SignUpInputContainer() {
  return (
    <SignUpContainerWrapper>
      <SignUpContainerView>
        <SignUpInputHeader />
        <SignUpInputBoxes />
      </SignUpContainerView>
    </SignUpContainerWrapper>
  );
}

export default SignUpInputContainer;
