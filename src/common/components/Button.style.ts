import styled, { CSSProperties } from "styled-components";
import { ThemeProps } from "../../utils/theme/theme.interface";

interface ButtonWrapperStyleProps extends ThemeProps {
  marginTop?: CSSProperties["marginTop"];
  disabled?: boolean;
  backgroundColor?: CSSProperties["backgroundColor"];
  color?: CSSProperties["color"];
  fontSize?: CSSProperties["fontSize"];
}

export const ButtonWrapper = styled.div<any>(
  ({
    theme,
    disabled,
    marginTop,
    backgroundColor,
    color,
    fontSize,
  }: ButtonWrapperStyleProps) => ({
    textAlign: "center",
    padding: 10,
    backgroundColor: disabled
      ? theme.colors.inActive
      : backgroundColor || theme.colors.kakaoDarkGray,
    color: disabled ? "lightgray" : color || "white",
    fontSize,
    marginTop,
    borderRadius: 3,
    cursor: disabled ? "auto" : "pointer",
  })
);
