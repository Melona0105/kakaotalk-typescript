import ProgressBar from "app/modules/auth/common/components/ProgressBar";
import {
  SignUpInputHeaderTitle,
  SignUpInputHeaderWrapper,
} from "./SignUpInputHeader.style";

function SignUpInputHeader() {
  return (
    <SignUpInputHeaderWrapper>
      <ProgressBar width="100%" />
      <SignUpInputHeaderTitle>
        카카오계정으로 사용할 <br />
        이메일 주소와 비밀번호를 입력해 주세요.
      </SignUpInputHeaderTitle>
    </SignUpInputHeaderWrapper>
  );
}

export default SignUpInputHeader;
