import styled from "styled-components";
import { ThemeProps } from "../../../../../utils/theme/theme.interface";

export const SignUpContainerWrapper = styled.div<any>(() => ({
  position: "absolute",
  left: 0,
  right: 0,
  display: "flex",
  justifyContent: "center",
}));

export const SignUpContainerView = styled.div<any>(({ theme }: ThemeProps) => ({
  padding: theme.spacing.large,
  paddingTop: theme.spacing.xLarge * 3,
  width: "100%",
  maxWidth: 390,
}));
