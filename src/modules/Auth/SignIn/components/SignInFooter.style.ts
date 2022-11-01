import styled from "styled-components";
import { ThemeProps } from "../../../../utils/theme/theme.interface";

export const SignInFooterWrapper = styled.div<any>(({ theme }: ThemeProps) => ({
  display: "flex",
  gap: theme.spacing.middle,
  justifyContent: "center",
  paddingRight: theme.spacing.xxLarge * 2.5,
  paddingLeft: theme.spacing.xxLarge * 2.5,
}));

export const SignInVerticalSeparate = styled.div<any>(
  ({ theme }: ThemeProps) => ({
    borderRight: `1px solid ${theme.colors.black}`,
  })
);
