import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * ESC 버튼에 반응하여 history back을 실행하는 훅입니다.
 */
function useEscapeShortcut() {
  const navigate = useNavigate();

  const onKeyDown = useCallback(
    (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") {
        navigate(-1);
      }
    },
    [navigate]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);
}

export default useEscapeShortcut;
