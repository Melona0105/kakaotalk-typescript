import { useTheme } from "styled-components";
import ProgressBar from "./components/ProgressBar";
import SignUpTerms from "./components/SignUpTerms";
import useSignUpContainer from "./SIgnUpContainer.hook";
import { SignUpContainerWrapper } from "./SIgnUpContainer.style";
import Button from "../../common/components/Button";

/**
 * 회원가입에 컨테이너입니다.
 */
function SignUpContainer() {
  const theme = useTheme();
  const { models, operations } = useSignUpContainer();
  const { termsIndexes } = models;
  const { onTermClick, onAgreeButtonPress } = operations;

  return (
    <SignUpContainerWrapper>
      <ProgressBar width="20%" />
      <SignUpTerms termsIndexes={termsIndexes} onTermClick={onTermClick} />
      <Button
        title="동의"
        backgroundColor={theme.colors.kakaoYellow}
        color={theme.colors.black}
        fontSize={theme.fontSize.default}
        disabled={!termsIndexes[0]}
        onClick={onAgreeButtonPress}
      />
    </SignUpContainerWrapper>
  );
}

export default SignUpContainer;

// https://accounts.kakao.com/weblogin/create_account/?continue=https://accounts.kakao.com/weblogin/account/info#confirmTerm
