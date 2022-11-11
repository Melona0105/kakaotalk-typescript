import { CSSProperties } from "react";
import { ProgressBarDiv, ProgressBarWrapper } from "./ProgressBar.style";

interface ProgressBarProps {
  width: CSSProperties["width"];
}

/**
 * 회원가입 상단의 프로그레스바 컴포넌트입니다.
 */
function ProgressBar({ width }: ProgressBarProps) {
  return (
    <ProgressBarWrapper>
      <ProgressBarDiv width={width} />
    </ProgressBarWrapper>
  );
}

export default ProgressBar;
