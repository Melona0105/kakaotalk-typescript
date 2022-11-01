import styeld from "styled-components";
import { ThemeProps } from "../../../utils/theme/theme.interface";

export const SignInContainerWrapper = styeld.div<any>(
  ({ theme }: ThemeProps) => ({
    display: "flex",
    width: theme.config.width,
    height: theme.config.height,
    borderRadius: theme.config.borderRadius,
    backgroundColor: theme.colors.kakaoYellow,
    flexDirection: "column",
    justifyContent: "space-between",
  })
);
