import styeld from "styled-components";
import kakaoLogo from "assets/images/kakao_logo.png";
import { ThemeProps } from "../../../../utils/theme/theme.interface";

const SIGN_IN_IMAGE_WIDTH = 130;

export const SignInHeaderWrapper = styeld.div<ThemeProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: theme.spacing.xxLarge * 2,
}));

export const SignInHeaderImage = styeld.img.attrs<ThemeProps>(() => ({
  src: kakaoLogo,
}))(({ theme }) => ({
  paddingBottom: theme.spacing.large,
  width: SIGN_IN_IMAGE_WIDTH,
}));
