import { AppContainerWrapper } from "../../common/styles/commonStyles";
import SignInFooter from "./components/SignInFooter";
import SignInHeader from "./components/SignInHeader";
import { SignInContainerView } from "./SignInContainer.style";

function SignInContainer() {
  return (
    <AppContainerWrapper>
      <SignInContainerView>
        <SignInHeader />
        <SignInFooter />
      </SignInContainerView>
    </AppContainerWrapper>
  );
}

export default SignInContainer;
