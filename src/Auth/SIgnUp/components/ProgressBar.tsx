import { CSSProperties } from "react";
import { ProgressBarDiv, ProgressBarWrapper } from "./ProgressBar.style";

interface ProgressBarProps {
  width: CSSProperties["width"];
}

function ProgressBar({ width }: ProgressBarProps) {
  return (
    <ProgressBarWrapper>
      <ProgressBarDiv width={width} />
    </ProgressBarWrapper>
  );
}

export default ProgressBar;
