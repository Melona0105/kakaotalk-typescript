import { useTheme } from "styled-components";
import useSignUpTermsContainer from "./SignUpTermsContainer.hook";
import Button from "../../../common/components/Button";
import ProgressBar from "../components/ProgressBar";
import SignUpTerms from "../components/SignUpTerms";
import { SignUpTermsContainerWrapper } from "./SignUpTermsContainer.style";
import { useMemo } from "react";

/**
 * 회원가입 약관 컨테이너입니다.
 */
function SignUpTermsContainer() {
  const theme = useTheme();
  const { models, operations } = useSignUpTermsContainer();
  const { termsIndexes, buttonDisabled } = models;
  const { onTermClick, onAgreeButtonPress } = operations;

  const MemorizedButton = useMemo(
    () => (
      <Button
        title="동의"
        backgroundColor={theme.colors.kakaoYellow}
        color={theme.colors.black}
        fontSize={theme.fontSize.default}
        disabled={buttonDisabled}
        onClick={onAgreeButtonPress}
      />
    ),
    [buttonDisabled]
  );

  return (
    <SignUpTermsContainerWrapper>
      <ProgressBar width="50%" />
      <SignUpTerms termsIndexes={termsIndexes} onTermClick={onTermClick} />
      {MemorizedButton}
    </SignUpTermsContainerWrapper>
  );
}

export default SignUpTermsContainer;
