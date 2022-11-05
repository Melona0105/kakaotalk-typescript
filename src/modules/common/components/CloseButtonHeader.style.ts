import closeIcon from "assets/icons/button_close.png";
import styled from "styled-components";
import { ThemeProps } from "utils/theme/theme.interface";

const CLOSE_ICON_SIZE = 20;

export const CloseButtonHeaderWrapper = styled.div<ThemeProps>(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  position: "relative",
  paddingTop: theme.spacing.small,
}));

export const CloseButtonHeaderIcon = styled.img.attrs(() => ({
  src: closeIcon,
}))<ThemeProps>(({ theme }) => ({
  width: CLOSE_ICON_SIZE,
  height: CLOSE_ICON_SIZE,
  position: "absolute",
  left: 0,
  cursor: "pointer",
}));

export const CloseButtonHeaderTitle = styled.div<ThemeProps>(({ theme }) => ({
  fontSize: theme.fontSize.default,
}));
