import { PUBLIC_ROUTES } from "app/routes/utils/routename";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SignUpInputBoxes from "./components/SignUpInputBoxes";
import SignUpInputHeader from "./components/SignUpInputHeader";
import { SignUpInputContainerWrapper } from "./SignUpInputContainer.style";

/**
 * 회원가입 컨테이너입니다.
 */
function SignUpInputContainer() {
  const { state } = useLocation();
  const navigate = useNavigate();

  /**
   * 동의한 내용이 없을 경우에는 이전 화면으로 돌려보냅니다.
   */
  useEffect(() => {
    if (!state) {
      navigate(PUBLIC_ROUTES.SIGN_UP.path);
    }
  }, [state]);

  return (
    <SignUpInputContainerWrapper>
      <SignUpInputHeader />
      <SignUpInputBoxes />
    </SignUpInputContainerWrapper>
  );
}

export default SignUpInputContainer;
