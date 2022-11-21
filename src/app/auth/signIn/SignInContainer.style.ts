import { ThemeProps } from "app/utils/theme/theme.interface";
import styeld from "styled-components";

export const SignInContainerWrapper = styeld.div<ThemeProps>(({ theme }) => ({
  display: "flex",
  width: theme.config.width,
  height: theme.config.height,
  borderRadius: theme.config.borderRadius,
  backgroundColor: theme.colors.kakaoYellow,
  flexDirection: "column",
  justifyContent: "space-between",
}));
