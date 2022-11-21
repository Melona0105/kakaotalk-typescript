import { ButtonStyleLink } from "../../../common/styles/commonStyles";
import { PUBLIC_ROUTES } from "../../../routes/utils/routename";
import {
  SignInFooterWrapper,
  SignInVerticalSeparate,
} from "./SignInFooter.style";

/**
 * 로그인 하단의 버튼들입니다.
 */
function SignInFooter() {
  return (
    <SignInFooterWrapper>
      <ButtonStyleLink to={PUBLIC_ROUTES.SIGN_UP.path} $showBorderRight>
        회원가입
      </ButtonStyleLink>
      <SignInVerticalSeparate />
      <ButtonStyleLink to={PUBLIC_ROUTES.FIND_PASSWORD.path}>
        비밀번호 재설정
      </ButtonStyleLink>
    </SignInFooterWrapper>
  );
}

export default SignInFooter;
