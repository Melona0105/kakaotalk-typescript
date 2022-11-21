import { PUBLIC_ROUTES } from "app/routes/utils/routename";
import { useNavigate } from "react-router-dom";

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
