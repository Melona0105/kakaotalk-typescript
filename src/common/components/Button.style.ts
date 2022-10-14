import styled, { CSSProperties } from "styled-components";
import { ThemeProps } from "../../utils/theme/theme.interface";

interface ButtonWrapperStyleProps extends ThemeProps {
  marginTop?: CSSProperties["marginTop"];
  disabled?: boolean;
}

export const ButtonWrapper = styled.div<any>(
  ({ theme, disabled, marginTop }: ButtonWrapperStyleProps) => ({
    textAlign: "center",
    padding: 10,
    backgroundColor: disabled
      ? theme.colors.inActive
      : theme.colors.kakaoDarkGray,
    color: disabled ? "lightgray" : "white",
    marginTop,
    borderRadius: 3,
    cursor: disabled ? "auto" : "pointer",
  })
);
