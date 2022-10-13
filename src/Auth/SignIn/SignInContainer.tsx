import SignInInputBoxes from "./components/SignInInputBoxes";
import useSignInContainer from "./SignInContainer.hook";
import {
  SignInContainerImage,
  SignInContainerView,
  SignInContainerWrapper,
} from "./SignInContainer.style";

function SignInContainer() {
  const { models, operations } = useSignInContainer();
  const { state } = models;
  const { onTextChange } = operations;

  return (
    <SignInContainerWrapper>
      <SignInContainerView>
        <SignInContainerImage />
        <SignInInputBoxes
          email={state.email}
          password={state.password}
          onTextChange={onTextChange}
        />
      </SignInContainerView>
    </SignInContainerWrapper>
  );
}

export default SignInContainer;
