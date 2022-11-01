import styeld from "styled-components";
import kakaoLogo from "../../../../assets/images/kakao_logo.png";
import { ThemeProps } from "../../../../utils/theme/theme.interface";

const SIGN_IN_IMAGE_WIDTH = 130;

export const SignInHeaderWrapper = styeld.div<any>(({ theme }: ThemeProps) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: theme.spacing.xxLarge * 2,
}));

export const SignInHeaderImage = styeld.img.attrs(() => ({
  src: kakaoLogo,
}))(({ theme }: ThemeProps) => ({
  paddingBottom: theme.spacing.large,
  width: SIGN_IN_IMAGE_WIDTH,
}));
