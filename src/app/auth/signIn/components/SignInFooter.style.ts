import styled from "styled-components";
import { ThemeProps } from "../../../utils/theme/theme.interface";

export const SignInFooterWrapper = styled.div<ThemeProps>(({ theme }) => ({
  display: "flex",
  gap: theme.spacing.middle,
  justifyContent: "center",
  paddingRight: theme.spacing.xxLarge * 2.5,
  paddingLeft: theme.spacing.xxLarge * 2.5,
  paddingBottom: theme.spacing.xxLarge,
}));

export const SignInVerticalSeparate = styled.div<ThemeProps>(({ theme }) => ({
  borderRight: `1px solid ${theme.colors.black}`,
}));
