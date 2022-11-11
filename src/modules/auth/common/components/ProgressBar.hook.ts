import { useNavigate } from "react-router-dom";
import { PUBLIC_ROUTES } from "routes/utils/routename";

function useProgressBar() {
  const naviagte = useNavigate();

  function navigateSignInButtonClick() {
    naviagte(PUBLIC_ROUTES.SIGN_IN.path);
  }

  return {
    operations: {
      navigateSignInButtonClick,
    },
  };
}

export default useProgressBar;
