import styled from "styled-components";
import { ThemeProps } from "../../../../../utils/theme/theme.interface";

export const SignUpInputHeaderWrapper = styled.div<any>(
  ({ theme }: ThemeProps) => ({
    paddingBottom: theme.spacing.xxLarge,
  })
);

export const SignUpInputHeaderTitle = styled.div<any>(
  ({ theme }: ThemeProps) => ({
    fontSize: theme.fontSize.xLarge,
    paddingTop: theme.spacing.xLarge,
  })
);
