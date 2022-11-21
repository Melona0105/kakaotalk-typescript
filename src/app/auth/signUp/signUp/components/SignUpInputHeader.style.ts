import styled from "styled-components";
import { ThemeProps } from "../../../../utils/theme/theme.interface";

export const SignUpInputHeaderWrapper = styled.div<ThemeProps>(({ theme }) => ({
  paddingBottom: theme.spacing.xxLarge,
}));

export const SignUpInputHeaderTitle = styled.div<ThemeProps>(({ theme }) => ({
  fontSize: theme.fontSize.xLarge,
  paddingTop: theme.spacing.xLarge,
}));
