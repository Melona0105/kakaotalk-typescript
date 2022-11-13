import { CSSProperties } from "react";
import styled from "styled-components";
import { ThemeProps } from "../../../utils/theme/theme.interface";

interface InputBoxWrapperStyleProps extends ThemeProps {
  showBorderBottom?: boolean;
  width?: CSSProperties["width"];
  borderBottom?: CSSProperties["borderBottom"];
  paddingTop?: CSSProperties["paddingTop"];
  disableBorderRadius?: boolean;
  showPadding?: boolean;
  errorActivated?: boolean;
}

export const InputBoxWrapper = styled.div<InputBoxWrapperStyleProps>(
  ({
    theme,
    width,
    showBorderBottom,
    showPadding = true,
    paddingTop,
    borderBottom,
    disableBorderRadius,
    errorActivated,
  }) => ({
    width,
    margin: 0,
    padding: theme.spacing.xxSmall * 5,
    paddingLeft: showPadding ? theme.spacing.xxSmall * 5 : 0,
    borderBottom:
      borderBottom ||
      (showBorderBottom ? `1px solid ${theme.colors.inActive}` : "none"),
    borderTopLeftRadius: showBorderBottom ? theme.spacing.xSmall : 0,
    borderTopRightRadius: showBorderBottom ? theme.spacing.xSmall : 0,
    borderBottomRightRadius: showBorderBottom ? 0 : theme.spacing.xSmall,
    borderBottomLeftRadius: showBorderBottom ? 0 : theme.spacing.xSmall,
    borderRadius: disableBorderRadius ? 0 : undefined,
    paddingTop,
    backgroundColor: theme.colors.white,
    borderColor: errorActivated ? theme.colors.red : undefined,
  })
);

export const InputBoxInput = styled.input<ThemeProps>(() => ({
  width: "100%",
  outline: "none",
  border: "none",
  padding: 0,
  margin: 0,
}));

export const InputBoxErrorMessage = styled.div<ThemeProps>(({ theme }) => ({
  fontSize: theme.fontSize.xSmall,
  color: theme.colors.red,
  paddingTop: theme.spacing.small,
}));
