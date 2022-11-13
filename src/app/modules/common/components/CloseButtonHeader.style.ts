import { ThemeProps } from "app/utils/theme/theme.interface";
import closeIcon from "assets/icons/button_close.png";
import { CSSProperties } from "react";
import styled from "styled-components";

const CLOSE_ICON_SIZE = 20;

interface CloseButtonHeaderWrapperStyleProps extends ThemeProps {
  showPaddingBottom?: boolean;
}

export const CloseButtonHeaderWrapper =
  styled.div<CloseButtonHeaderWrapperStyleProps>(
    ({ theme, showPaddingBottom }) => ({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "relative",
      paddingTop: theme.spacing.small,
      paddingBottom: showPaddingBottom ? theme.spacing.middle : 0,
    })
  );

export const CloseButtonHeaderIcon = styled.img.attrs(() => ({
  src: closeIcon,
}))<ThemeProps>(() => ({
  width: CLOSE_ICON_SIZE,
  height: CLOSE_ICON_SIZE,
  cursor: "pointer",
  zIndex: 10,
}));

export const CloseButtonHeaderTitle = styled.div<ThemeProps>(({ theme }) => ({
  fontSize: theme.fontSize.default,
  position: "absolute",
  left: 0,
  right: 0,
  textAlign: "center",
  zIndex: 0,
}));

interface CloseButtonHeaderRightButtonStyleProps extends ThemeProps {
  visibility: CSSProperties["visibility"];
  disabled?: boolean;
}

export const CloseButtonHeaderRightButton =
  styled.div<CloseButtonHeaderRightButtonStyleProps>(
    ({ theme, visibility, disabled }) => ({
      visibility,
      fontSize: theme.fontSize.small,
      color: disabled ? theme.colors.gray2 : theme.colors.black,
      cursor: disabled ? "auto" : "pointer",
      zIndex: 10,
    })
  );
