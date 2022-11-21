import { useNavigate } from "react-router-dom";

/**
 * navigation을 이용한 custom hook 입니다.
 */
function useCustomNavigation() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return { goBack };
}

export default useCustomNavigation;
