import styled from "styled-components";
import { ThemeProps } from "../../utils/theme/theme.interface";

export const LayoutWrapper = styled.div<ThemeProps>(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.colors.black,
}));

export const LayoutDiv = styled.div<ThemeProps>(({ theme }) => ({
  display: "flex",
  width: theme.config.width,
  height: theme.config.height,
  borderRadius: theme.config.borderRadius,
  backgroundColor: theme.colors.white,
  flexDirection: "column",
  justifyContent: "space-between",
}));
