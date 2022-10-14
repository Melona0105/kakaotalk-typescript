import styled from "styled-components";
import { ThemeProps } from "../../utils/theme/theme.interface";

interface InputBoxInputStyleProps extends ThemeProps {
  showBorderBottom: boolean;
}

export const InputBoxInput = styled.input<any>(
  ({ theme, showBorderBottom }: InputBoxInputStyleProps) => ({
    width: 230,
    outline: "none",
    border: "none",
    margin: 0,
    padding: theme.spacing.xxSmall * 5,
    borderBottom: showBorderBottom
      ? `1px solid ${theme.colors.inActive}`
      : "none",
    borderTopLeftRadius: showBorderBottom ? theme.spacing.xSmall : 0,
    borderTopRightRadius: showBorderBottom ? theme.spacing.xSmall : 0,
    borderBottomRightRadius: showBorderBottom ? 0 : theme.spacing.xSmall,
    borderBottomLeftRadius: showBorderBottom ? 0 : theme.spacing.xSmall,
  })
);
