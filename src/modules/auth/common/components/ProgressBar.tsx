import Button from "modules/common/components/Button";
import { CSSProperties } from "react";
import { useTheme } from "styled-components";
import useProgressBar from "./ProgressBar.hook";
import {
  ProgressBarPercent,
  ProgressBarDiv,
  ProgressBarWrapper,
} from "./ProgressBar.style";

interface ProgressBarProps {
  width: CSSProperties["width"];
}

/**
 * 회원가입 상단의 프로그레스바 컴포넌트입니다.
 */
function ProgressBar({ width }: ProgressBarProps) {
  const theme = useTheme();
  const { operations } = useProgressBar();
  const { navigateSignInButtonClick } = operations;

  return (
    <ProgressBarWrapper>
      <ProgressBarDiv>
        <ProgressBarPercent width={width} />
      </ProgressBarDiv>
      <Button
        title="처음으로"
        backgroundColor="transparent"
        color={theme.colors.black}
        fontSize={theme.fontSize.small}
        padding={0}
        marginTop={0}
        onClick={navigateSignInButtonClick}
      />
    </ProgressBarWrapper>
  );
}

export default ProgressBar;
