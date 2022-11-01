import styled, { CSSProperties } from "styled-components";
import { ThemeProps } from "../../../../utils/theme/theme.interface";

export const ProgressBarWrapper = styled.div<ThemeProps>(({ theme }) => ({
  backgroundColor: theme.colors.inActive,
  width: 70,
  height: 5,
  borderRadius: 5,
}));

interface ProgressBarDivStyleProps extends ThemeProps {
  width: CSSProperties["width"];
}

export const ProgressBarDiv = styled.div<ProgressBarDivStyleProps>(
  ({ theme, width = "20%" }) => ({
    width,
    height: "100%",
    backgroundColor: theme.colors.kakaoDarkGray,
    borderRadius: 5,
  })
);
