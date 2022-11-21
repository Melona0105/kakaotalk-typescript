import styled, { CSSProperties } from "styled-components";
import { ThemeProps } from "../../../utils/theme/theme.interface";

export const ProgressBarWrapper = styled.div<ThemeProps>(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const ProgressBarDiv = styled.div<ThemeProps>(({ theme }) => ({
  backgroundColor: theme.colors.inActive,
  width: 70,
  height: 5,
  borderRadius: 5,
}));

interface ProgressBarDivStyleProps extends ThemeProps {
  width: CSSProperties["width"];
}

export const ProgressBarPercent = styled.div<ProgressBarDivStyleProps>(
  ({ theme, width = "20%" }) => ({
    width,
    height: "100%",
    backgroundColor: theme.colors.kakaoDarkGray,
    borderRadius: 5,
  })
);
