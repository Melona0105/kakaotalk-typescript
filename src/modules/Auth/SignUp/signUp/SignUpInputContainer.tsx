import SignUpInputBoxes from "./components/SignUpInputBoxes";
import SignUpInputHeader from "./components/SignUpInputHeader";
import { SignUpContainerView } from "../common/styles/signUpStyles";
import { AppContainerWrapper } from "../../../common/styles/commonStyles";

function SignUpInputContainer() {
  return (
    <AppContainerWrapper>
      <SignUpContainerView>
        <SignUpInputHeader />
        <SignUpInputBoxes />
      </SignUpContainerView>
    </AppContainerWrapper>
  );
}

export default SignUpInputContainer;
