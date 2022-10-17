import styled from "styled-components";
import { ThemeProps } from "../../utils/theme/theme.interface";

export const SignUpContainerWrapper = styled.div<any>(
  ({ theme }: ThemeProps) => ({
    padding: theme.spacing.large,
    paddingTop: theme.spacing.xLarge * 3,
  })
);
