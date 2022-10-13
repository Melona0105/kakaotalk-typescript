import styeld from "styled-components";
import kakaoLogo from "../../assets/kakao_logo.png";

export const SignInContainerWrapper = styeld.div<any>(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "black",
}));

export const SignInContainerView = styeld.div<any>(() => ({
  display: "flex",
  maxWidth: 390,
  maxHeight: 640,
  borderRadius: 10,
  backgroundColor: "#ffe603",
  flexDirection: "column",
  alignItems: "center",
  padding: 70,
  paddingBottom: 40,
}));

export const SignInContainerImage = styeld.img.attrs(() => ({
  src: kakaoLogo,
}))(() => ({
  paddingBottom: 20,
  width: 130,
}));
