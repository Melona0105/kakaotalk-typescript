import styled from "styled-components";
import { ThemeProps } from "../../../../../utils/theme/theme.interface";

export const SignInInputBoxesWrapper = styled.div<ThemeProps>(() => ({
  borderRadius: 3,
}));

export const SignInDiv = styled.div<ThemeProps>(({ theme }) => ({
  width: 250,
  border: `1px solid ${theme.colors.inActive}`,
}));

export const SignInErrorMessage = styled.div<ThemeProps>(({ theme }) => ({
  color: theme.colors.red,
  paddingTop: theme.spacing.small,
  fontSize: theme.fontSize.small,
  textAlign: "center",
}));
