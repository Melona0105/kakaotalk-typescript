import { SignInHeaderImage, SignInHeaderWrapper } from "./SignInHeader.style";
import SignInInputBoxes from "./SignInInputBoxes/SignInInputBoxes";

function SignInHeader() {
  return (
    <SignInHeaderWrapper>
      <SignInHeaderImage />
      <SignInInputBoxes />
    </SignInHeaderWrapper>
  );
}

export default SignInHeader;
