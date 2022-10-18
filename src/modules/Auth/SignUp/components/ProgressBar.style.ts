import styled, { CSSProperties } from "styled-components";
import { ThemeProps } from "../../../../utils/theme/theme.interface";

export const ProgressBarWrapper = styled.div<any>(({ theme }: ThemeProps) => ({
  backgroundColor: theme.colors.inActive,
  width: 70,
  height: 5,
  borderRadius: 5,
}));

interface ProgressBarDivStyleProps extends ThemeProps {
  width: CSSProperties["width"];
}

export const ProgressBarDiv = styled.div<any>(
  ({ theme, width = "20%" }: ProgressBarDivStyleProps) => ({
    width,
    height: "100%",
    backgroundColor: theme.colors.kakaoDarkGray,
    borderRadius: 5,
  })
);
