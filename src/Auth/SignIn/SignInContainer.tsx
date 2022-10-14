import SignInFooter from "./components/SignInFooter";
import SignInInputBoxes from "./components/SignInInputBoxes/SignInInputBoxes";
import { useScreenDimensionContext } from "../../common/providers/ScreenDimensionProvider";
import {
  SignInContainerImage,
  SignInContainerView,
  SignInContainerWrapper,
} from "./SignInContainer.style";

function SignInContainer() {
  const { width, height } = useScreenDimensionContext();

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
