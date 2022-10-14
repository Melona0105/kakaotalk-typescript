import styled from "styled-components";
import { ThemeProps } from "../../../utils/theme/theme.interface";

export const SignInFooterWrapper = styled.div<any>(({ theme }: ThemeProps) => ({
  width: "100%",
  paddingTop: theme.spacing.xxLarge * 3,
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing.middle,
}));

export const SignInVerticalSeparate = styled.div<any>(
  ({ theme }: ThemeProps) => ({
    borderRight: `1px solid ${theme.colors.black}`,
  })
);
