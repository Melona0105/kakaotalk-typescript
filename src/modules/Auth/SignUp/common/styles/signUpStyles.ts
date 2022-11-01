import styled from "styled-components";
import { ThemeProps } from "../../../../../utils/theme/theme.interface";

export const SignUpContainerView = styled.div<any>(({ theme }: ThemeProps) => ({
  padding: theme.spacing.large,
  paddingTop: theme.spacing.xLarge * 3,
  width: theme.config.width,
  height: theme.config.height,
  backgroundColor: theme.colors.white,
  borderRadius: theme.config.borderRadius,
}));
